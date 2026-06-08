import { getCompareList, getQuotes, toggleCompare, clearCompare } from '../store.js';
import { findUniverseStock } from '../data/universeStore.js';
import { fmtPrice, fmtPct, fmtVolume, fmtMarketCap, changeClass } from '../utils/format.js';
import { sparklineHtml } from '../utils/sparkline.js';
import { drawSparkline } from '../utils/sparkline.js';

const METRICS = [
  { key: 'price', label: 'Price', fmt: (q) => `$${fmtPrice(q.price)}` },
  { key: 'changePct', label: 'Change %', fmt: (q) => fmtPct(q.changePct), cls: (q) => changeClass(q.changePct) },
  { key: 'volume', label: 'Volume', fmt: (q) => fmtVolume(q.volume) },
  { key: 'marketCap', label: 'Market Cap', fmt: (q) => fmtMarketCap(q.marketCap) },
  { key: 'pe', label: 'P/E (TTM)', fmt: (q) => q.fundamentals?.pe ?? '—' },
  { key: 'peg', label: 'PEG', fmt: (q) => q.fundamentals?.peg ?? '—' },
  { key: 'eps', label: 'EPS', fmt: (q) => q.fundamentals?.eps != null ? q.fundamentals.eps.toFixed(2) : '—' },
  { key: 'ps', label: 'P/S', fmt: (q) => q.fundamentals?.ps ?? '—' },
  { key: 'pb', label: 'P/B', fmt: (q) => q.fundamentals?.pb ?? '—' },
  { key: 'div', label: 'Div Yield', fmt: (q) => q.fundamentals?.dividendYield != null ? `${q.fundamentals.dividendYield}%` : '—' },
  { key: 'beta', label: 'Beta', fmt: (q) => q.fundamentals?.beta ?? '—' },
  { key: 'rsi', label: 'RSI', fmt: (q) => q.ta?.rsi?.toFixed(1) ?? '—' },
  { key: 'prediction', label: 'Prediction', fmt: (q) => q.prediction ? `${q.prediction.direction} ${q.prediction.confidence}%` : '—', cls: (q) => q.prediction?.direction === 'bullish' ? 'pos' : q.prediction?.direction === 'bearish' ? 'neg' : '' },
  { key: 'sector', label: 'Sector', fmt: (q) => q.sector || '—' },
];

export function renderCompare(container) {
  const compare = getCompareList();
  const quotes = getQuotes();

  container.innerHTML = `
    <div class="page-header compare-header">
      <div>
        <h1>Compare Stocks</h1>
        <p class="page-sub">Select up to 4 tickers side-by-side. Click chips below or use <kbd>/</kbd> search.</p>
      </div>
      ${compare.length ? '<button class="btn-ghost" id="clear-compare">Clear All</button>' : ''}
    </div>

    <div class="compare-picker panel">
      <span class="picker-label">Quick add:</span>
      <div class="preset-bar">
        ${['AAPL', 'MSFT', 'NVDA', 'GOOGL', 'AMZN', 'META', 'TSLA', 'JPM'].map((sym) => `
          <button type="button" class="preset-chip ${compare.includes(sym) ? 'active' : ''}" data-add="${sym}">${sym}</button>
        `).join('')}
      </div>
    </div>

    ${compare.length ? renderCompareTable(compare, quotes) : `
      <div class="empty-compare panel">
        <p>No stocks selected. Press <kbd>/</kbd> or <kbd>Ctrl+K</kbd> to search, or click a ticker above.</p>
      </div>
    `}
  `;

  container.querySelector('#clear-compare')?.addEventListener('click', clearCompare);

  container.querySelectorAll('[data-add]').forEach((btn) => {
    btn.addEventListener('click', () => toggleCompare(btn.dataset.add));
  });

  container.querySelectorAll('[data-rm]').forEach((btn) => {
    btn.addEventListener('click', () => toggleCompare(btn.dataset.rm));
  });

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });

  container.querySelectorAll('canvas[data-spark]').forEach((canvas) => {
    const q = quotes.get(canvas.dataset.spark);
    if (q?.sparkline?.length) drawSparkline(canvas, q.sparkline, { width: 120, height: 40 });
  });
}

function renderCompareTable(symbols, quotes) {
  const stocks = symbols.map((sym) => {
    const meta = findUniverseStock(sym);
    return { sym, q: quotes.get(sym), meta };
  });

  return `
    <div class="compare-grid">
      ${stocks.map(({ sym, q, meta }) => `
        <div class="compare-card panel" data-live-symbol="${sym}">
          <div class="compare-card-head">
            <button class="sym compare-sym" data-symbol="${sym}">${sym}</button>
            <button type="button" class="compare-remove" data-rm="${sym}" title="Remove">&times;</button>
          </div>
          <p class="compare-name">${meta?.name || q?.name || ''}</p>
          ${sparklineHtml(sym).replace('width="72" height="24"', 'width="120" height="40"')}
          <div class="compare-price ${changeClass(q?.changePct)}">
            <span data-live="price">$${fmtPrice(q?.price)}</span>
            <span data-live="pct">${fmtPct(q?.changePct)}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="table-wrap">
      <table class="data-table compare-table">
        <thead>
          <tr><th>Metric</th>${symbols.map((s) => `<th class="sym">${s}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${METRICS.map((m) => `
            <tr>
              <td>${m.label}</td>
              ${stocks.map(({ q }) => `
                <td class="${m.cls?.(q) || ''}">${q ? m.fmt(q) : '—'}</td>
              `).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}