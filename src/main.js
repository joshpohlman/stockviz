import './style.css';
import { fetchAllQuotes, fetchMarketStatus } from './api.js';
import {
  getSettings,
  getQuotes,
  getMeta,
  getMarketStatus,
  setQuotes,
  setMarketStatus,
  subscribe,
  startPolling,
  stopPolling,
  setSelectedSymbol,
  toggleTheme,
  applyTheme,
} from './store.js';
import { INDICES, UNIVERSE } from './data/universe.js';
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
import { renderSettings } from './pages/settings.js';
import { applyFiltersFromUrl } from './utils/urlState.js';
import { drawSparkline } from './utils/sparkline.js';

const routes = {
  '/': renderHome,
  '/screener': renderScreener,
  '/map': renderMap,
  '/news': renderNews,
  '/portfolio': renderPortfolio,
  '/compare': renderCompare,
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
    text.textContent = 'Simulated data';
  }

  if (meta.lastFetchAt) last.textContent = `Updated ${fmtTime(meta.lastFetchAt)}`;
  if (market && mkt) {
    market.textContent = mkt.label;
    market.className = `market-status ${mkt.isOpen ? 'open' : 'closed'}`;
  }

  updateFooterStats();
}

function updateFooterStats() {
  const el = document.getElementById('footer-stats');
  if (!el) return;
  const quotes = getQuotes();
  const rows = [...quotes.values()];
  const avg = rows.length ? rows.reduce((s, q) => s + q.changePct, 0) / rows.length : 0;
  const up = rows.filter((q) => q.changePct > 0).length;
  const down = rows.filter((q) => q.changePct < 0).length;
  el.innerHTML = `
    <span>${UNIVERSE.length} symbols</span>
    <span class="${changeClass(avg)}">Avg ${fmtPct(avg)}</span>
    <span class="pos">${up} up</span>
    <span class="neg">${down} down</span>
  `;
}

function renderTickerBar() {
  const bar = document.getElementById('ticker-bar');
  const quotes = getQuotes();
  bar.innerHTML = INDICES.map(({ symbol, label }) => {
    const q = quotes.get(symbol);
    if (!q) return '';
    const cls = changeClass(q.changePct);
    return `
      <span class="ticker-item" data-live-symbol="${symbol}">
        <span class="ticker-label">${label}</span>
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
      const w = Number(canvas.getAttribute('width')) || 72;
      const h = Number(canvas.getAttribute('height')) || 24;
      drawSparkline(canvas, q.sparkline, { width: w, height: h });
    }
  });
}

function getRoutePath() {
  const hash = location.hash.slice(1) || '/';
  return hash.split('?')[0] || '/';
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
    if (animate) {
      requestAnimationFrame(() => main.classList.remove('page-enter'));
    }
    isFirstLoad = false;
  };
  if (result?.then) result.then(after);
  else after();

  document.getElementById('nav-toggle')?.setAttribute('aria-expanded', 'false');
  document.querySelector('.main-nav')?.classList.remove('open');
}

function onStoreChange(reason) {
  if (PATCH_ONLY.has(reason) && routes[currentRoute]) {
    patchLivePrices();
    renderTickerBar();
    updateStatus(getMeta().dataSource);
    return;
  }
  if (routes[currentRoute]) navigate(false);
  else renderTickerBar();
}

function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

function initThemeToggle() {
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  applyTheme(getSettings().theme);
}

function boot() {
  initQuotePanel();
  initCommandPalette();
  initToast();
  initMobileNav();
  initThemeToggle();
  applyFiltersFromUrl();

  window.addEventListener('hashchange', () => {
    applyFiltersFromUrl();
    navigate();
  });

  window.addEventListener('stockviz:select', (e) => {
    setSelectedSymbol(e.detail);
    openQuotePanel(e.detail);
  });

  window.addEventListener('stockviz:settings-saved', () => {
    stopPolling();
    refreshQuotes().then(() => startPolling(refreshQuotes));
  });

  subscribe(onStoreChange);

  refreshQuotes().then(() => {
    navigate();
    startPolling(refreshQuotes);
  });
}

boot();