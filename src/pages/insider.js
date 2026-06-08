import { INSIDER_TRADES } from '../data/marketData.js';
import { getSettings } from '../store.js';
import { fetchMarketWidgets } from '../api.js';

export async function renderInsider(container) {
  const settings = getSettings();
  const widgets = await fetchMarketWidgets(settings).catch(() => null);
  const trades = widgets?.insider?.length ? widgets.insider : INSIDER_TRADES;
  const live = !!widgets?.insider?.length;

  container.innerHTML = `
    <div class="page-header">
      <h1>Insider Trading</h1>
      <p class="page-sub">${live ? 'Live insider transactions from Financial Modeling Prep.' : 'Simulated data — add an FMP API key in Settings for live insider trades.'}</p>
    </div>
    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr><th>Ticker</th><th>Insider</th><th>Relationship</th><th>Date</th><th>Transaction</th><th>Cost</th><th>#Shares</th><th>Value ($)</th></tr>
        </thead>
        <tbody>
          ${trades.map((t) => `
            <tr class="clickable" data-symbol="${t.symbol}">
              <td class="sym">${t.symbol}</td>
              <td>${t.insider}</td>
              <td>${t.relation}</td>
              <td>${t.date}</td>
              <td class="${t.type === 'Buy' ? 'pos' : 'neg'}">${t.type}</td>
              <td>$${t.cost}</td>
              <td>${t.shares.toLocaleString()}</td>
              <td>$${t.value.toLocaleString()}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}