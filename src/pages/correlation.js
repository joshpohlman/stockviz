import { getQuotes, getFavorites } from '../store.js';
import { UNIVERSE } from '../data/universe.js';
import { buildCorrelationMatrix, correlationColor } from '../analysis/correlation.js';

const DEFAULT_SETS = {
  mag7: ['AAPL', 'MSFT', 'NVDA', 'GOOGL', 'AMZN', 'META', 'TSLA'],
  indices: ['SPY', 'QQQ', 'DIA', 'IWM', 'VTI'],
  semis: ['NVDA', 'AMD', 'INTC', 'AVGO', 'QCOM', 'MU', 'AMAT'],
  banks: ['JPM', 'BAC', 'WFC', 'GS', 'MS', 'C'],
};

let selectedSet = 'mag7';
let customSymbols = '';

export function renderCorrelation(container) {
  const quotes = getQuotes();
  const favorites = getFavorites();
  const symbols = getSymbolSet(selectedSet, customSymbols, favorites);
  const { symbols: syms, matrix } = buildCorrelationMatrix(symbols, quotes);

  container.innerHTML = `
    <div class="page-header corr-header">
      <div>
        <h1>Correlation Matrix</h1>
        <p class="page-sub">Pearson correlation of daily returns — spot diversification and sector clustering.</p>
      </div>
      <div class="corr-controls">
        <select id="corr-set" class="chart-select">
          <option value="mag7" ${selectedSet === 'mag7' ? 'selected' : ''}>Mag 7</option>
          <option value="indices" ${selectedSet === 'indices' ? 'selected' : ''}>Indices &amp; ETFs</option>
          <option value="semis" ${selectedSet === 'semis' ? 'selected' : ''}>Semiconductors</option>
          <option value="banks" ${selectedSet === 'banks' ? 'selected' : ''}>Banks</option>
          <option value="watchlist" ${selectedSet === 'watchlist' ? 'selected' : ''}>Watchlist</option>
          <option value="custom" ${selectedSet === 'custom' ? 'selected' : ''}>Custom</option>
        </select>
        <input type="text" id="corr-custom" class="corr-custom-input" placeholder="AAPL, MSFT, NVDA"
          value="${customSymbols}" ${selectedSet !== 'custom' ? 'hidden' : ''} />
      </div>
    </div>

    ${syms.length < 2 ? '<p class="muted">Need at least 2 symbols with data.</p>' : `
      <div class="corr-legend">
        <span>−1</span><div class="corr-legend-bar"></div><span>+1</span>
        <span class="muted">Strong negative ← → Strong positive</span>
      </div>
      <div class="corr-matrix-wrap panel">
        <table class="corr-matrix">
          <thead>
            <tr><th></th>${syms.map((s) => `<th>${s}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${matrix.map((row, i) => `
              <tr>
                <th>${syms[i]}</th>
                ${row.map((r, j) => `
                  <td class="corr-cell" style="background:${correlationColor(r)}" title="${syms[i]} vs ${syms[j]}: ${r.toFixed(2)}">
                    ${i === j ? '1.0' : r.toFixed(2)}
                  </td>
                `).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <section class="panel corr-insights">
        <h2 class="panel-title">Low Correlation Pairs</h2>
        <p class="muted">Best diversification candidates (lowest absolute correlation):</p>
        <div class="corr-pairs">
          ${findLowPairs(syms, matrix).map((p) => `
            <span class="corr-pair-chip">${p.a} ↔ ${p.b} <strong>${p.r.toFixed(2)}</strong></span>
          `).join('')}
        </div>
      </section>
    `}
  `;

  container.querySelector('#corr-set')?.addEventListener('change', (e) => {
    selectedSet = e.target.value;
    const custom = container.querySelector('#corr-custom');
    if (custom) custom.hidden = selectedSet !== 'custom';
    renderCorrelation(container);
  });

  container.querySelector('#corr-custom')?.addEventListener('change', (e) => {
    customSymbols = e.target.value;
    selectedSet = 'custom';
    renderCorrelation(container);
  });
}

function getSymbolSet(set, custom, favorites) {
  if (set === 'custom' && custom) {
    return custom.split(',').map((s) => s.trim().toUpperCase()).filter(Boolean).slice(0, 12);
  }
  if (set === 'watchlist') return favorites.slice(0, 12);
  return DEFAULT_SETS[set] || DEFAULT_SETS.mag7;
}

function findLowPairs(syms, matrix) {
  const pairs = [];
  for (let i = 0; i < syms.length; i++) {
    for (let j = i + 1; j < syms.length; j++) {
      pairs.push({ a: syms[i], b: syms[j], r: matrix[i][j] });
    }
  }
  return pairs.sort((a, b) => Math.abs(a.r) - Math.abs(b.r)).slice(0, 6);
}