const DEFAULT_SETTINGS = {
  apiKey: '',
  refreshInterval: 30,
  useMockData: true,
  watchlist: ['AAPL', 'MSFT', 'NVDA', 'GOOGL', 'AMZN'],
};

const DEFAULT_FILTERS = {
  sector: '',
  minChange: '',
  maxChange: '',
  minVolume: '',
  minMarketCap: '',
  search: '',
};

let settings = loadSettings();
let filters = { ...DEFAULT_FILTERS };
let savedFilters = loadSavedFilters();
let activePreset = 'all';
let quotes = new Map();
let sort = { key: 'changePct', dir: 'desc' };
let selectedSymbol = null;
let lastFetchAt = null;
let dataSource = 'mock';
let marketStatus = null;
let listeners = new Set();
let pollTimer = null;

function loadSettings() {
  try {
    const raw = localStorage.getItem('stockviz-settings');
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return { ...DEFAULT_SETTINGS };
}

function loadSavedFilters() {
  try {
    const raw = localStorage.getItem('stockviz-saved-filters');
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return [];
}

function saveSettings() {
  localStorage.setItem('stockviz-settings', JSON.stringify(settings));
  notify();
}

export function getSettings() {
  return { ...settings };
}

export function updateSettings(patch) {
  settings = { ...settings, ...patch };
  if (patch.apiKey !== undefined) {
    settings.useMockData = !patch.apiKey?.trim();
  }
  saveSettings();
}

export function getFilters() {
  return { ...filters };
}

export function updateFilters(patch, { preset = null } = {}) {
  filters = { ...filters, ...patch };
  if (preset !== null) activePreset = preset;
  notify();
}

export function applyPreset(presetId, presetFilters) {
  filters = { ...DEFAULT_FILTERS, ...presetFilters };
  activePreset = presetId;
  notify();
}

export function getActivePreset() {
  return activePreset;
}

export function getSort() {
  return { ...sort };
}

export function setSort(key) {
  if (sort.key === key) sort.dir = sort.dir === 'asc' ? 'desc' : 'asc';
  else sort = { key, dir: 'desc' };
  notify();
}

export function getQuotes() {
  return quotes;
}

export function setQuotes(newQuotes, meta = {}) {
  quotes = newQuotes;
  lastFetchAt = meta.fetchedAt ?? Date.now();
  dataSource = meta.source ?? dataSource;
  notify();
}

export function setMarketStatus(status) {
  marketStatus = status;
  notify();
}

export function getMarketStatus() {
  return marketStatus;
}

export function getMeta() {
  return { lastFetchAt, dataSource, selectedSymbol };
}

export function setSelectedSymbol(symbol) {
  selectedSymbol = symbol;
  notify();
}

export function getSelectedSymbol() {
  return selectedSymbol;
}

export function getSavedFilters() {
  return [...savedFilters];
}

export function saveFilterPreset(name) {
  const entry = { id: Date.now().toString(), name, filters: { ...filters } };
  savedFilters = [...savedFilters, entry];
  localStorage.setItem('stockviz-saved-filters', JSON.stringify(savedFilters));
  notify();
  return entry;
}

export function deleteSavedFilter(id) {
  savedFilters = savedFilters.filter((f) => f.id !== id);
  localStorage.setItem('stockviz-saved-filters', JSON.stringify(savedFilters));
  notify();
}

export function loadSavedFilter(id) {
  const entry = savedFilters.find((f) => f.id === id);
  if (entry) {
    filters = { ...DEFAULT_FILTERS, ...entry.filters };
    activePreset = 'custom';
    notify();
  }
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notify() {
  listeners.forEach((fn) => fn());
}

export function startPolling(fetchFn) {
  stopPolling();
  const tick = async () => { await fetchFn(); };
  tick();
  pollTimer = setInterval(tick, settings.refreshInterval * 1000);
}

export function stopPolling() {
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }
}

export function resetFilters() {
  filters = { ...DEFAULT_FILTERS };
  activePreset = 'all';
  notify();
}