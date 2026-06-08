import { getQuotes } from '../store.js';
import { generateOptionsFlow } from '../data/advancedData.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

let filter = 'all';

export function renderOptions(container) {
  const quotes = getQuotes();
  let flow = generateOptionsFlow(quotes, 60);
  if (filter === 'unusual') flow = flow.filter((o) => o.unusual);
  else if (filter === 'bullish') flow = flow.filter((o) => o.sentiment === 'bullish');
  else if (filter === 'bearish') flow = flow.filter((o) => o.sentiment === 'bearish');

  const totalNotional = flow.reduce((s, o) => s + o.notional, 0);
  const bullishCount = flow.filter((o) => o.sentiment === 'bullish').length;

  container.innerHTML = `
    <div class="page-header">
      <h1>Options Flow</h1>
      <p class="page-sub">Unusual options activity — sweeps, blocks, and high-notional trades.</p>
    </div>

    <div class="options-summary">
      <div class="summary-card"><span class="summary-label">Total Notional</span>
        <span class="summary-value">$${(totalNotional / 1e6).toFixed(1)}M</span></div>
      <div class="summary-card"><span class="summary-label">Trades</span>
        <span class="summary-value">${flow.length}</span></div>
      <div class="summary-card"><span class="summary-label">Bullish %</span>
        <span class="summary-value pos">${flow.length ? ((bullishCount / flow.length) * 100).toFixed(0) : 0}%</span></div>
    </div>

    <div class="filter-chips">
      ${['all', 'unusual', 'bullish', 'bearish'].map((f) => `
        <button class="preset-chip ${filter === f ? 'active' : ''}" data-filter="${f}">${f.charAt(0).toUpperCase() + f.slice(1)}</button>
      `).join('')}
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th>Symbol</th><th>Type</th><th>Strike</th><th>Expiry</th>
            <th>Premium</th><th>Contracts</th><th>Notional</th>
            <th>Rel Vol</th><th>Price</th><th>Change</th><th>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          ${flow.map((o) => `
            <tr class="clickable ${o.unusual ? 'row-highlight' : ''}" data-symbol="${o.symbol}">
              <td class="sym">${o.symbol}</td>
              <td><span class="flow-type ${o.type.includes('Call') ? 'pos' : o.type.includes('Put') ? 'neg' : ''}">${o.type}</span></td>
              <td>$${fmtPrice(o.strike)}</td>
              <td>${o.expiry}</td>
              <td>$${o.premium.toFixed(2)}</td>
              <td>${o.contracts.toLocaleString()}</td>
              <td>$${(o.notional / 1000).toFixed(0)}K</td>
              <td>${o.relVolume.toFixed(1)}x</td>
              <td>$${fmtPrice(o.price)}</td>
              <td class="${changeClass(o.changePct)}">${fmtPct(o.changePct)}</td>
              <td class="${o.sentiment === 'bullish' ? 'pos' : o.sentiment === 'bearish' ? 'neg' : ''}">${o.sentiment}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => { filter = btn.dataset.filter; renderOptions(container); });
  });
  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}