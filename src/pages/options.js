import { getQuotes, getSettings } from '../store.js';
import { fetchOptionsFlowData } from '../api/liveAdvanced.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

let filter = 'all';

export async function renderOptions(container) {
  const quotes = getQuotes();
  const settings = getSettings();
  let flow = await fetchOptionsFlowData(settings, quotes, 60);
  const live = flow.some((o) => o.live);

  if (filter === 'unusual') flow = flow.filter((o) => o.unusual);
  else if (filter === 'bullish') flow = flow.filter((o) => o.sentiment === 'bullish');
  else if (filter === 'bearish') flow = flow.filter((o) => o.sentiment === 'bearish');

  const totalNotional = flow.reduce((s, o) => s + o.notional, 0);
  const bullishCount = flow.filter((o) => o.sentiment === 'bullish').length;

  container.innerHTML = `
    <div class="page-header">
      <h1>Options Flow</h1>
      <p class="page-sub">${live ? 'Live options chain highlights from FMP.' : 'Simulated flow — add FMP key for live options data.'}</p>
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
          <tr><th>Ticker</th><th>Type</th><th>Strike</th><th>Expiry</th><th>Premium</th><th>Contracts</th><th>Notional</th><th>Sentiment</th></tr>
        </thead>
        <tbody>
          ${flow.map((o) => `
            <tr class="clickable" data-symbol="${o.symbol}">
              <td class="sym">${o.symbol}</td>
              <td>${o.type}</td>
              <td>$${fmtPrice(o.strike)}</td>
              <td>${o.expiry}</td>
              <td>$${fmtPrice(o.premium)}</td>
              <td>${o.contracts.toLocaleString()}</td>
              <td>$${(o.notional / 1e3).toFixed(0)}K</td>
              <td class="${o.sentiment === 'bullish' ? 'pos' : o.sentiment === 'bearish' ? 'neg' : ''}">${o.sentiment}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      filter = btn.dataset.filter;
      renderOptions(container);
    });
  });

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}