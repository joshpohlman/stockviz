import { detectPatterns } from './patterns.js';
import { detectSignals } from './signals.js';
import { predictTrend } from './predictor.js';
import { rsi, sma, avgVolume } from './indicators.js';

const candleCache = new Map();

/** Build or retrieve 60-day candle history for a symbol. */
export function getCandleHistory(symbol, quote) {
  if (candleCache.has(symbol)) return candleCache.get(symbol);

  const rand = seededRand(symbol);
  let price = quote.price || 100;
  const candles = [];
  const now = Date.now();
  for (let i = 59; i >= 0; i--) {
    const o = price;
    const move = (rand() - 0.47) * price * 0.022;
    const c = Math.max(1, o + move);
    const h = Math.max(o, c) * (1 + rand() * 0.012);
    const l = Math.min(o, c) * (1 - rand() * 0.012);
    const v = Math.floor(500_000 + rand() * 30_000_000);
    candles.push({ t: now - i * 86400000, o, h, l, c, v });
    price = c;
  }
  candleCache.set(symbol, candles);
  return candles;
}

export function updateCandleCache(symbol, quote) {
  const hist = candleCache.get(symbol);
  if (!hist?.length) return getCandleHistory(symbol, quote);
  const last = hist[hist.length - 1];
  last.c = quote.price;
  last.h = Math.max(last.h, quote.high ?? quote.price);
  last.l = Math.min(last.l, quote.low ?? quote.price);
  if (quote.volume) last.v = quote.volume;
  return hist;
}

function seededRand(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

/** Full TA enrichment — patterns, signals, prediction, fundamentals mock. */
export function enrichWithTA(quote) {
  const candles = updateCandleCache(quote.symbol, quote);
  const closes = candles.map((c) => c.c);
  const patterns = detectPatterns(candles);
  const signals = detectSignals(candles, quote);
  const prediction = predictTrend(candles, quote, patterns);

  const volAvg = avgVolume(candles);
  const pe = mockFundamental(quote.symbol, 'pe');
  const eps = mockFundamental(quote.symbol, 'eps');
  const beta = mockFundamental(quote.symbol, 'beta');

  return {
    ...quote,
    candles,
    patterns,
    signals,
    prediction,
    ta: {
      rsi: prediction.rsi,
      sma20: prediction.sma20,
      sma50: prediction.sma50,
      sma200: prediction.sma200,
      atr: prediction.atr,
      relVolume: volAvg ? (quote.volume || volAvg) / volAvg : 1,
    },
    fundamentals: { pe, eps, beta, dividend: mockFundamental(quote.symbol, 'div') },
    signalLabels: signals.map((s) => s.label),
    patternLabels: patterns.map((p) => p.label),
    primarySignal: signals[0]?.label || patterns[0]?.label || '—',
  };
}

function mockFundamental(symbol, field) {
  const r = seededRand(symbol + field)();
  if (field === 'pe') return Math.round((8 + r * 45) * 10) / 10;
  if (field === 'eps') return Math.round((0.5 + r * 12) * 100) / 100;
  if (field === 'beta') return Math.round((0.6 + r * 1.8) * 100) / 100;
  if (field === 'div') return Math.round(r * 3.5 * 100) / 100;
  return 0;
}

export function getMarketBreadth(quotes) {
  const rows = [...quotes.values()];
  const total = rows.length || 1;
  const advancing = rows.filter((q) => q.changePct > 0).length;
  const declining = rows.filter((q) => q.changePct < 0).length;
  const aboveSma50 = rows.filter((q) => q.ta?.sma50 && q.price > q.ta.sma50).length;
  const aboveSma200 = rows.filter((q) => q.ta?.sma200 && q.price > q.ta.sma200).length;
  const newHigh = rows.filter((q) => q.signals?.some((s) => s.id === 'new_high')).length;
  const newLow = rows.filter((q) => q.signals?.some((s) => s.id === 'new_low')).length;

  return {
    advancing,
    declining,
    advPct: (advancing / total) * 100,
    decPct: (declining / total) * 100,
    aboveSma50,
    belowSma50: total - aboveSma50,
    aboveSma50Pct: (aboveSma50 / total) * 100,
    aboveSma200,
    belowSma200: total - aboveSma200,
    aboveSma200Pct: (aboveSma200 / total) * 100,
    newHigh,
    newLow,
    newHighPct: newHigh / (newHigh + newLow || 1) * 100,
  };
}