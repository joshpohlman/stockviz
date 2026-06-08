import { UNIVERSE as BUNDLED_UNIVERSE, SECTORS } from './universe.js';
import { fetchFmpSp500Constituents } from '../api/fmp.js';

const CACHE_KEY = 'stockviz-sp500-universe';
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

const SECTOR_MAP = {
  'Information Technology': 'Technology',
  Technology: 'Technology',
  'Health Care': 'Healthcare',
  Healthcare: 'Healthcare',
  Financials: 'Financial',
  Financial: 'Financial',
  'Consumer Discretionary': 'Consumer Cyclical',
  'Consumer Cyclical': 'Consumer Cyclical',
  'Consumer Staples': 'Consumer Defensive',
  'Consumer Defensive': 'Consumer Defensive',
  Industrials: 'Industrials',
  Energy: 'Energy',
  Utilities: 'Utilities',
  'Real Estate': 'Real Estate',
  Materials: 'Basic Materials',
  'Basic Materials': 'Basic Materials',
  'Communication Services': 'Communication Services',
  'Telecommunication Services': 'Communication Services',
};

let activeUniverse = [...BUNDLED_UNIVERSE];
let universeMeta = {
  source: 'bundled',
  count: activeUniverse.length,
  label: `Bundled (${activeUniverse.length})`,
};

export function getUniverse() {
  return activeUniverse;
}

export function getUniverseMeta() {
  return { ...universeMeta };
}

export function getUniverseMap() {
  return new Map(activeUniverse.map((s) => [s.symbol, s]));
}

export function findUniverseStock(symbol) {
  return getUniverseMap().get(symbol) || BUNDLED_UNIVERSE.find((s) => s.symbol === symbol);
}

function normalizeSector(sector) {
  if (!sector) return '—';
  return SECTOR_MAP[sector] || sector;
}

function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, rows } = JSON.parse(raw);
    if (Date.now() - at > CACHE_TTL_MS) return null;
    return rows?.length ? rows : null;
  } catch {
    return null;
  }
}

function saveCache(rows) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), rows }));
  } catch { /* quota */ }
}

export function clearUniverseCache() {
  localStorage.removeItem(CACHE_KEY);
}

function applyUniverse(rows, source) {
  activeUniverse = rows;
  universeMeta = {
    source,
    count: rows.length,
    label: source === 'sp500' ? `S&P 500 (${rows.length})` : `Bundled (${rows.length})`,
  };
}

/** Apply cached S&P 500 list synchronously so the UI can render immediately. */
export function hydrateUniverseFromCache(settings) {
  const key = !settings.useMockData && settings.fmpApiKey?.trim() ? settings.fmpApiKey.trim() : null;
  if (!key) return universeMeta;
  const cached = loadCache();
  if (cached?.length >= 400) {
    applyUniverse(cached, 'sp500');
  }
  return universeMeta;
}

/** Load S&P 500 from FMP when key is set; otherwise use bundled list. */
export async function initUniverse(settings, { force = false } = {}) {
  const key = !settings.useMockData && settings.fmpApiKey?.trim() ? settings.fmpApiKey.trim() : null;

  if (!key) {
    applyUniverse([...BUNDLED_UNIVERSE], 'bundled');
    return universeMeta;
  }

  if (force) clearUniverseCache();

  const cached = loadCache();
  if (!force && cached?.length >= 400) {
    applyUniverse(cached, 'sp500');
    return universeMeta;
  }

  try {
    const rows = await fetchFmpSp500Constituents(key);
    if (rows.length >= 400) {
      const mapped = rows.map((r) => ({
        symbol: r.symbol,
        name: r.name,
        sector: normalizeSector(r.sector),
        industry: r.industry || r.subSector || '—',
        marketCap: r.marketCap || 0,
      }));
      saveCache(mapped);
      applyUniverse(mapped, 'sp500');
      return universeMeta;
    }
  } catch (err) {
    console.warn('S&P 500 universe load failed:', err);
  }

  applyUniverse([...BUNDLED_UNIVERSE], 'bundled');
  return universeMeta;
}

/** Clear cache and reload universe from FMP. */
export async function refreshUniverse(settings) {
  return initUniverse(settings, { force: true });
}

export { SECTORS, BUNDLED_UNIVERSE };