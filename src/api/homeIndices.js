import { getDataProvider } from '../api.js';
import { fetchFmpIndexQuotes, fetchFmpIndexHistory, fetchFmpCandles } from './fmp.js';

export const HOME_INDICES = [
  { symbol: '^GSPC', label: 'S&P 500', etf: 'SPY', decimals: 2 },
  { symbol: '^DJI', label: 'Dow Jones', etf: 'DIA', decimals: 2 },
  { symbol: '^IXIC', label: 'Nasdaq', etf: 'QQQ', decimals: 2 },
  { symbol: '^RUT', label: 'Russell 2000', etf: 'IWM', decimals: 2 },
  { symbol: '^VIX', label: 'VIX', etf: null, decimals: 2 },
];

const CACHE_TTL = 10 * 60 * 1000;
let cache = null;

function seededRand(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function mockHistory(price, symbol, count = 60) {
  const rand = seededRand(symbol + 'idx');
  const series = [];
  let v = price * (0.97 + rand() * 0.02);
  for (let i = 0; i < count; i++) {
    v = Math.max(0.01, v * (1 + (rand() - 0.48) * 0.012));
    series.push({ t: Date.now() - (count - i) * 86400000, c: v });
  }
  series[series.length - 1].c = price;
  return series;
}

function etfFallback(meta, quotes) {
  if (!meta.etf) return null;
  const q = quotes.get(meta.etf);
  if (!q) return null;
  return {
    price: q.price,
    change: q.change,
    changePct: q.changePct,
    history: q.sparkline?.length
      ? q.sparkline.map((c, i) => ({ t: Date.now() - (q.sparkline.length - i) * 3600000, c }))
      : mockHistory(q.price, meta.etf),
    navigateSymbol: meta.etf,
    live: false,
  };
}

async function loadIndexHistory(meta, apiKey) {
  try {
    const history = await fetchFmpIndexHistory(meta.symbol, apiKey, 60);
    if (history.length >= 10) return history;
  } catch { /* fall through */ }

  if (meta.etf) {
    try {
      const candles = await fetchFmpCandles(meta.etf, apiKey, 60);
      if (candles.length >= 10) return candles.map((c) => ({ t: c.t, c: c.c }));
    } catch { /* fall through */ }
  }
  return null;
}

/** Fetch home-page index cards with price + chart history. */
export async function fetchHomeIndices(settings, quotes) {
  if (cache && Date.now() - cache.at < CACHE_TTL) return cache.data;

  const provider = getDataProvider(settings);
  const cards = [];

  if (provider === 'fmp') {
    const key = settings.fmpApiKey.trim();
    let liveQuotes = [];
    try {
      liveQuotes = await fetchFmpIndexQuotes(key);
    } catch { /* use ETF fallback */ }

    const quoteMap = new Map(liveQuotes.map((q) => [q.symbol, q]));
    const histories = await Promise.all(
      HOME_INDICES.map((meta) => loadIndexHistory(meta, key).catch(() => null)),
    );

    HOME_INDICES.forEach((meta, i) => {
      const live = quoteMap.get(meta.symbol);
      const history = histories[i];
      const fallback = etfFallback(meta, quotes);

      const price = live?.last ?? fallback?.price ?? 0;
      const change = live?.change ?? fallback?.change ?? 0;
      const changePct = live?.changePct ?? fallback?.changePct ?? 0;

      cards.push({
        ...meta,
        price,
        change,
        changePct,
        history: history?.length ? history : (fallback?.history || mockHistory(price || 100, meta.symbol)),
        navigateSymbol: meta.etf || meta.symbol,
        live: !!live,
      });
    });
  } else {
    for (const meta of HOME_INDICES) {
      const fallback = etfFallback(meta, quotes);
      const price = fallback?.price ?? mockHistory(100, meta.symbol).at(-1).c;
      cards.push({
        ...meta,
        price,
        change: fallback?.change ?? 0,
        changePct: fallback?.changePct ?? 0,
        history: fallback?.history || mockHistory(price, meta.symbol),
        navigateSymbol: meta.etf || meta.symbol,
        live: false,
      });
    }
  }

  cache = { at: Date.now(), data: cards };
  return cards;
}

export function clearHomeIndicesCache() {
  cache = null;
}