import {
  fetchFmpBatchAnalyst,
  fetchFmpBatchShortInterest,
  fetchFmpBatchOptions,
  fetchFmpDividendCalendar,
  fetchFmpFinancials,
  fetchFmpSecFilings,
  fetchFmpExtendedQuote,
  fetchFmpIndexTickerQuotes,
} from './fmp.js';
import {
  generateAnalystRatings,
  generateOptionsFlow,
  generateShortInterest,
} from '../data/advancedData.js';
import { getUniverse } from '../data/universeStore.js';

const CACHE_TTL = 10 * 60 * 1000;
const cache = new Map();

function getCache(key) {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.at < CACHE_TTL) return entry.data;
  return null;
}

function setCache(key, data) {
  cache.set(key, { data, at: Date.now() });
}

export function clearLiveAdvancedCache() {
  cache.clear();
}

function fmpKey(settings) {
  if (settings.useMockData) return null;
  return settings.fmpApiKey?.trim() || null;
}

export async function fetchAnalystRatings(settings, quotes) {
  const key = fmpKey(settings);
  const rows = [...quotes.values()];
  if (!key) return generateAnalystRatings(quotes);

  const cached = getCache('analyst');
  if (cached) return cached;

  try {
    const symbols = rows.slice(0, 40).map((q) => q.symbol);
    const live = await fetchFmpBatchAnalyst(symbols, key);
    const bySym = new Map(live.map((r) => [r.symbol, r]));
    const merged = rows.map((q) => {
      const a = bySym.get(q.symbol);
      if (!a) return generateAnalystRatings(new Map([[q.symbol, q]]))[0];
      const upside = a.target ? ((a.target - q.price) / q.price) * 100 : 0;
      return {
        symbol: q.symbol,
        name: q.name,
        price: q.price,
        consensus: a.consensus,
        target: a.target ?? q.price,
        upside,
        numAnalysts: a.numAnalysts,
        strongBuy: a.strongBuy,
        buy: a.buy,
        hold: a.hold,
        sell: a.sell,
        strongSell: a.strongSell,
        revisions: a.revisions,
        lastUpdate: a.lastUpdate,
        live: true,
      };
    }).sort((a, b) => b.upside - a.upside);
    setCache('analyst', merged);
    return merged;
  } catch {
    return generateAnalystRatings(quotes);
  }
}

export async function fetchShortInterestData(settings, quotes) {
  const key = fmpKey(settings);
  if (!key) return generateShortInterest(quotes);

  const cached = getCache('shorts');
  if (cached) return cached;

  try {
    const symbols = [...quotes.values()].slice(0, 50).map((q) => q.symbol);
    const live = await fetchFmpBatchShortInterest(symbols, key);
    const bySym = new Map(live.map((r) => [r.symbol, r]));
    const merged = [...quotes.values()].map((q) => {
      const s = bySym.get(q.symbol);
      const shortPct = s?.shortPct ?? 0;
      const daysToCover = s?.daysToCover ?? 0;
      const squeezeScore = Math.min(100, Math.round(shortPct * 2 + (q.ta?.relVolume ?? 1) * 10 + Math.abs(q.changePct) * 2));
      return {
        symbol: q.symbol,
        name: q.name,
        price: q.price,
        changePct: q.changePct,
        shortPct,
        daysToCover,
        change: s?.change ?? 0,
        squeezeScore,
        sector: q.sector,
        live: !!s,
      };
    }).sort((a, b) => b.squeezeScore - a.squeezeScore);
    setCache('shorts', merged);
    return merged;
  } catch {
    return generateShortInterest(quotes);
  }
}

export async function fetchOptionsFlowData(settings, quotes, limit = 40) {
  const key = fmpKey(settings);
  if (!key) return generateOptionsFlow(quotes, limit);

  const cached = getCache('options');
  if (cached) return cached;

  try {
    const symbols = [...quotes.values()]
      .filter((q) => q.volume > 500_000)
      .sort((a, b) => (b.ta?.relVolume ?? 1) - (a.ta?.relVolume ?? 1))
      .slice(0, 20)
      .map((q) => q.symbol);
    const flow = await fetchFmpBatchOptions(symbols, key, limit);
    const merged = flow.map((o) => {
      const q = quotes.get(o.symbol);
      return {
        ...o,
        type: `${o.type} ${o.strike}`,
        relVolume: q?.ta?.relVolume ?? 1,
        price: q?.price ?? 0,
        changePct: q?.changePct ?? 0,
        live: true,
      };
    });
    if (merged.length) {
      setCache('options', merged);
      return merged;
    }
  } catch { /* fall through */ }
  return generateOptionsFlow(quotes, limit);
}

export async function fetchDividends(settings) {
  const key = fmpKey(settings);
  if (!key) return [];

  const cached = getCache('dividends');
  if (cached) return cached;

  try {
    const data = await fetchFmpDividendCalendar(key);
    setCache('dividends', data);
    return data;
  } catch {
    return [];
  }
}

export async function fetchStockFinancials(symbol, settings) {
  const key = fmpKey(settings);
  if (!key) return null;
  const cacheKey = `fin-${symbol}`;
  const cached = getCache(cacheKey);
  if (cached) return cached;
  try {
    const data = await fetchFmpFinancials(symbol, key);
    setCache(cacheKey, data);
    return data;
  } catch {
    return null;
  }
}

export async function fetchStockFilings(symbol, settings) {
  const key = fmpKey(settings);
  if (!key) return [];
  const cacheKey = `sec-${symbol}`;
  const cached = getCache(cacheKey);
  if (cached) return cached;
  try {
    const data = await fetchFmpSecFilings(symbol, key);
    setCache(cacheKey, data);
    return data;
  } catch {
    return [];
  }
}

export async function fetchExtendedHours(symbol, settings) {
  const key = fmpKey(settings);
  if (!key) return null;
  return fetchFmpExtendedQuote(symbol, key).catch(() => null);
}

export async function fetchTickerIndices(settings) {
  const key = fmpKey(settings);
  if (!key) return null;
  const cached = getCache('indices');
  if (cached) return cached;
  try {
    const data = await fetchFmpIndexTickerQuotes(key);
    setCache('indices', data);
    return data;
  } catch {
    return null;
  }
}

export function getUniverseSymbols() {
  return getUniverse().map((s) => s.symbol);
}