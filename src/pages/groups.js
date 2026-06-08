import { getQuotes } from '../store.js';
import { SECTORS } from '../data/universe.js';
import { fmtPct, changeClass } from '../utils/format.js';

export function renderGroups(container) {
  const quotes = getQuotes();
  const rows = [...quotes.values()];

  const sectors = SECTORS.map((sector) => {
    const inSector = rows.filter((r) => r.sector === sector);
    const avg = inSector.length ? inSector.reduce((s, x) => s + x.changePct, 0) / inSector.length : 0;
    const bullish = inSector.filter((q) => q.prediction?.direction === 'bullish').length;
    const top = [...inSector].sort((a, b) => b.changePct - a.changePct)[0];
    const bottom = [...inSector].sort((a, b) => a.changePct - b.changePct)[0];
    return { sector, count: inSector.length, avg, bullish, top, bottom, stocks: inSector };
  }).filter((s) => s.count > 0);

  container.innerHTML = `
    <div class="page-header">
      <h1>Groups</h1>
      <p class="page-sub">Sector performance rankings — Finviz Groups view.</p>
    </div>
    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th>Sector</th><th>Stocks</th><th>Avg Change</th><th>Bullish %</th>
            <th>Top</th><th>Worst</th><th></th>
          </tr>
        </thead>
        <tbody>
          ${sectors.sort((a, b) => b.avg - a.avg).map((s) => `
            <tr>
              <td><a href="#/screener?sector=${encodeURIComponent(s.sector)}" class="sym">${s.sector}</a></td>
              <td>${s.count}</td>
              <td class="${changeClass(s.avg)}">${fmtPct(s.avg)}</td>
              <td>${s.count ? Math.round((s.bullish / s.count) * 100) : 0}%</td>
              <td class="sym">${s.top ? `${s.top.symbol} ${fmtPct(s.top.changePct)}` : '—'}</td>
              <td class="sym">${s.bottom ? `${s.bottom.symbol} ${fmtPct(s.bottom.changePct)}` : '—'}</td>
              <td><a href="#/map" class="btn-ghost btn-sm">Map</a></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}