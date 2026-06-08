import { fetchSingleQuote, fetchCandles, fetchCompanyNews } from '../api.js';
import { getSettings, setSelectedSymbol } from '../store.js';
import { fmtPrice, fmtChange, fmtPct, fmtVolume, fmtMarketCap, changeClass } from '../utils/format.js';
import { renderPriceChart } from './chart.js';

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
  bodyEl.innerHTML = '<div class="quote-loading">Loading quote…</div>';
  loadQuote(symbol);
}

export function closeQuotePanel() {
  if (!panelEl) return;
  panelEl.hidden = true;
  overlayEl.hidden = true;
  setSelectedSymbol(null);
}

async function loadQuote(symbol) {
  const settings = getSettings();
  const [quote, candles, news] = await Promise.all([
    fetchSingleQuote(symbol, settings),
    fetchCandles(symbol, settings),
    fetchCompanyNews(symbol, settings),
  ]);

  if (!quote) {
    bodyEl.innerHTML = '<p class="quote-error">Could not load quote.</p>';
    return;
  }

  const cls = changeClass(quote.changePct);
  bodyEl.innerHTML = `
    <div class="quote-header">
      <div>
        <h2 class="quote-symbol">${quote.symbol}</h2>
        <p class="quote-name">${quote.name || ''}</p>
      </div>
      <div class="quote-price-block">
        <span class="quote-price">$${fmtPrice(quote.price)}</span>
        <span class="quote-change ${cls}">${fmtChange(quote.change)} (${fmtPct(quote.changePct)})</span>
      </div>
    </div>
    <div class="quote-grid">
      <div class="quote-stat"><span class="label">Open</span><span class="value">$${fmtPrice(quote.open)}</span></div>
      <div class="quote-stat"><span class="label">High</span><span class="value">$${fmtPrice(quote.high)}</span></div>
      <div class="quote-stat"><span class="label">Low</span><span class="value">$${fmtPrice(quote.low)}</span></div>
      <div class="quote-stat"><span class="label">Prev Close</span><span class="value">$${fmtPrice(quote.prevClose)}</span></div>
      <div class="quote-stat"><span class="label">Volume</span><span class="value">${fmtVolume(quote.volume)}</span></div>
      <div class="quote-stat"><span class="label">Market Cap</span><span class="value">${fmtMarketCap(quote.marketCap)}</span></div>
      <div class="quote-stat"><span class="label">Sector</span><span class="value">${quote.sector || '—'}</span></div>
      <div class="quote-stat"><span class="label">Industry</span><span class="value">${quote.industry || '—'}</span></div>
    </div>
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

  const chartHost = bodyEl.querySelector('#quote-chart');
  if (chartHost) renderPriceChart(chartHost, candles, { height: 180 });
}