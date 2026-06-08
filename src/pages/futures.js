import { FUTURES, FOREX, BONDS } from '../data/marketData.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

function renderTable(title, rows, cols) {
  return `
    <section class="panel">
      <h2 class="panel-title">${title}</h2>
      <table class="data-table compact finviz-tbl">
        <thead><tr>${cols.map((c) => `<th>${c}</th>`).join('')}</tr></thead>
        <tbody>
          ${rows.map((r) => `
            <tr>
              <td class="sym">${r.name || r.pair}</td>
              <td>${typeof r.last === 'number' && r.last > 1000 ? r.last.toLocaleString() : fmtPrice(r.last)}</td>
              <td class="${changeClass(r.change)}">${r.change >= 0 ? '+' : ''}${fmtPrice(r.change)}</td>
              <td class="${changeClass(r.changePct)}">${fmtPct(r.changePct)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </section>
  `;
}

export function renderFutures(container) {
  container.innerHTML = `
    <div class="page-header"><h1>Futures &amp; Forex</h1></div>
    <div class="three-col">
      ${renderTable('Futures', FUTURES, ['Contract', 'Last', 'Change', 'Change %'])}
      ${renderTable('Forex & Crypto', FOREX, ['Pair', 'Last', 'Change', 'Change %'])}
      ${renderTable('Bonds', BONDS, ['Bond', 'Yield', 'Change', 'Change %'])}
    </div>
  `;
}