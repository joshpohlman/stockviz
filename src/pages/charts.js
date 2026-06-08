import { getQuotes } from '../store.js';
import { UNIVERSE } from '../data/universe.js';
import { renderPriceChart } from '../components/chart.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

let selected = 'AAPL';

export function renderCharts(container) {
  const quotes = getQuotes();
  const q = quotes.get(selected) || quotes.get('AAPL');

  container.innerHTML = `
    <div class="page-header charts-header">
      <h1>Charts</h1>
      <select id="chart-symbol" class="chart-select">
        ${UNIVERSE.map((s) => `<option value="${s.symbol}" ${s.symbol === selected ? 'selected' : ''}>${s.symbol} — ${s.name}</option>`).join('')}
      </select>
    </div>
    ${q ? `
      <div class="chart-page panel">
        <div class="chart-page-head">
          <div>
            <span class="chart-page-sym">${q.symbol}</span>
            <span class="chart-page-name">${q.name}</span>
          </div>
          <div class="chart-page-price ${changeClass(q.changePct)}">
            $${fmtPrice(q.price)} ${fmtPct(q.changePct)}
          </div>
        </div>
        <div id="full-chart" class="full-chart-host"></div>
        ${q.prediction ? `
          <div class="chart-prediction">
            <span class="pred-badge ${q.prediction.direction}">${q.prediction.direction.toUpperCase()}</span>
            <span>${q.prediction.confidence}% confidence · Target $${fmtPrice(q.prediction.priceTarget)} (${q.prediction.targetPct >= 0 ? '+' : ''}${q.prediction.targetPct}%) · ${q.prediction.horizon}</span>
          </div>
        ` : ''}
        ${q.patterns?.length ? `
          <div class="chart-patterns">
            <strong>Patterns:</strong> ${q.patterns.map((p) => `${p.label} (${p.confidence}%)`).join(' · ')}
          </div>
        ` : ''}
      </div>
    ` : '<p class="muted">Loading…</p>'}
  `;

  const host = container.querySelector('#full-chart');
  if (host && q?.candles) {
    renderPriceChart(host, q.candles, { height: 360 });
    new ResizeObserver(() => renderPriceChart(host, q.candles, { height: 360 })).observe(host);
  }

  container.querySelector('#chart-symbol')?.addEventListener('change', (e) => {
    selected = e.target.value;
    renderCharts(container);
  });
}