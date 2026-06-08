import { INSIDER_TRADES } from '../data/marketData.js';

export function renderInsider(container) {
  container.innerHTML = `
    <div class="page-header"><h1>Insider Trading</h1><p class="page-sub">Recent insider transactions (simulated data).</p></div>
    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr><th>Ticker</th><th>Insider</th><th>Relationship</th><th>Date</th><th>Transaction</th><th>Cost</th><th>#Shares</th><th>Value ($)</th></tr>
        </thead>
        <tbody>
          ${INSIDER_TRADES.map((t) => `
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