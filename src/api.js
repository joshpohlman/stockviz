import { getUniverse, getUniverseMap, findUniverseStock } from './data/universeStore.js';
import { enrichWithTA } from './analysis/enrich.js';
import { mapFinnhubMetrics, mapFmpMetrics } from './analysis/fundamentals.js';
import {
  fetchFmpBatchQuotes,
  fetchFmpQuote,
  fetchFmpProfile,
  fetchFmpFundamentals,
  fetchFmpCandles,
  fetchFmpGeneralNews,
  fetchFmpStockNews,
  fetchFmpMarketHours,
  fetchFmpMarketWidgets,
  validateFmpApiKey,
} from './api/fmp.js';
import { getCachedMarketWidgets, setCachedMarketWidgets } from './api/marketExtras.js';

const FINNHUB_BASE = 'https://finnhub.io/api/v1';
const BATCH_SIZE = 5;
const BATCH_DELAY_MS = 1100;

export function getDataProvider(settings) {
  if (settings.useMockData) return 'mock';
  if (settings.fmpApiKey?.trim()) return 'fmp';
  if (settings.apiKey?.trim()) return 'finnhub';
  return 'mock';
}

function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function basePrice(symbol) {
  return 20 + seededRandom(symbol)() * 480;
}

let mockPrices = new Map();
let mockSparkHistory = new Map();
const SPARK_LEN = 24;

function initMockPrices() {
  if (mockPrices.size) return;
  for (const stock of getUniverse()) {
    const p = basePrice(stock.symbol);
    mockPrices.set(stock.symbol, p);
    const rand = seededRandom(stock.symbol + 'hist');
    const hist = [];
    let v = p * 0.95;
    for (let i = 0; i < SPARK_LEN; i++) {
      v = Math.max(1, v * (1 + (rand() - 0.48) * 0.02));
      hist.push(v);
    }
    mockSparkHistory.set(stock.symbol, hist);
  }
}

function tickMockPrices() {
  initMockPrices();
  for (const stock of getUniverse()) {
    const prev = mockPrices.get(stock.symbol);
    const drift = (Math.random() - 0.48) * prev * 0.008;
    const next = Math.max(1, prev + drift);
    mockPrices.set(stock.symbol, next);
    const hist = mockSparkHistory.get(stock.symbol) || [];
    hist.push(next);
    if (hist.length > SPARK_LEN) hist.shift();
    mockSparkHistory.set(stock.symbol, hist);
  }
}

let liveSparkHistory = new Map();

function getSparkline(symbol) {
  return liveSparkHistory.get(symbol) || mockSparkHistory.get(symbol) || [];
}

function pushSpark(symbol, price) {
  const hist = liveSparkHistory.get(symbol) || mockSparkHistory.get(symbol) || [];
  const next = [...hist, price];
  if (next.length > SPARK_LEN) next.shift();
  liveSparkHistory.set(symbol, next);
  return next;
}

function buildMockQuote(stock) {
  initMockPrices();
  const price = mockPrices.get(stock.symbol);
  const rand = seededRandom(stock.symbol + Date.now().toString().slice(0, -4));
  const open = price * (0.98 + rand() * 0.04);
  const high = Math.max(price, open) * (1 + rand() * 0.02);
  const low = Math.min(price, open) * (1 - rand() * 0.02);
  const prevClose = open * (0.995 + rand() * 0.01);
  const change = price - prevClose;
  const changePct = (change / prevClose) * 100;
  const volume = Math.floor(500_000 + rand() * 50_000_000);

  return {
    symbol: stock.symbol,
    price,
    open,
    high,
    low,
    prevClose,
    change,
    changePct,
    volume,
    marketCap: stock.marketCap,
    sector: stock.sector,
    industry: stock.industry,
    name: stock.name,
    timestamp: Date.now(),
    sparkline: getSparkline(stock.symbol),
  };
}

function buildMockCandles(symbol, count = 60) {
  initMockPrices();
  let price = mockPrices.get(symbol) || 100;
  const rand = seededRandom(symbol + 'candles');
  const candles = [];
  const now = Date.now();
  for (let i = count - 1; i >= 0; i--) {
    const o = price;
    const move = (rand() - 0.48) * price * 0.025;
    const c = Math.max(1, o + move);
    const h = Math.max(o, c) * (1 + rand() * 0.01);
    const l = Math.min(o, c) * (1 - rand() * 0.01);
    candles.push({ t: now - i * 86400000, o, h, l, c, v: Math.floor(rand() * 10_000_000) });
    price = c;
  }
  return candles;
}

const MOCK_HEADLINES = [
  'Markets rally on strong earnings outlook',
  'Fed signals cautious approach to rate cuts',
  'Tech sector leads broad market gains',
  'Energy stocks slip as oil prices retreat',
  'Analysts upgrade outlook for semiconductor stocks',
  'Consumer spending data beats expectations',
  'Treasury yields edge higher in morning trade',
  'IPO market shows signs of renewed activity',
];

function buildMockNews(symbol) {
  const rand = seededRandom(symbol + 'news');
  return Array.from({ length: 5 }, (_, i) => ({
    headline: symbol
      ? `${symbol}: ${MOCK_HEADLINES[Math.floor(rand() * MOCK_HEADLINES.length)]}`
      : MOCK_HEADLINES[Math.floor(rand() * MOCK_HEADLINES.length)],
    source: ['Reuters', 'Bloomberg', 'CNBC', 'MarketWatch'][Math.floor(rand() * 4)],
    url: '#',
    datetime: Math.floor(Date.now() / 1000) - i * 3600 - Math.floor(rand() * 7200),
    symbol: symbol || undefined,
  }));
}

async function fetchFinnhubQuote(symbol, apiKey) {
  const url = `${FINNHUB_BASE}/quote?symbol=${encodeURIComponent(symbol)}&token=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Finnhub ${res.status}`);
  const data = await res.json();
  if (!data.c) throw new Error('No quote data');
  const change = data.c - data.pc;
  const changePct = data.pc ? (change / data.pc) * 100 : 0;
  return {
    symbol,
    price: data.c,
    open: data.o,
    high: data.h,
    low: data.l,
    prevClose: data.pc,
    change,
    changePct,
    volume: null,
    timestamp: (data.t || Date.now() / 1000) * 1000,
  };
}

async function fetchFinnhubProfile(symbol, apiKey) {
  const url = `${FINNHUB_BASE}/stock/profile2?symbol=${encodeURIComponent(symbol)}&token=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  return res.json();
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function enrichQuote(quote, meta, profile) {
  return {
    ...quote,
    name: profile?.name || profile?.companyName || meta?.name || quote.name || quote.symbol,
    sector: meta?.sector || profile?.sector || profile?.finnhubIndustry || '—',
    industry: meta?.industry || profile?.industry || profile?.finnhubIndustry || '—',
    marketCap: profile?.marketCapitalization
      ? profile.marketCapitalization * 1_000_000
      : profile?.marketCap || quote.marketCap || meta?.marketCap,
    volume: quote.volume ?? Math.floor(Math.random() * 20_000_000 + 1_000_000),
    sparkline: getSparkline(quote.symbol),
  };
}

export async function fetchAllQuotes(settings, { onProgress } = {}) {
  const universe = getUniverse();
  const universeMap = getUniverseMap();
  const symbols = universe.map((s) => s.symbol);
  const provider = getDataProvider(settings);

  if (provider === 'mock') {
    tickMockPrices();
    const quotes = new Map();
    for (const stock of universe) quotes.set(stock.symbol, enrichWithTA(buildMockQuote(stock)));
    return { quotes, source: 'mock' };
  }

  if (provider === 'fmp') {
    const apiKey = settings.fmpApiKey.trim();
    const quotes = new Map();
    const enrichBatch = (fmpQuotes) => {
      let added = false;
      for (const symbol of symbols) {
        const q = fmpQuotes.get(symbol);
        if (q && !quotes.has(symbol)) {
          const meta = universeMap.get(symbol);
          const enriched = enrichQuote(q, meta);
          quotes.set(symbol, enrichWithTA({
            ...enriched,
            sparkline: pushSpark(symbol, enriched.price),
          }));
          added = true;
        }
      }
      if (added && onProgress) onProgress(new Map(quotes), 'fmp');
    };

    try {
      const fmpQuotes = await fetchFmpBatchQuotes(symbols, apiKey, {
        onChunk: (partial) => enrichBatch(partial),
      });
      enrichBatch(fmpQuotes);
    } catch (err) {
      console.warn('FMP batch quotes failed:', err);
    }

    for (const stock of universe) {
      if (!quotes.has(stock.symbol)) quotes.set(stock.symbol, enrichWithTA(buildMockQuote(stock)));
    }
    return { quotes, source: 'fmp' };
  }

  const quotes = new Map();
  const apiKey = settings.apiKey.trim();

  for (let i = 0; i < symbols.length; i += BATCH_SIZE) {
    const batch = symbols.slice(i, i + BATCH_SIZE);
    const results = await Promise.allSettled(
      batch.map(async (symbol) => {
        const [quote, profile] = await Promise.all([
          fetchFinnhubQuote(symbol, apiKey),
          fetchFinnhubProfile(symbol, apiKey).catch(() => null),
        ]);
        return enrichQuote(quote, universeMap.get(symbol), profile);
      }),
    );

    for (const r of results) {
      if (r.status === 'fulfilled') {
        const v = r.value;
        quotes.set(v.symbol, enrichWithTA({ ...v, sparkline: pushSpark(v.symbol, v.price) }));
      }
    }
    if (i + BATCH_SIZE < symbols.length) await delay(BATCH_DELAY_MS);
  }

  for (const stock of universe) {
    if (!quotes.has(stock.symbol)) quotes.set(stock.symbol, enrichWithTA(buildMockQuote(stock)));
  }

  return { quotes, source: 'finnhub' };
}

async function fetchFinnhubMetrics(symbol, apiKey) {
  const url = `${FINNHUB_BASE}/stock/metric?symbol=${encodeURIComponent(symbol)}&metric=all&token=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  return mapFinnhubMetrics(data);
}

export async function fetchSingleQuote(symbol, settings) {
  const meta = findUniverseStock(symbol);
  const provider = getDataProvider(settings);

  if (provider === 'mock') {
    return meta ? enrichWithTA(buildMockQuote(meta)) : null;
  }

  if (provider === 'fmp') {
    try {
      const key = settings.fmpApiKey.trim();
      const [quote, fundData] = await Promise.all([
        fetchFmpQuote(symbol, key),
        fetchFmpFundamentals(symbol, key).catch(() => null),
      ]);
      const metrics = fundData ? mapFmpMetrics(fundData) : null;
      const enriched = enrichQuote(quote, meta, fundData?.profile);
      return enrichWithTA(enriched, { fmpMetrics: metrics });
    } catch {
      return meta ? enrichWithTA(buildMockQuote(meta)) : null;
    }
  }

  try {
    const key = settings.apiKey.trim();
    const [quote, profile, metrics] = await Promise.all([
      fetchFinnhubQuote(symbol, key),
      fetchFinnhubProfile(symbol, key),
      fetchFinnhubMetrics(symbol, key).catch(() => null),
    ]);
    return enrichWithTA(enrichQuote(quote, meta, profile), { finnhubMetrics: metrics });
  } catch {
    return meta ? enrichWithTA(buildMockQuote(meta)) : null;
  }
}

export async function fetchStockMetrics(symbol, settings) {
  const provider = getDataProvider(settings);
  if (provider === 'mock') return null;

  if (provider === 'fmp') {
    try {
      const data = await fetchFmpFundamentals(symbol, settings.fmpApiKey.trim());
      return mapFmpMetrics(data);
    } catch {
      return null;
    }
  }

  try {
    return await fetchFinnhubMetrics(symbol, settings.apiKey.trim());
  } catch {
    return null;
  }
}

export async function fetchCandles(symbol, settings, resolution = 'D', count = 60) {
  const provider = getDataProvider(settings);
  if (provider === 'mock') return buildMockCandles(symbol, count);

  if (provider === 'fmp') {
    try {
      const candles = await fetchFmpCandles(symbol, settings.fmpApiKey.trim(), count);
      if (candles?.length) return candles;
    } catch { /* fall through */ }
    return buildMockCandles(symbol, count);
  }

  try {
    const to = Math.floor(Date.now() / 1000);
    const from = to - count * 86400;
    const url = `${FINNHUB_BASE}/stock/candle?symbol=${encodeURIComponent(symbol)}&resolution=${resolution}&from=${from}&to=${to}&token=${settings.apiKey.trim()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('candle fetch failed');
    const data = await res.json();
    if (data.s !== 'ok' || !data.t?.length) return buildMockCandles(symbol, count);
    return data.t.map((t, i) => ({
      t: t * 1000,
      o: data.o[i],
      h: data.h[i],
      l: data.l[i],
      c: data.c[i],
      v: data.v[i],
    }));
  } catch {
    return buildMockCandles(symbol, count);
  }
}

export async function fetchCompanyNews(symbol, settings) {
  const provider = getDataProvider(settings);
  if (provider === 'mock') return buildMockNews(symbol);

  if (provider === 'fmp') {
    try {
      return await fetchFmpStockNews(symbol, settings.fmpApiKey.trim());
    } catch {
      return buildMockNews(symbol);
    }
  }

  try {
    const to = new Date().toISOString().slice(0, 10);
    const from = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10);
    const url = `${FINNHUB_BASE}/company-news?symbol=${encodeURIComponent(symbol)}&from=${from}&to=${to}&token=${settings.apiKey.trim()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('news failed');
    const data = await res.json();
    return (data || []).slice(0, 8);
  } catch {
    return buildMockNews(symbol);
  }
}

export async function fetchMarketNews(settings) {
  const provider = getDataProvider(settings);
  if (provider === 'mock') return buildMockNews(null);

  if (provider === 'fmp') {
    try {
      return await fetchFmpGeneralNews(settings.fmpApiKey.trim());
    } catch {
      return buildMockNews(null);
    }
  }

  try {
    const url = `${FINNHUB_BASE}/news?category=general&token=${settings.apiKey.trim()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('news failed');
    const data = await res.json();
    return (data || []).slice(0, 20);
  } catch {
    return buildMockNews(null);
  }
}

export async function fetchMarketStatus(settings) {
  const provider = getDataProvider(settings);
  if (provider === 'mock') {
    const h = new Date().getHours();
    const open = h >= 9 && h < 16;
    return { isOpen: open, label: open ? 'Market Open (simulated)' : 'Market Closed (simulated)' };
  }

  if (provider === 'fmp') {
    return fetchFmpMarketHours(settings.fmpApiKey.trim());
  }

  try {
    const url = `${FINNHUB_BASE}/stock/market-status?exchange=US&token=${settings.apiKey.trim()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('status failed');
    const data = await res.json();
    return {
      isOpen: !!data.isOpen,
      label: data.isOpen ? 'US Market Open' : 'US Market Closed',
      session: data.session,
    };
  } catch {
    return { isOpen: false, label: 'Market status unavailable' };
  }
}

export async function fetchMarketWidgets(settings) {
  if (getDataProvider(settings) !== 'fmp') return null;

  const cached = getCachedMarketWidgets();
  if (cached) return cached;

  try {
    const data = await fetchFmpMarketWidgets(settings.fmpApiKey.trim());
    setCachedMarketWidgets(data);
    return data;
  } catch {
    return null;
  }
}

export async function validateApiKey(apiKey) {
  if (!apiKey?.trim()) return { valid: false, message: 'API key is required' };
  try {
    const q = await fetchFinnhubQuote('AAPL', apiKey.trim());
    return q ? { valid: true, message: 'Connected to Finnhub' } : { valid: false, message: 'Invalid response' };
  } catch (e) {
    return { valid: false, message: e.message || 'Connection failed' };
  }
}

export { validateFmpApiKey };