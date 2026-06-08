import { FUTURES, FOREX, BONDS } from '../data/marketData.js';
import { getSettings } from '../store.js';
import { fetchMarketWidgets } from '../api.js';
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

export async function renderFutures(container) {
  const settings = getSettings();
  const widgets = await fetchMarketWidgets(settings).catch(() => null);
  const futures = widgets?.futures?.length ? widgets.futures : FUTURES;
  const forex = widgets?.forex?.length ? widgets.forex : FOREX;
  const bonds = widgets?.bonds?.length ? widgets.bonds : BONDS;
  const live = !!widgets?.futures?.length;

  container.innerHTML = `
    <div class="page-header">
      <h1>Futures &amp; Forex</h1>
      ${live ? '<p class="page-sub">Live data from Financial Modeling Prep.</p>' : '<p class="page-sub">Simulated data — add an FMP API key in Settings for live futures and forex.</p>'}
    </div>
    <div class="three-col">
      ${renderTable('Futures', futures, ['Contract', 'Last', 'Change', 'Change %'])}
      ${renderTable('Forex & Crypto', forex, ['Pair', 'Last', 'Change', 'Change %'])}
      ${renderTable('Bonds', bonds, ['Bond', 'Yield', 'Change', 'Change %'])}
    </div>
  `;
}