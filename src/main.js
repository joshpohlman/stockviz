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
} from './store.js';
import { INDICES } from './data/universe.js';
import { fmtPrice, fmtPct, changeClass, fmtTime } from './utils/format.js';
import { initQuotePanel, openQuotePanel } from './components/quotePanel.js';
import { renderHome } from './pages/home.js';
import { renderScreener } from './pages/screener.js';
import { renderMap } from './pages/map.js';
import { renderNews } from './pages/news.js';
import { renderSettings } from './pages/settings.js';
import { applyFiltersFromUrl } from './utils/urlState.js';

const routes = {
  '/': renderHome,
  '/screener': renderScreener,
  '/map': renderMap,
  '/news': renderNews,
  '/settings': renderSettings,
};

let currentRoute = '/';

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

  if (meta.lastFetchAt) {
    last.textContent = `Updated ${fmtTime(meta.lastFetchAt)}`;
  }

  if (market && mkt) {
    market.textContent = mkt.label;
    market.className = `market-status ${mkt.isOpen ? 'open' : 'closed'}`;
  }
}

function renderTickerBar() {
  const bar = document.getElementById('ticker-bar');
  const quotes = getQuotes();
  bar.innerHTML = INDICES.map(({ symbol, label }) => {
    const q = quotes.get(symbol);
    if (!q) return '';
    const cls = changeClass(q.changePct);
    return `
      <span class="ticker-item" data-symbol="${symbol}">
        <span class="ticker-label">${label}</span>
        <span class="ticker-price">$${fmtPrice(q.price)}</span>
        <span class="ticker-chg ${cls}">${fmtPct(q.changePct)}</span>
      </span>
    `;
  }).join('');

  bar.querySelectorAll('[data-symbol]').forEach((el) => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}

function getRoutePath() {
  const hash = location.hash.slice(1) || '/';
  return hash.split('?')[0] || '/';
}

function navigate() {
  currentRoute = getRoutePath();
  if (!routes[currentRoute]) currentRoute = '/';

  document.querySelectorAll('.main-nav a').forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href')?.startsWith(`#${currentRoute}`));
  });

  const main = document.getElementById('main-content');
  const render = routes[currentRoute] || renderHome;
  const result = render(main);
  if (result?.then) result.then(() => renderTickerBar());
  else renderTickerBar();

  document.getElementById('nav-toggle')?.setAttribute('aria-expanded', 'false');
  document.querySelector('.main-nav')?.classList.remove('open');
}

function onStoreChange() {
  if (routes[currentRoute]) navigate();
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

function boot() {
  initQuotePanel();
  initMobileNav();
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