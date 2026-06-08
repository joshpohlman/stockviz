import { getFilters, updateFilters } from '../store.js';

const FILTER_KEYS = [
  'sector', 'industry', 'minChange', 'maxChange', 'minVolume', 'minMarketCap', 'search',
  'signal', 'pattern', 'prediction', 'minRsi', 'maxRsi', 'minPe', 'maxPe', 'aboveSma50', 'aboveSma200', 'formula',
];

export function parseFiltersFromHash() {
  const hash = location.hash.slice(1);
  const qIdx = hash.indexOf('?');
  if (qIdx === -1) return null;
  const params = new URLSearchParams(hash.slice(qIdx + 1));
  const filters = {};
  for (const key of FILTER_KEYS) {
    const v = params.get(key);
    if (v != null) filters[key] = v;
  }
  return Object.keys(filters).length ? filters : null;
}

export function syncFiltersToUrl(filters) {
  const hash = location.hash.slice(1);
  const path = hash.split('?')[0] || '/';
  if (path !== '/screener' && path !== '/map') return;

  const params = new URLSearchParams();
  for (const key of FILTER_KEYS) {
    if (filters[key]) params.set(key, filters[key]);
  }
  const qs = params.toString();
  const next = qs ? `#${path}?${qs}` : `#${path}`;
  if (location.hash !== next) history.replaceState(null, '', next);
}

export function applyFiltersFromUrl() {
  const parsed = parseFiltersFromHash();
  if (parsed) updateFilters(parsed, { preset: 'custom' });
}

export function buildShareUrl(filters) {
  const params = new URLSearchParams();
  for (const key of FILTER_KEYS) {
    if (filters[key]) params.set(key, filters[key]);
  }
  const qs = params.toString();
  const base = location.origin + location.pathname;
  return qs ? `${base}#/screener?${qs}` : `${base}#/screener`;
}