import { getDataProvider } from '../api.js';
import { fetchFmpIndexQuotes, fetchFmpIndexHistory } from './fmp.js';
import { getCachedTickerIndices } from './liveAdvanced.js';

const BAR_COUNT = 30;
const HISTORY_TTL = 30 * 60 * 1000;

export const HOME_INDICES = [
  { symbol: '^GSPC', label: 'S&P 500', etf: 'SPY', decimals: 2 },
  { symbol: '^DJI', label: 'Dow Jones', etf: 'DIA', decimals: 2 },
  { symbol: '^IXIC', label: 'Nasdaq', etf: 'QQQ', decimals: 2 },
  { symbol: '^RUT', label: 'Russell 2000', etf: 'IWM', decimals: 2 },
  { symbol: '^VIX', label: 'VIX', etf: null, decimals: 2 },
];

let historyCache = null;

function seededRand(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function mockHistory(price, symbol, count = 30) {
  const rand = seededRand(symbol + 'idx');
  const series = [];
  let v = price * (0.97 + rand() * 0.02);
  for (let i = 0; i < count; i++) {
    const o = v;
    v = Math.max(0.01, v * (1 + (rand() - 0.48) * 0.012));
    const c = v;
    const h = Math.max(o, c) * (1 + rand() * 0.006);
    const l = Math.min(o, c) * (1 - rand() * 0.006);
    series.push({ t: Date.now() - (count - i) * 86400000, o, h, l, c });
  }
  if (series.length) series[series.length - 1].c = price;
  return series;
}

function lightToOhlc(rows) {
  return rows.map((pt, i, arr) => {
    const c = pt.c;
    const prev = i > 0 ? arr[i - 1].c : c;
    return { t: pt.t, o: prev, h: Math.max(prev, c), l: Math.min(prev, c), c };
  });
}

async function loadIndexHistory(meta, apiKey) {
  if (!meta.symbol.startsWith('^')) return null;
  try {
    const light = await fetchFmpIndexHistory(meta.symbol, apiKey, BAR_COUNT);
    if (light.length >= 10) return lightToOhlc(light);
  } catch { /* no history */ }
  return null;
}

async function getHistories(key) {
  if (historyCache && Date.now() - historyCache.at < HISTORY_TTL) {
    return historyCache.data;
  }
  const histories = await Promise.all(
    HOME_INDICES.map((meta) => loadIndexHistory(meta, key).catch(() => null)),
  );
  historyCache = { at: Date.now(), data: histories };
  return histories;
}

/** Fetch home-page index cards — live prices every call, chart history cached 30 min. */
export async function fetchHomeIndices(settings, quotes) {
  const provider = getDataProvider(settings);
  const cards = [];

  if (provider === 'fmp') {
    const key = settings.fmpApiKey.trim();
    const tickerCache = getCachedTickerIndices();
    let liveQuotes = [];
    try {
      liveQuotes = await fetchFmpIndexQuotes(key);
    } catch { /* fall through */ }

    const quoteMap = new Map(liveQuotes.map((q) => [q.symbol, q]));
    const histories = await getHistories(key);

    HOME_INDICES.forEach((meta, i) => {
      const cached = tickerCache?.get(meta.symbol);
      const live = quoteMap.get(meta.symbol);
      const history = histories[i];
      const price = live?.last ?? cached?.price ?? 0;
      const change = live?.change ?? cached?.change ?? 0;
      const changePct = live?.changePct ?? cached?.changePct ?? 0;

      cards.push({
        ...meta,
        price,
        change,
        changePct,
        history: history?.length ? history : mockHistory(price || 100, meta.symbol),
        navigateSymbol: meta.etf || meta.symbol,
        live: !!live,
      });
    });
  } else {
    for (const meta of HOME_INDICES) {
      const etfQ = meta.etf ? quotes.get(meta.etf) : null;
      const price = etfQ?.price ?? mockHistory(100, meta.symbol).at(-1).c;
      cards.push({
        ...meta,
        price,
        change: etfQ?.change ?? 0,
        changePct: etfQ?.changePct ?? 0,
        history: mockHistory(price, meta.symbol),
        navigateSymbol: meta.etf || meta.symbol,
        live: false,
      });
    }
  }

  return cards;
}

export function clearHomeIndicesCache() {
  historyCache = null;
}