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
import { initUniverse, hydrateUniverseFromCache, getUniverseMeta } from './data/universeStore.js';
import { clearHomeIndicesCache } from './api/homeIndices.js';
import { fmtIndexPrice, fmtPrice, fmtPct, changeClass, fmtTime } from './utils/format.js';
import { patchLivePrices, patchHomeCharts } from './utils/livePatch.js';
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
import { renderDashboard } from './pages/dashboard.js';
import { renderInternals } from './pages/internals.js';
import { renderCorrelation } from './pages/correlation.js';
import { renderBacktest } from './pages/backtest.js';
import { renderOptions } from './pages/options.js';
import { renderAnalyst } from './pages/analyst.js';
import { renderRotation } from './pages/rotation.js';
import { renderShorts } from './pages/shorts.js';
import { renderWatchlist } from './pages/watchlist.js';
import { renderDividends } from './pages/dividends.js';
import { renderPaperTrading } from './pages/paperTrading.js';
import { fetchTickerIndices, clearLiveAdvancedCache } from './api/liveAdvanced.js';
import { clearMarketWidgetCache } from './api/marketExtras.js';
import { clearQuoteCache } from './api.js';
import { initKeyboardShortcuts } from './utils/keyboard.js';
import { deliverAlertWebhook } from './utils/alertDelivery.js';
import { applyFiltersFromUrl } from './utils/urlState.js';
import { drawSparkline } from './utils/sparkline.js';
import { sendNotification } from './utils/notifications.js';

const routes = {
  '/': renderHome,
  '/dashboard': renderDashboard,
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
  '/internals': renderInternals,
  '/correlation': renderCorrelation,
  '/backtest': renderBacktest,
  '/options': renderOptions,
  '/analyst': renderAnalyst,
  '/rotation': renderRotation,
  '/shorts': renderShorts,
  '/futures': renderFutures,
  '/calendar': renderCalendar,
  '/insider': renderInsider,
  '/settings': renderSettings,
  '/watchlist': renderWatchlist,
  '/dividends': renderDividends,
  '/paper': renderPaperTrading,
};

const INDEX_TICKERS = [
  { symbol: '^GSPC', label: 'S&P 500', etf: 'SPY' },
  { symbol: '^IXIC', label: 'NASDAQ', etf: 'QQQ' },
  { symbol: '^DJI', label: 'DOW', etf: 'DIA' },
  { symbol: '^RUT', label: 'RUSSELL 2K', etf: 'IWM' },
];

const PATCH_ONLY = new Set(['quotes', 'status']);
let currentRoute = '/';
let isFirstLoad = true;
let quotesLoading = false;
let tickerIndexCache = null;
/** First quote load needs a full home render; later refreshes patch in place. */
let homeQuoteRenderPending = true;

async function refreshQuotes() {
  const settings = getSettings();
  quotesLoading = true;
  updateStatus('loading');
  try {
    const [{ quotes, source, liveCount, staleCount, missingCount }, status] = await Promise.all([
      fetchAllQuotes(settings, {
        onProgress: (partial, src) => {
          const live = [...partial.values()].filter((q) => q.live).length;
          const stale = [...partial.values()].filter((q) => q.stale).length;
          setQuotes(partial, {
            fetchedAt: Date.now(),
            source: src,
            liveCount: live,
            staleCount: stale,
          });
          if (currentRoute === '/' && homeQuoteRenderPending && live >= 80) {
            homeQuoteRenderPending = false;
            requestAnimationFrame(() => navigate(false));
          }
        },
      }),
      fetchMarketStatus(settings),
    ]);
    setQuotes(quotes, {
      fetchedAt: Date.now(),
      source,
      liveCount,
      staleCount,
      missingCount,
    });
    setMarketStatus(status);
    updateStatus(source);
    const fired = checkAlerts(quotes);
    fired.forEach((a) => {
      toast(`Alert: ${a.symbol} — ${a.detail}`, 'success', 5000);
      if (settings.pushNotifications) {
        sendNotification({
          title: `StockViz: ${a.symbol}`,
          body: a.detail,
          tag: `alert-${a.id}`,
        });
      }
      deliverAlertWebhook(settings, a);
    });
    updateAlertBadge();
    await loadTickerIndices();
    renderTickerBar();
    if (currentRoute === '/') {
      if (homeQuoteRenderPending) {
        homeQuoteRenderPending = false;
        navigate(false);
      } else {
        patchLivePrices();
        patchHomeCharts();
      }
    }
  } catch (err) {
    console.error('Quote fetch failed:', err);
    updateStatus('error');
  } finally {
    quotesLoading = false;
  }
}

function updateStatus(source) {
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  const last = document.getElementById('last-update');
  const market = document.getElementById('market-status');
  const meta = getMeta();
  const mkt = getMarketStatus();

  if (source === 'loading') {
    dot.className = 'status-dot';
    text.textContent = 'Loading quotes…';
  } else if (source === 'error' || source === 'fmp-failed') {
    dot.className = 'status-dot';
    text.textContent = source === 'fmp-failed'
      ? 'FMP quotes failed — check API key in Settings'
      : 'Update failed';
  } else if (source === 'fmp' || source === 'fmp-partial' || source === 'fmp-stale') {
    const uni = getUniverseMeta();
    const live = meta.liveQuoteCount ?? 0;
    const stale = meta.staleQuoteCount ?? 0;
    const total = uni.count || live + stale;
    if (source === 'fmp-stale') {
      dot.className = 'status-dot';
      text.textContent = `Cached · FMP · ${stale}/${total} (refresh failed)`;
    } else if (source === 'fmp-partial') {
      dot.className = 'status-dot live';
      const extra = stale ? ` · ${stale} cached` : '';
      text.textContent = `Live · FMP · ${live}/${total}${extra}`;
    } else {
      dot.className = 'status-dot live';
      text.textContent = uni.source === 'sp500'
        ? `Live · FMP · ${live}/${total}`
        : `Live · FMP · ${live} quotes`;
    }
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
    <span>${getUniverseMeta().label}</span>
    <span>${patterns} patterns</span>
    <span class="pos">${bullish} bullish</span>
  `;
}

async function loadTickerIndices() {
  const settings = getSettings();
  const indices = await fetchTickerIndices(settings).catch(() => null);
  if (indices?.size) tickerIndexCache = indices;
}

function renderTickerBar() {
  const bar = document.getElementById('ticker-bar');
  if (!bar) return;
  const quotes = getQuotes();

  bar.innerHTML = INDEX_TICKERS.map(({ symbol, label, etf }) => {
    const live = tickerIndexCache?.get(symbol);
    const etfQ = quotes.get(etf);
    const price = live?.price ?? etfQ?.price;
    const changePct = live?.changePct ?? etfQ?.changePct ?? 0;
    if (price == null) return '';
    const cls = changeClass(changePct);
    const priceStr = live
      ? fmtIndexPrice(price)
      : `$${fmtPrice(price)}`;
    return `
      <span class="ticker-item" data-index-symbol="${symbol}" data-nav-symbol="${etf}" data-live-format="${live ? 'index' : 'etf'}">
        <span class="ticker-label">${label}</span>
        <span class="ticker-price" data-live="price">${priceStr}</span>
        <span class="ticker-chg ${cls}" data-live="pct">${fmtPct(changePct)}</span>
      </span>
    `;
  }).join('');

  bar.querySelectorAll('.ticker-item').forEach((el) => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.navSymbol }));
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

  if (reason === 'quotes' && quotesLoading) {
    patchLivePrices();
    updateStatus('loading');
    return;
  }

  if (PATCH_ONLY.has(reason) && routes[currentRoute] && !quotesLoading) {
    patchLivePrices();
    renderTickerBar();
    if (currentRoute === '/') patchHomeCharts();
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
  initKeyboardShortcuts();

  document.getElementById('nav-toggle')?.addEventListener('click', () => {
    document.querySelector('.main-nav')?.classList.toggle('open');
  });
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  applyTheme(getSettings().theme);
  applyFiltersFromUrl();

  window.addEventListener('hashchange', () => { applyFiltersFromUrl(); navigate(); });
  window.addEventListener('stockviz:select', (e) => { setSelectedSymbol(e.detail); openQuotePanel(e.detail); });
  window.addEventListener('stockviz:settings-saved', async () => {
    stopPolling();
    tickerIndexCache = null;
    homeQuoteRenderPending = true;
    clearHomeIndicesCache();
    clearLiveAdvancedCache();
    clearMarketWidgetCache();
    clearQuoteCache();
    await initUniverse(getSettings());
    refreshQuotes().then(() => startPolling(refreshQuotes));
  });

  subscribe(onStoreChange);

  const settings = getSettings();
  hydrateUniverseFromCache(settings);
  updateStatus('loading');
  navigate();

  initUniverse(settings)
    .catch((err) => console.warn('Universe init failed:', err))
    .finally(() => startPolling(refreshQuotes));

}

boot();