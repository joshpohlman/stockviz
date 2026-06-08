import { getFavorites, getQuotes } from '../store.js';
import { fmtPrice, fmtPct, fmtVolume, changeClass } from '../utils/format.js';
import { sparklineHtml } from '../utils/sparkline.js';
import { drawSparkline } from '../utils/sparkline.js';

export function renderWatchlist(container) {
  const favorites = getFavorites();
  const quotes = getQuotes();
  const rows = favorites.map((sym) => ({ sym, q: quotes.get(sym) })).filter((r) => r.q);

  container.innerHTML = `
    <div class="page-header">
      <h1>Watchlist</h1>
      <p class="page-sub">${favorites.length} starred tickers — press <kbd>/</kbd> to add more from any page.</p>
    </div>

    ${rows.length ? `
      <div class="watchlist-grid">
        ${rows.map(({ sym, q }) => `
          <div class="watchlist-card panel clickable" data-symbol="${sym}" data-live-symbol="${sym}">
            <div class="wl-head">
              <span class="sym">${sym}</span>
              <span class="${changeClass(q.changePct)}" data-live="pct">${fmtPct(q.changePct)}</span>
            </div>
            <p class="wl-name">${q.name || ''}</p>
            <div class="wl-price" data-live="price">$${fmtPrice(q.price)}</div>
            ${sparklineHtml(sym)}
            <div class="wl-meta">
              <span>Vol ${fmtVolume(q.volume)}</span>
              <span>RSI ${q.ta?.rsi?.toFixed(0) ?? '—'}</span>
            </div>
            ${q.primarySignal ? `<span class="wl-signal">${q.primarySignal}</span>` : ''}
          </div>
        `).join('')}
      </div>
      <div class="table-wrap">
        <table class="data-table finviz-tbl">
          <thead><tr><th>Ticker</th><th>Price</th><th>Change</th><th>RSI</th><th>Signal</th><th>Prediction</th></tr></thead>
          <tbody>
            ${rows.map(({ sym, q }) => `
              <tr class="clickable" data-symbol="${sym}" data-live-symbol="${sym}">
                <td class="sym">${sym}</td>
                <td data-live="price">$${fmtPrice(q.price)}</td>
                <td class="${changeClass(q.changePct)}" data-live="pct">${fmtPct(q.changePct)}</td>
                <td>${q.ta?.rsi?.toFixed(1) ?? '—'}</td>
                <td>${q.primarySignal || '—'}</td>
                <td class="${q.prediction?.direction === 'bullish' ? 'pos' : q.prediction?.direction === 'bearish' ? 'neg' : ''}">${q.prediction?.direction || '—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : `
      <div class="empty-compare panel">
        <p>No favorites yet. Star tickers in the screener or quote panel, or search with <kbd>/</kbd>.</p>
        <a href="#/screener" class="btn-primary">Go to Screener</a>
      </div>
    `}
  `;

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });

  container.querySelectorAll('canvas[data-spark]').forEach((canvas) => {
    const q = quotes.get(canvas.dataset.spark);
    if (q?.sparkline?.length) drawSparkline(canvas, q.sparkline, { width: 120, height: 36 });
  });
}