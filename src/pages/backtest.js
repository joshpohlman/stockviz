import { getQuotes, getSettings } from '../store.js';
import { UNIVERSE } from '../data/universe.js';
import { getStrategies, runBacktest, monteCarloProjection } from '../analysis/backtest.js';
import { fetchCandles, getDataProvider } from '../api.js';
import { fmtPrice, changeClass } from '../utils/format.js';

let selectedSymbol = 'AAPL';
let selectedStrategy = 'rsi_oversold';
let cachedCandles = [];

export async function renderBacktest(container) {
  const quotes = getQuotes();
  const settings = getSettings();
  const q = quotes.get(selectedSymbol);
  const strategies = getStrategies();
  const live = getDataProvider(settings) !== 'mock';

  container.innerHTML = '<div class="page-header"><h1>Strategy Backtester</h1><p class="page-sub">Loading historical data…</p></div>';

  cachedCandles = await fetchCandles(selectedSymbol, settings, 'D', 120);
  const candles = cachedCandles.length ? cachedCandles : (q?.candles || []);
  const result = runBacktest(candles, selectedStrategy);
  const monte = monteCarloProjection(candles);

  container.innerHTML = `
    <div class="page-header backtest-header">
      <div>
        <h1>Strategy Backtester</h1>
        <p class="page-sub">Test TA strategies on ${live ? 'live FMP' : 'simulated'} historical candles — equity curve, Sharpe, drawdown.</p>
      </div>
      <div class="backtest-controls">
        <select id="bt-symbol" class="chart-select">
          ${UNIVERSE.slice(0, 80).map((s) => `<option value="${s.symbol}" ${s.symbol === selectedSymbol ? 'selected' : ''}>${s.symbol}</option>`).join('')}
        </select>
        <select id="bt-strategy" class="chart-select">
          ${strategies.map((s) => `<option value="${s.id}" ${s.id === selectedStrategy ? 'selected' : ''}>${s.label}</option>`).join('')}
        </select>
      </div>
    </div>

    ${q ? `
      <p class="page-sub">${strategies.find((s) => s.id === selectedStrategy)?.desc}</p>

      <div class="backtest-stats">
        <div class="summary-card"><span class="summary-label">Total Return</span>
          <span class="summary-value ${changeClass(result.stats.totalReturn)}">${result.stats.totalReturn.toFixed(1)}%</span></div>
        <div class="summary-card"><span class="summary-label">Final Value</span>
          <span class="summary-value">$${fmtPrice(result.stats.finalValue)}</span></div>
        <div class="summary-card"><span class="summary-label">Win Rate</span>
          <span class="summary-value">${result.stats.winRate.toFixed(0)}%</span></div>
        <div class="summary-card"><span class="summary-label">Max Drawdown</span>
          <span class="summary-value neg">${result.stats.maxDrawdown.toFixed(1)}%</span></div>
        <div class="summary-card"><span class="summary-label">Sharpe</span>
          <span class="summary-value">${result.stats.sharpe.toFixed(2)}</span></div>
        <div class="summary-card"><span class="summary-label">Trades</span>
          <span class="summary-value">${result.stats.tradeCount}</span></div>
        <div class="summary-card"><span class="summary-label">Profit Factor</span>
          <span class="summary-value">${result.stats.profitFactor > 100 ? '∞' : result.stats.profitFactor.toFixed(2)}</span></div>
      </div>

      <div class="two-col">
        <section class="panel">
          <h2 class="panel-title">Equity Curve</h2>
          <canvas id="equity-chart" class="equity-canvas" height="200"></canvas>
        </section>
        <section class="panel">
          <h2 class="panel-title">Monte Carlo (20d, 500 sims)</h2>
          ${monte ? `
            <div class="monte-stats">
              <div><span class="muted">Median</span> $${fmtPrice(monte.median)}</div>
              <div><span class="muted">10th %ile</span> $${fmtPrice(monte.p10)}</div>
              <div><span class="muted">90th %ile</span> $${fmtPrice(monte.p90)}</div>
              <div><span class="muted">Bullish</span> ${monte.bullishPct.toFixed(0)}%</div>
            </div>
            <canvas id="monte-chart" class="equity-canvas" height="200"></canvas>
          ` : '<p class="muted">Insufficient data</p>'}
        </section>
      </div>

      <section class="panel">
        <h2 class="panel-title">Trade Log (${result.trades.length})</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Entry</th><th>Exit</th><th>Entry $</th><th>Exit $</th><th>P&amp;L %</th><th>Days</th><th>Status</th></tr></thead>
          <tbody>
            ${result.trades.length ? result.trades.map((t) => `
              <tr>
                <td>${t.entryIdx}</td><td>${t.exitIdx}</td>
                <td>$${fmtPrice(t.entryPrice)}</td><td>$${fmtPrice(t.exitPrice)}</td>
                <td class="${changeClass(t.plPct)}">${t.plPct.toFixed(2)}%</td>
                <td>${t.days}</td>
                <td>${t.open ? 'Open' : 'Closed'}</td>
              </tr>
            `).join('') : '<tr><td colspan="7" class="empty-row">No trades generated</td></tr>'}
          </tbody>
        </table>
      </section>
    ` : '<p class="muted">Loading quote data…</p>'}
  `;

  if (result.equity?.length) {
    drawEquityCurve(container.querySelector('#equity-chart'), result.equity, 10000);
  }
  if (monte?.paths) {
    drawMonteCarlo(container.querySelector('#monte-chart'), monte);
  }

  container.querySelector('#bt-symbol')?.addEventListener('change', (e) => {
    selectedSymbol = e.target.value;
    renderBacktest(container);
  });
  container.querySelector('#bt-strategy')?.addEventListener('change', (e) => {
    selectedStrategy = e.target.value;
    renderBacktest(container);
  });
}

function drawEquityCurve(canvas, equity, initial) {
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.parentElement?.clientWidth || 400;
  canvas.width = w * dpr;
  canvas.style.width = `${w}px`;
  const h = 200;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const vals = equity.map((e) => e.value);
  const min = Math.min(...vals, initial) * 0.98;
  const max = Math.max(...vals, initial) * 1.02;
  const range = max - min || 1;
  const pad = 10;

  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-panel').trim() || '#1c2128';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(139,148,158,0.3)';
  ctx.beginPath();
  ctx.moveTo(pad, pad + (h - pad * 2) * (1 - (initial - min) / range));
  ctx.lineTo(w - pad, pad + (h - pad * 2) * (1 - (initial - min) / range));
  ctx.stroke();

  ctx.strokeStyle = '#58a6ff';
  ctx.lineWidth = 2;
  ctx.beginPath();
  vals.forEach((v, i) => {
    const x = pad + (i / (vals.length - 1 || 1)) * (w - pad * 2);
    const y = pad + (h - pad * 2) * (1 - (v - min) / range);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

function drawMonteCarlo(canvas, monte) {
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.parentElement?.clientWidth || 400;
  canvas.width = w * dpr;
  canvas.style.width = `${w}px`;
  const h = 200;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const pad = 10;

  const allVals = monte.paths.flat();
  const min = Math.min(...allVals) * 0.98;
  const max = Math.max(...allVals) * 1.02;
  const range = max - min || 1;

  monte.paths.forEach((path, pi) => {
    ctx.strokeStyle = `rgba(88,166,255,${0.15 + (pi % 3) * 0.05})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    path.forEach((v, i) => {
      const x = pad + (i / (path.length - 1)) * (w - pad * 2);
      const y = pad + (h - pad * 2) * (1 - (v - min) / range);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  });

  ctx.strokeStyle = '#3fb950';
  ctx.lineWidth = 2;
  const medPath = monte.paths[0];
  if (medPath) {
    ctx.beginPath();
    medPath.forEach((v, i) => {
      const x = pad + (i / (medPath.length - 1)) * (w - pad * 2);
      const y = pad + (h - pad * 2) * (1 - (monte.median - min) / range);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, monte.median === v ? y : y);
    });
  }
}