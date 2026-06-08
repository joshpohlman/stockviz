import './style.css';
import { fetchAllQuotes, fetchMarketStatus } from './api.js';
import {
  getSettings, getQuotes, getMeta, getMarketStatus,
  setQuotes, setMarketStatus, subscribe, startPolling, stopPolling,
  setSelectedSymbol, toggleTheme, applyTheme,
  getActiveAlertCount, getTriggeredAlertCount,
} from './store.js';
import { checkAlerts } from './alerts/alertEngine.js';
import { toast } from './components/toast.js';
import { UNIVERSE } from './data/universe.js';
import { fmtPrice, fmtPct, changeClass, fmtTime } from './utils/format.js';
import { patchLivePrices } from './utils/livePatch.js';
import { initQuotePanel, openQuotePanel } from './components/quotePanel.js';
import { initCommandPalette } from './components/commandPalette.js';
import { initToast } from './components/toast.js';
import { renderHome } from './pages/home.js';
import { renderScreener } from './pages/screener.js';
import { renderMap } from './pages/map.js';
import { renderNews } from './pages/news.js';
import { renderPortfolio } from './pages/portfolio.js';
import { renderCompare } from './pages/compare.js';
import { renderSignals } from './pages/signals.js';
import { renderPatterns } from './pages/patterns.js';
import { renderGroups } from './pages/groups.js';
import { renderCharts } from './pages/charts.js';
import { renderFutures } from './pages/futures.js';
import { renderCalendar } from './pages/calendar.js';
import { renderInsider } from './pages/insider.js';
import { renderSettings } from './pages/settings.js';
import { renderMultiCharts } from './pages/multicharts.js';
import { renderAlerts } from './pages/alerts.js';
import { renderExportApi } from './pages/exportApi.js';
import { applyFiltersFromUrl } from './utils/urlState.js';
import { drawSparkline } from './utils/sparkline.js';

const routes = {
  '/': renderHome,
  '/screener': renderScreener,
  '/map': renderMap,
  '/news': renderNews,
  '/portfolio': renderPortfolio,
  '/compare': renderCompare,
  '/signals': renderSignals,
  '/patterns': renderPatterns,
  '/groups': renderGroups,
  '/charts': renderCharts,
  '/multicharts': renderMultiCharts,
  '/alerts': renderAlerts,
  '/export': renderExportApi,
  '/futures': renderFutures,
  '/calendar': renderCalendar,
  '/insider': renderInsider,
  '/settings': renderSettings,
};

const PATCH_ONLY = new Set(['quotes', 'status']);
let currentRoute = '/';
let isFirstLoad = true;

async function refreshQuotes() {
  const settings = getSettings();
  try {
    const [{ quotes, source }, status] = await Promise.all([
      fetchAllQuotes(settings),
      fetchMarketStatus(settings),
    ]);
    setQuotes(quotes, { fetchedAt: Date.now(), source });
    setMarketStatus(status);
    updateStatus(source);
    const fired = checkAlerts(quotes);
    fired.forEach((a) => toast(`Alert: ${a.symbol} — ${a.detail}`, 'success', 5000));
    updateAlertBadge();
  } catch (err) {
    console.error('Quote fetch failed:', err);
    updateStatus('error');
  }
}

function updateStatus(source) {
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  const last = document.getElementById('last-update');
  const market = document.getElementById('market-status');
  const meta = getMeta();
  const mkt = getMarketStatus();

  if (source === 'error') {
    dot.className = 'status-dot';
    text.textContent = 'Update failed';
  } else if (source === 'finnhub') {
    dot.className = 'status-dot live';
    text.textContent = 'Live · Finnhub';
  } else {
    dot.className = 'status-dot mock';
    text.textContent = 'Simulated + TA Engine';
  }

  if (meta.lastFetchAt) last.textContent = `Updated ${fmtTime(meta.lastFetchAt)}`;
  if (market && mkt) {
    market.textContent = mkt.label;
    market.className = `market-status ${mkt.isOpen ? 'open' : 'closed'}`;
  }
  updateFooterStats();
}

function updateAlertBadge() {
  const el = document.getElementById('alert-badge');
  if (!el) return;
  const active = getActiveAlertCount();
  const triggered = getTriggeredAlertCount();
  el.textContent = active + triggered;
  el.hidden = active + triggered === 0;
  el.classList.toggle('has-triggered', triggered > 0);
}

function updateFooterStats() {
  const el = document.getElementById('footer-stats');
  if (!el) return;
  const quotes = getQuotes();
  const rows = [...quotes.values()];
  const patterns = rows.reduce((s, q) => s + (q.patterns?.length || 0), 0);
  const bullish = rows.filter((q) => q.prediction?.direction === 'bullish').length;
  el.innerHTML = `
    <span>${UNIVERSE.length} symbols</span>
    <span>${patterns} patterns</span>
    <span class="pos">${bullish} bullish</span>
  `;
}

function renderTickerBar() {
  const bar = document.getElementById('ticker-bar');
  const quotes = getQuotes();
  bar.innerHTML = ['SPY', 'QQQ', 'DIA', 'IWM'].map((symbol) => {
    const labels = { SPY: 'S&P 500', QQQ: 'NASDAQ', DIA: 'DOW', IWM: 'RUSSELL 2K' };
    const q = quotes.get(symbol);
    if (!q) return '';
    const cls = changeClass(q.changePct);
    return `
      <span class="ticker-item" data-live-symbol="${symbol}">
        <span class="ticker-label">${labels[symbol]}</span>
        <span class="ticker-price" data-live="price">$${fmtPrice(q.price)}</span>
        <span class="ticker-chg ${cls}" data-live="pct">${fmtPct(q.changePct)}</span>
      </span>
    `;
  }).join('');

  bar.querySelectorAll('.ticker-item').forEach((el) => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.liveSymbol }));
    });
  });
}

function paintSparklines() {
  document.querySelectorAll('canvas[data-spark]').forEach((canvas) => {
    const q = getQuotes().get(canvas.dataset.spark);
    if (q?.sparkline?.length) {
      drawSparkline(canvas, q.sparkline, {
        width: Number(canvas.getAttribute('width')) || 72,
        height: Number(canvas.getAttribute('height')) || 24,
      });
    }
  });
}

function getRoutePath() {
  return (location.hash.slice(1) || '/').split('?')[0] || '/';
}

function navigate(animate = true) {
  currentRoute = getRoutePath();
  if (!routes[currentRoute]) currentRoute = '/';

  document.querySelectorAll('.main-nav a').forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href')?.startsWith(`#${currentRoute}`));
  });

  const main = document.getElementById('main-content');
  if (animate && !isFirstLoad) main.classList.add('page-enter');
  const render = routes[currentRoute] || renderHome;
  const result = render(main);
  const after = () => {
    renderTickerBar();
    paintSparklines();
    if (animate) requestAnimationFrame(() => main.classList.remove('page-enter'));
    isFirstLoad = false;
  };
  if (result?.then) result.then(after);
  else after();

  document.getElementById('nav-toggle')?.setAttribute('aria-expanded', 'false');
  document.querySelector('.main-nav')?.classList.remove('open');
}

function onStoreChange(reason) {
  if (reason === 'alerts') updateAlertBadge();
  if (PATCH_ONLY.has(reason) && routes[currentRoute]) {
    patchLivePrices();
    renderTickerBar();
    updateStatus(getMeta().dataSource);
    return;
  }
  if (routes[currentRoute]) navigate(false);
  else renderTickerBar();
}

function boot() {
  initQuotePanel();
  initCommandPalette();
  initToast();
  document.getElementById('nav-toggle')?.addEventListener('click', () => {
    document.querySelector('.main-nav')?.classList.toggle('open');
  });
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  applyTheme(getSettings().theme);
  applyFiltersFromUrl();

  window.addEventListener('hashchange', () => { applyFiltersFromUrl(); navigate(); });
  window.addEventListener('stockviz:select', (e) => { setSelectedSymbol(e.detail); openQuotePanel(e.detail); });
  window.addEventListener('stockviz:settings-saved', () => {
    stopPolling();
    refreshQuotes().then(() => startPolling(refreshQuotes));
  });

  subscribe(onStoreChange);
  refreshQuotes().then(() => { navigate(); startPolling(refreshQuotes); });
}

boot();