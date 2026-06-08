import { fetchSingleQuote, fetchCandles, fetchCompanyNews, fetchStockMetrics, getDataProvider } from '../api.js';
import { getSettings, getQuotes, setSelectedSymbol, toggleFavorite, isFavorite, toggleCompare, getCompareList, addAlert } from '../store.js';
import { enrichWithTA } from '../analysis/enrich.js';
import { fmtPrice, fmtChange, fmtPct, fmtVolume, fmtMarketCap, changeClass } from '../utils/format.js';
import { renderPriceChart } from './chart.js';
import { renderFundamentalsPanel } from './fundamentalsPanel.js';
import { toast } from './toast.js';

let panelEl, bodyEl, overlayEl, closeBtn;

export function initQuotePanel() {
  panelEl = document.getElementById('quote-panel');
  bodyEl = document.getElementById('quote-panel-body');
  overlayEl = document.getElementById('quote-overlay');
  closeBtn = document.getElementById('quote-close');

  closeBtn?.addEventListener('click', closeQuotePanel);
  overlayEl?.addEventListener('click', closeQuotePanel);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panelEl && !panelEl.hidden) closeQuotePanel();
  });
}

export function openQuotePanel(symbol) {
  if (!panelEl) return;
  panelEl.hidden = false;
  overlayEl.hidden = false;
  panelEl.classList.add('open');
  bodyEl.innerHTML = '<div class="quote-loading"><div class="skeleton-line"></div><div class="skeleton-line short"></div></div>';
  loadQuote(symbol);
}

export function closeQuotePanel() {
  if (!panelEl) return;
  panelEl.classList.remove('open');
  setTimeout(() => {
    panelEl.hidden = true;
    overlayEl.hidden = true;
  }, 200);
  setSelectedSymbol(null);
}

async function loadQuote(symbol) {
  const settings = getSettings();
  const cached = getQuotes().get(symbol);
  const [fetched, news, metrics] = await Promise.all([
    cached?.fundamentals?.peg != null ? Promise.resolve(cached) : fetchSingleQuote(symbol, settings),
    fetchCompanyNews(symbol, settings),
    fetchStockMetrics(symbol, settings),
  ]);

  let quote = fetched;
  if (quote && metrics && !cached?.fundamentals?.peg) {
    const enrichOpts = getDataProvider(settings) === 'fmp'
      ? { fmpMetrics: metrics }
      : { finnhubMetrics: metrics };
    quote = enrichWithTA(quote, enrichOpts);
  }

  const candles = quote?.candles || await fetchCandles(symbol, settings);

  if (!quote) {
    bodyEl.innerHTML = '<p class="quote-error">Could not load quote.</p>';
    return;
  }

  const cls = changeClass(quote.changePct);
  const fav = isFavorite(symbol);
  const inCompare = getCompareList().includes(symbol);
  const f = quote.fundamentals || {};

  bodyEl.innerHTML = `
    <div class="quote-actions">
      <button class="btn-ghost btn-sm quote-action ${fav ? 'starred' : ''}" id="qa-fav">${fav ? '★ Favorited' : '☆ Favorite'}</button>
      <button class="btn-ghost btn-sm quote-action ${inCompare ? 'active' : ''}" id="qa-compare">${inCompare ? 'In Compare' : '+ Compare'}</button>
      <button class="btn-ghost btn-sm quote-action" id="qa-alert">+ Alert</button>
      <a class="btn-ghost btn-sm quote-action" href="#/multicharts">Multi-Chart</a>
    </div>
    <div class="quote-header">
      <div>
        <h2 class="quote-symbol">${quote.symbol}</h2>
        <p class="quote-name">${quote.name || ''}</p>
        <p class="quote-sector-line">${quote.sector || ''} · ${quote.industry || ''}</p>
      </div>
      <div class="quote-price-block" data-live-symbol="${symbol}">
        <span class="quote-price" data-live="price">$${fmtPrice(quote.price)}</span>
        <span class="quote-change ${cls}" data-live="pct">${fmtChange(quote.change)} (${fmtPct(quote.changePct)})</span>
      </div>
    </div>

    <div class="quote-key-metrics">
      <div class="qkm"><span class="qkm-label">Mkt Cap</span><span class="qkm-val">${fmtMarketCap(quote.marketCap)}</span></div>
      <div class="qkm"><span class="qkm-label">P/E</span><span class="qkm-val">${f.pe ?? '—'}</span></div>
      <div class="qkm"><span class="qkm-label">PEG</span><span class="qkm-val">${f.peg ?? '—'}</span></div>
      <div class="qkm"><span class="qkm-label">EPS</span><span class="qkm-val">${f.eps != null ? `$${f.eps}` : '—'}</span></div>
      <div class="qkm"><span class="qkm-label">Div Yield</span><span class="qkm-val">${f.dividendYield != null ? `${f.dividendYield}%` : '—'}</span></div>
      <div class="qkm"><span class="qkm-label">Beta</span><span class="qkm-val">${f.beta ?? '—'}</span></div>
    </div>

    <div class="quote-grid">
      <div class="quote-stat"><span class="label">Open</span><span class="value">$${fmtPrice(quote.open)}</span></div>
      <div class="quote-stat"><span class="label">High</span><span class="value">$${fmtPrice(quote.high)}</span></div>
      <div class="quote-stat"><span class="label">Low</span><span class="value">$${fmtPrice(quote.low)}</span></div>
      <div class="quote-stat"><span class="label">Prev Close</span><span class="value">$${fmtPrice(quote.prevClose)}</span></div>
      <div class="quote-stat"><span class="label">Volume</span><span class="value">${fmtVolume(quote.volume)}</span></div>
      <div class="quote-stat"><span class="label">52W High</span><span class="value">$${fmtPrice(f.high52)}</span></div>
      <div class="quote-stat"><span class="label">52W Low</span><span class="value">$${fmtPrice(f.low52)}</span></div>
      <div class="quote-stat"><span class="label">RSI (14)</span><span class="value">${quote.ta?.rsi?.toFixed(1) ?? '—'}</span></div>
    </div>

    <div id="fundamentals-host"></div>

    ${quote.prediction ? `
    <div class="prediction-panel panel">
      <h3 class="quote-section-title">AI Pattern Prediction</h3>
      <div class="pred-header">
        <span class="pred-badge ${quote.prediction.direction}">${quote.prediction.direction.toUpperCase()}</span>
        <span class="pred-conf">${quote.prediction.confidence}% confidence</span>
        <span class="pred-horizon">${quote.prediction.horizon}</span>
      </div>
      <div class="pred-target">
        Target: <strong>$${fmtPrice(quote.prediction.priceTarget)}</strong>
        <span class="${changeClass(quote.prediction.targetPct)}">(${quote.prediction.targetPct >= 0 ? '+' : ''}${quote.prediction.targetPct}%)</span>
      </div>
      <div class="pred-factors">
        ${(quote.prediction.factors || []).slice(0, 5).map((fac) => `
          <div class="pred-factor ${fac.weight}">
            <span>${fac.name}</span>
            <span class="${fac.score >= 0 ? 'pos' : 'neg'}">${fac.score >= 0 ? '+' : ''}${Math.round(fac.score)}</span>
          </div>
        `).join('')}
      </div>
      ${quote.patterns?.length ? `<p class="pred-patterns"><strong>Patterns:</strong> ${quote.patterns.map((p) => `${p.label} (${p.confidence}%)`).join(' · ')}</p>` : ''}
    </div>
    ` : ''}

    <div class="quote-chart-section">
      <h3 class="quote-section-title">Price Chart (60D)</h3>
      <div id="quote-chart" class="quote-chart-host"></div>
    </div>

    <div class="quote-news-section">
      <h3 class="quote-section-title">News</h3>
      <div class="quote-news-list">
        ${news.slice(0, 5).map((n) => `
          <a class="quote-news-item" href="${n.url || '#'}" target="_blank" rel="noopener">
            <span class="quote-news-headline">${n.headline || n.title}</span>
            <span class="quote-news-meta">${n.source || ''}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;

  const fundHost = bodyEl.querySelector('#fundamentals-host');
  if (fundHost) renderFundamentalsPanel(quote, fundHost);

  bodyEl.querySelector('#qa-alert')?.addEventListener('click', () => {
    const type = prompt('Alert type: price_above, price_below, change_above, rsi_above, prediction\n(or visit Alerts page)', 'price_above');
    if (!type) return;
    const value = prompt('Threshold value:', String(quote.price));
    if (value == null) return;
    addAlert({ symbol, type, value, note: 'Quick alert from quote panel' });
    toast(`Alert set for ${symbol}`, 'success');
  });

  bodyEl.querySelector('#qa-fav')?.addEventListener('click', () => {
    const on = toggleFavorite(symbol);
    const btn = bodyEl.querySelector('#qa-fav');
    btn.textContent = on ? '★ Favorited' : '☆ Favorite';
    btn.classList.toggle('starred', on);
    toast(on ? `${symbol} favorited` : `${symbol} unfavorited`, 'info');
  });

  bodyEl.querySelector('#qa-compare')?.addEventListener('click', () => {
    const on = toggleCompare(symbol);
    const btn = bodyEl.querySelector('#qa-compare');
    if (getCompareList().length > 4 && !on) {
      toast('Compare list full (max 4)', 'error');
      return;
    }
    btn.textContent = on ? 'In Compare' : '+ Compare';
    btn.classList.toggle('active', on);
    toast(on ? `${symbol} added to compare` : `${symbol} removed`, 'info');
  });

  const chartHost = bodyEl.querySelector('#quote-chart');
  if (chartHost) {
    renderPriceChart(chartHost, candles, { height: 180, showVolume: true });
    const ro = new ResizeObserver(() => renderPriceChart(chartHost, candles, { height: 180, showVolume: true }));
    ro.observe(chartHost);
  }
}