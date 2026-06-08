import { fetchSingleQuote, fetchCandles, fetchCompanyNews } from '../api.js';
import { getSettings, getQuotes, setSelectedSymbol, toggleFavorite, isFavorite, toggleCompare, getCompareList } from '../store.js';
import { fmtPrice, fmtChange, fmtPct, fmtVolume, fmtMarketCap, changeClass } from '../utils/format.js';
import { renderPriceChart } from './chart.js';
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
  const [fetched, news] = await Promise.all([
    cached?.prediction ? Promise.resolve(cached) : fetchSingleQuote(symbol, settings),
    fetchCompanyNews(symbol, settings),
  ]);
  const quote = fetched;
  const candles = quote?.candles || await fetchCandles(symbol, settings);

  if (!quote) {
    bodyEl.innerHTML = '<p class="quote-error">Could not load quote.</p>';
    return;
  }

  const cls = changeClass(quote.changePct);
  const fav = isFavorite(symbol);
  const inCompare = getCompareList().includes(symbol);

  bodyEl.innerHTML = `
    <div class="quote-actions">
      <button class="btn-ghost btn-sm quote-action ${fav ? 'starred' : ''}" id="qa-fav">${fav ? '★ Favorited' : '☆ Favorite'}</button>
      <button class="btn-ghost btn-sm quote-action ${inCompare ? 'active' : ''}" id="qa-compare">${inCompare ? 'In Compare' : '+ Compare'}</button>
      <a class="btn-ghost btn-sm quote-action" href="#/screener" id="qa-screener">Screener</a>
    </div>
    <div class="quote-header">
      <div>
        <h2 class="quote-symbol">${quote.symbol}</h2>
        <p class="quote-name">${quote.name || ''}</p>
      </div>
      <div class="quote-price-block" data-live-symbol="${symbol}">
        <span class="quote-price" data-live="price">$${fmtPrice(quote.price)}</span>
        <span class="quote-change ${cls}" data-live="pct">${fmtChange(quote.change)} (${fmtPct(quote.changePct)})</span>
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
        ${(quote.prediction.factors || []).map((f) => `
          <div class="pred-factor ${f.weight}">
            <span>${f.name}</span>
            <span class="${f.score >= 0 ? 'pos' : 'neg'}">${f.score >= 0 ? '+' : ''}${Math.round(f.score)}</span>
          </div>
        `).join('')}
      </div>
      ${quote.patterns?.length ? `<p class="pred-patterns"><strong>Patterns:</strong> ${quote.patterns.map((p) => `${p.label} (${p.confidence}%)`).join(' · ')}</p>` : ''}
      <p class="pred-disclaimer">Technical analysis estimate — not financial advice.</p>
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
    renderPriceChart(chartHost, candles, { height: 180 });
    const ro = new ResizeObserver(() => renderPriceChart(chartHost, candles, { height: 180 }));
    ro.observe(chartHost);
  }
}