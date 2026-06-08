const DEFAULT_SETTINGS = {
  apiKey: '',
  fmpApiKey: '',
  refreshInterval: 30,
  useMockData: true,
  watchlist: ['AAPL', 'MSFT', 'NVDA', 'GOOGL', 'AMZN', 'META', 'TSLA'],
  theme: 'dark',
  chartTheme: 'dark',
  pushNotifications: false,
  alertSound: true,
  alertWebhookUrl: '',
};

const DEFAULT_FILTERS = {
  sector: '',
  industry: '',
  minChange: '',
  maxChange: '',
  minVolume: '',
  minMarketCap: '',
  search: '',
  signal: '',
  pattern: '',
  prediction: '',
  minRsi: '',
  maxRsi: '',
  minPe: '',
  maxPe: '',
  minPeg: '',
  maxPeg: '',
  minDivYield: '',
  aboveSma50: '',
  aboveSma200: '',
  formula: '',
};

let settings = loadSettings();
let filters = { ...DEFAULT_FILTERS };
let savedFilters = loadSavedFilters();
let favorites = loadFavorites();
let portfolio = loadPortfolio();
let paperTrades = loadPaperTrades();
let compareList = [];
let alerts = loadAlerts();
let multiChartLayout = loadMultiChartLayout();
let activePreset = 'all';
let quotes = new Map();
let sort = { key: 'changePct', dir: 'desc' };
let selectedSymbol = null;
let lastFetchAt = null;
let dataSource = 'mock';
let marketStatus = null;
let listeners = new Set();
let pollTimer = null;
let lastNotifyReason = 'full';

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

function loadFavorites() {
  try {
    const raw = localStorage.getItem('stockviz-favorites');
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return ['AAPL', 'NVDA', 'MSFT'];
}

function loadAlerts() {
  try {
    const raw = localStorage.getItem('stockviz-alerts');
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return [];
}

function loadMultiChartLayout() {
  try {
    const raw = localStorage.getItem('stockviz-multichart');
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { id: '2x2', symbols: ['AAPL', 'MSFT', 'NVDA', 'GOOGL'] };
}

function loadPaperTrades() {
  try {
    const raw = localStorage.getItem('stockviz-paper-trades');
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return [];
}

function loadPortfolio() {
  try {
    const raw = localStorage.getItem('stockviz-portfolio');
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return [
    { symbol: 'AAPL', shares: 10, costBasis: 175 },
    { symbol: 'NVDA', shares: 5, costBasis: 450 },
    { symbol: 'MSFT', shares: 8, costBasis: 380 },
  ];
}

function persist(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function saveSettings() {
  persist('stockviz-settings', settings);
  applyTheme(settings.theme);
  notify('settings');
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme || 'dark');
}

export function getSettings() {
  return { ...settings };
}

export function updateSettings(patch) {
  settings = { ...settings, ...patch };
  if (patch.useMockData === undefined && (patch.apiKey !== undefined || patch.fmpApiKey !== undefined)) {
    const hasKey = settings.fmpApiKey?.trim() || settings.apiKey?.trim();
    settings.useMockData = !hasKey;
  }
  saveSettings();
}

export function toggleTheme() {
  settings.theme = settings.theme === 'dark' ? 'light' : 'dark';
  saveSettings();
}

export function getFilters() {
  return { ...filters };
}

export function updateFilters(patch, { preset = null } = {}) {
  filters = { ...filters, ...patch };
  if (preset !== null) activePreset = preset;
  notify('filters');
}

export function applyPreset(presetId, presetFilters) {
  filters = { ...DEFAULT_FILTERS, ...presetFilters };
  activePreset = presetId;
  notify('filters');
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
  notify('sort');
}

export function getQuotes() {
  return quotes;
}

export function setQuotes(newQuotes, meta = {}) {
  quotes = newQuotes;
  lastFetchAt = meta.fetchedAt ?? Date.now();
  dataSource = meta.source ?? dataSource;
  notify('quotes');
}

export function setMarketStatus(status) {
  marketStatus = status;
  notify('status');
}

export function getMarketStatus() {
  return marketStatus;
}

export function getMeta() {
  return { lastFetchAt, dataSource, selectedSymbol };
}

export function setSelectedSymbol(symbol) {
  selectedSymbol = symbol;
  notify('select');
}

export function getSelectedSymbol() {
  return selectedSymbol;
}

export function getFavorites() {
  return [...favorites];
}

export function toggleFavorite(symbol) {
  if (favorites.includes(symbol)) favorites = favorites.filter((s) => s !== symbol);
  else favorites = [...favorites, symbol];
  persist('stockviz-favorites', favorites);
  notify('favorites');
  return favorites.includes(symbol);
}

export function isFavorite(symbol) {
  return favorites.includes(symbol);
}

export function getPortfolio() {
  return [...portfolio];
}

export function addPortfolioHolding({ symbol, shares, costBasis }) {
  const existing = portfolio.find((p) => p.symbol === symbol);
  if (existing) {
    existing.shares += Number(shares);
    existing.costBasis = (existing.costBasis + Number(costBasis)) / 2;
  } else {
    portfolio = [...portfolio, { symbol, shares: Number(shares), costBasis: Number(costBasis) }];
  }
  persist('stockviz-portfolio', portfolio);
  notify('portfolio');
}

export function removePortfolioHolding(symbol) {
  portfolio = portfolio.filter((p) => p.symbol !== symbol);
  persist('stockviz-portfolio', portfolio);
  notify('portfolio');
}

export function getPaperTrades() {
  return [...paperTrades];
}

export function addPaperTrade({ symbol, side, shares, entryPrice }) {
  const entry = {
    id: Date.now().toString(),
    symbol: symbol.toUpperCase(),
    side,
    shares: Number(shares),
    entryPrice: Number(entryPrice),
    openedAt: Date.now(),
    closedAt: null,
    realizedPnl: null,
  };
  paperTrades = [...paperTrades, entry];
  persist('stockviz-paper-trades', paperTrades);
  notify('paper');
  return entry;
}

export function closePaperTrade(id, exitPrice) {
  paperTrades = paperTrades.map((t) => {
    if (t.id !== id || t.closedAt) return t;
    const pnl = t.side === 'long'
      ? (exitPrice - t.entryPrice) * t.shares
      : (t.entryPrice - exitPrice) * t.shares;
    return { ...t, closedAt: Date.now(), exitPrice, realizedPnl: pnl };
  });
  persist('stockviz-paper-trades', paperTrades);
  notify('paper');
}

export function removePaperTrade(id) {
  paperTrades = paperTrades.filter((t) => t.id !== id);
  persist('stockviz-paper-trades', paperTrades);
  notify('paper');
}

export function getCompareList() {
  return [...compareList];
}

export function toggleCompare(symbol) {
  if (compareList.includes(symbol)) {
    compareList = compareList.filter((s) => s !== symbol);
  } else if (compareList.length < 4) {
    compareList = [...compareList, symbol];
  }
  notify('compare');
  return compareList.includes(symbol);
}

export function clearCompare() {
  compareList = [];
  notify('compare');
}

export function getAlerts() {
  return [...alerts];
}

export function getActiveAlertCount() {
  return alerts.filter((a) => a.active && !a.triggered).length;
}

export function getTriggeredAlertCount() {
  return alerts.filter((a) => a.triggered).length;
}

export function addAlert({ symbol, type, value, note = '' }) {
  const entry = {
    id: Date.now().toString(),
    symbol, type, value: String(value), note,
    active: true, triggered: false, triggeredAt: null, triggerDetail: null,
    createdAt: Date.now(),
  };
  alerts = [...alerts, entry];
  persist('stockviz-alerts', alerts);
  notify('alerts');
  return entry;
}

export function removeAlert(id) {
  alerts = alerts.filter((a) => a.id !== id);
  persist('stockviz-alerts', alerts);
  notify('alerts');
}

export function toggleAlert(id) {
  alerts = alerts.map((a) => a.id === id ? { ...a, active: !a.active } : a);
  persist('stockviz-alerts', alerts);
  notify('alerts');
}

export function markAlertTriggered(id, detail) {
  alerts = alerts.map((a) => a.id === id ? { ...a, triggered: true, triggeredAt: Date.now(), triggerDetail: detail } : a);
  persist('stockviz-alerts', alerts);
  notify('alerts');
}

export function clearTriggeredAlerts() {
  alerts = alerts.filter((a) => !a.triggered);
  persist('stockviz-alerts', alerts);
  notify('alerts');
}

export function rearmAlert(id) {
  alerts = alerts.map((a) => a.id === id
    ? { ...a, triggered: false, triggeredAt: null, triggerDetail: null, active: true }
    : a);
  persist('stockviz-alerts', alerts);
  notify('alerts');
}

export function rearmAllAlerts() {
  alerts = alerts.map((a) => a.triggered
    ? { ...a, triggered: false, triggeredAt: null, triggerDetail: null, active: true }
    : a);
  persist('stockviz-alerts', alerts);
  notify('alerts');
}

export function getMultiChartLayout() {
  return { ...multiChartLayout };
}

export function setMultiChartLayout(layout) {
  multiChartLayout = { ...layout };
  persist('stockviz-multichart', multiChartLayout);
  notify('multichart');
}

export function getSavedFilters() {
  return [...savedFilters];
}

export function saveFilterPreset(name) {
  const entry = { id: Date.now().toString(), name, filters: { ...filters } };
  savedFilters = [...savedFilters, entry];
  persist('stockviz-saved-filters', savedFilters);
  notify('filters');
  return entry;
}

export function deleteSavedFilter(id) {
  savedFilters = savedFilters.filter((f) => f.id !== id);
  persist('stockviz-saved-filters', savedFilters);
  notify('filters');
}

export function loadSavedFilter(id) {
  const entry = savedFilters.find((f) => f.id === id);
  if (entry) {
    filters = { ...DEFAULT_FILTERS, ...entry.filters };
    activePreset = 'custom';
    notify('filters');
  }
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getLastNotifyReason() {
  return lastNotifyReason;
}

function notify(reason = 'full') {
  lastNotifyReason = reason;
  listeners.forEach((fn) => fn(reason));
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
  notify('filters');
}

applyTheme(settings.theme);