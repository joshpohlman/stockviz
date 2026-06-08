import { getQuotes } from '../store.js';
import { computeSectorRotation, rotationPhase } from '../analysis/sectorRotation.js';
import { fmtPct, changeClass } from '../utils/format.js';

export function renderRotation(container) {
  const quotes = getQuotes();
  const sectors = computeSectorRotation(quotes);

  container.innerHTML = `
    <div class="page-header">
      <h1>Sector Rotation</h1>
      <p class="page-sub">Momentum-based sector ranking — identify leaders, improvers, and laggards.</p>
    </div>

    <div class="rotation-wheel panel">
      <div class="rotation-bars">
        ${sectors.map((s) => {
          const phase = rotationPhase(s);
          return `
            <div class="rotation-bar-row">
              <span class="rotation-sector">${s.sector}</span>
              <div class="rotation-bar-track">
                <div class="rotation-bar-fill" style="width:${s.strength}%;background:${phase.color}"></div>
              </div>
              <span class="rotation-mom ${changeClass(s.avgChange)}">${fmtPct(s.avgChange)}</span>
              <span class="rotation-phase" style="color:${phase.color}">${phase.label}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th>Rank</th><th>Sector</th><th>Stocks</th><th>Avg Change</th>
            <th>Adv %</th><th>Bullish %</th><th>Above SMA50</th>
            <th>Avg RSI</th><th>Rel Vol</th><th>Momentum</th>
            <th>Leader</th><th>Laggard</th>
          </tr>
        </thead>
        <tbody>
          ${sectors.map((s, i) => {
            const phase = rotationPhase(s);
            return `
              <tr>
                <td>${i + 1}</td>
                <td><strong>${s.sector}</strong> <span style="color:${phase.color};font-size:0.7rem">${phase.label}</span></td>
                <td>${s.count}</td>
                <td class="${changeClass(s.avgChange)}">${fmtPct(s.avgChange)}</td>
                <td>${s.advancingPct.toFixed(0)}%</td>
                <td>${s.bullishPct.toFixed(0)}%</td>
                <td>${s.aboveSma50Pct.toFixed(0)}%</td>
                <td>${s.avgRsi.toFixed(0)}</td>
                <td>${s.relVol.toFixed(1)}x</td>
                <td class="${changeClass(s.momentum)}">${s.momentum.toFixed(1)}</td>
                <td class="sym clickable" data-symbol="${s.topStock?.symbol || ''}">${s.topStock?.symbol || '—'}</td>
                <td class="sym clickable" data-symbol="${s.laggard?.symbol || ''}">${s.laggard?.symbol || '—'}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    if (!el.dataset.symbol) return;
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}