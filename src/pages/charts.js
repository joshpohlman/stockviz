import { getQuotes } from '../store.js';
import { UNIVERSE } from '../data/universe.js';
import { renderPriceChart } from '../components/chart.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

let selected = 'AAPL';
const chartOpts = {
  overlays: { sma20: true, sma50: true, sma200: false, bollinger: false },
  showVolume: true,
  showRsi: true,
};

export function renderCharts(container) {
  const quotes = getQuotes();
  const q = quotes.get(selected) || quotes.get('AAPL');

  container.innerHTML = `
    <div class="page-header charts-header">
      <h1>Advanced Charts</h1>
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
        <div class="chart-overlay-bar">
          <label><input type="checkbox" data-ov="sma20" ${chartOpts.overlays.sma20 ? 'checked' : ''} /> SMA20</label>
          <label><input type="checkbox" data-ov="sma50" ${chartOpts.overlays.sma50 ? 'checked' : ''} /> SMA50</label>
          <label><input type="checkbox" data-ov="sma200" ${chartOpts.overlays.sma200 ? 'checked' : ''} /> SMA200</label>
          <label><input type="checkbox" data-ov="bollinger" ${chartOpts.overlays.bollinger ? 'checked' : ''} /> Bollinger</label>
          <label><input type="checkbox" data-vol ${chartOpts.showVolume ? 'checked' : ''} /> Volume</label>
          <label><input type="checkbox" data-rsi ${chartOpts.showRsi ? 'checked' : ''} /> RSI</label>
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

  const paint = () => {
    const host = container.querySelector('#full-chart');
    if (host && q?.candles) renderPriceChart(host, q.candles, { height: 320, ...chartOpts });
  };
  paint();
  const host = container.querySelector('#full-chart');
  if (host) new ResizeObserver(paint).observe(host);

  container.querySelector('#chart-symbol')?.addEventListener('change', (e) => {
    selected = e.target.value;
    renderCharts(container);
  });

  container.querySelectorAll('[data-ov]').forEach((cb) => {
    cb.addEventListener('change', () => {
      chartOpts.overlays[cb.dataset.ov] = cb.checked;
      paint();
    });
  });
  container.querySelector('[data-vol]')?.addEventListener('change', (e) => {
    chartOpts.showVolume = e.target.checked;
    paint();
  });
  container.querySelector('[data-rsi]')?.addEventListener('change', (e) => {
    chartOpts.showRsi = e.target.checked;
    paint();
  });
}