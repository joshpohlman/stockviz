import { getQuotes, getMultiChartLayout, setMultiChartLayout, getFavorites } from '../store.js';
import { UNIVERSE } from '../data/universe.js';
import { renderPriceChart } from '../components/chart.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

const LAYOUTS = [
  { id: '2x2', cols: 2, slots: 4 },
  { id: '2x3', cols: 3, slots: 6 },
  { id: '3x3', cols: 3, slots: 9 },
  { id: '4x2', cols: 4, slots: 8 },
];

const DEFAULT_SYMBOLS = ['AAPL', 'MSFT', 'NVDA', 'GOOGL', 'AMZN', 'META', 'TSLA', 'JPM', 'SPY'];

export function renderMultiCharts(container) {
  const layout = getMultiChartLayout();
  const cfg = LAYOUTS.find((l) => l.id === layout.id) || LAYOUTS[0];
  const quotes = getQuotes();
  const symbols = [...layout.symbols];
  while (symbols.length < cfg.slots) symbols.push(DEFAULT_SYMBOLS[symbols.length % DEFAULT_SYMBOLS.length]);

  container.innerHTML = `
    <div class="page-header multichart-header">
      <div>
        <h1>Multi-Chart</h1>
        <p class="page-sub">Finviz Elite-style multi-layout charts — click a chart to change symbol.</p>
      </div>
      <div class="multichart-controls">
        ${LAYOUTS.map((l) => `
          <button type="button" class="preset-chip ${layout.id === l.id ? 'active' : ''}" data-layout="${l.id}">${l.id}</button>
        `).join('')}
        <button type="button" class="btn-secondary" id="mc-watchlist">Load Watchlist</button>
        <button type="button" class="btn-secondary" id="mc-favorites">Load Favorites</button>
      </div>
    </div>
    <div class="multichart-grid cols-${cfg.cols}" id="mc-grid">
      ${symbols.slice(0, cfg.slots).map((sym, i) => renderChartCell(sym, quotes.get(sym), i)).join('')}
    </div>
  `;

  container.querySelectorAll('[data-layout]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const l = LAYOUTS.find((x) => x.id === btn.dataset.layout);
      setMultiChartLayout({ id: l.id, symbols: symbols.slice(0, l.slots) });
    });
  });

  container.querySelector('#mc-watchlist')?.addEventListener('click', () => {
    const wl = getSettingsWatchlist();
    setMultiChartLayout({ id: layout.id, symbols: wl.slice(0, cfg.slots) });
  });

  container.querySelector('#mc-favorites')?.addEventListener('click', () => {
    setMultiChartLayout({ id: layout.id, symbols: getFavorites().slice(0, cfg.slots) });
  });

  container.querySelectorAll('.mc-cell').forEach((cell) => {
    const chartHost = cell.querySelector('.mc-chart');
    const sym = cell.dataset.symbol;
    const q = quotes.get(sym);
    if (chartHost && q?.candles) {
      renderPriceChart(chartHost, q.candles, { height: 140 });
    }

    cell.querySelector('.mc-sym-select')?.addEventListener('change', (e) => {
      const idx = Number(cell.dataset.idx);
      const next = [...layout.symbols];
      while (next.length <= idx) next.push(DEFAULT_SYMBOLS[next.length % DEFAULT_SYMBOLS.length]);
      next[idx] = e.target.value;
      setMultiChartLayout({ id: layout.id, symbols: next });
    });

    cell.addEventListener('click', (e) => {
      if (e.target.tagName === 'SELECT') return;
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: sym }));
    });
  });
}

function getSettingsWatchlist() {
  try {
    const s = JSON.parse(localStorage.getItem('stockviz-settings') || '{}');
    return s.watchlist || DEFAULT_SYMBOLS;
  } catch { return DEFAULT_SYMBOLS; }
}

function renderChartCell(sym, q, idx) {
  const cls = changeClass(q?.changePct);
  return `
    <div class="mc-cell panel" data-symbol="${sym}" data-idx="${idx}">
      <div class="mc-cell-head">
        <select class="mc-sym-select sym" aria-label="Symbol">
          ${UNIVERSE.map((s) => `<option value="${s.symbol}" ${s.symbol === sym ? 'selected' : ''}>${s.symbol}</option>`).join('')}
        </select>
        <span class="mc-price ${cls}">${q ? `$${fmtPrice(q.price)} ${fmtPct(q.changePct)}` : '—'}</span>
      </div>
      <div class="mc-chart"></div>
      ${q?.prediction ? `<span class="mc-pred pred-badge ${q.prediction.direction}">${q.prediction.direction} ${q.prediction.confidence}%</span>` : ''}
    </div>
  `;
}