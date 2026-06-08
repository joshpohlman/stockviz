import { getQuotes, getSettings } from '../store.js';
import { fetchAnalystRatings } from '../api/liveAdvanced.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

let sortKey = 'upside';
let sortDir = 'desc';

export async function renderAnalyst(container) {
  const quotes = getQuotes();
  const settings = getSettings();
  let ratings = await fetchAnalystRatings(settings, quotes);
  const live = ratings.some((r) => r.live);

  ratings.sort((a, b) => {
    const av = a[sortKey] ?? 0;
    const bv = b[sortKey] ?? 0;
    return sortDir === 'desc' ? bv - av : av - bv;
  });

  const upgrades = ratings.filter((r) => r.revisions > 0).length;
  const downgrades = ratings.filter((r) => r.revisions < 0).length;

  container.innerHTML = `
    <div class="page-header">
      <h1>Analyst Ratings</h1>
      <p class="page-sub">${live ? 'Live consensus and price targets from FMP.' : 'Simulated ratings — add FMP key for live analyst data.'}</p>
    </div>

    <div class="analyst-summary">
      <div class="summary-card"><span class="summary-label">Upgrades</span><span class="summary-value pos">${upgrades}</span></div>
      <div class="summary-card"><span class="summary-label">Downgrades</span><span class="summary-value neg">${downgrades}</span></div>
      <div class="summary-card"><span class="summary-label">Avg Upside</span>
        <span class="summary-value">${ratings.length ? fmtPct(ratings.reduce((s, r) => s + r.upside, 0) / ratings.length) : '—'}</span></div>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th data-sort="symbol">Ticker</th><th>Company</th><th data-sort="price">Price</th>
            <th data-sort="consensus">Consensus</th><th data-sort="target">Target</th>
            <th data-sort="upside">Upside</th><th data-sort="numAnalysts">Analysts</th>
            <th>Buy/Hold/Sell</th><th data-sort="revisions">Revisions</th>
          </tr>
        </thead>
        <tbody>
          ${ratings.map((r) => `
            <tr class="clickable" data-symbol="${r.symbol}">
              <td class="sym">${r.symbol}</td>
              <td>${r.name || '—'}</td>
              <td>$${fmtPrice(r.price)}</td>
              <td>${r.consensus}</td>
              <td>$${fmtPrice(r.target)}</td>
              <td class="${changeClass(r.upside)}">${fmtPct(r.upside)}</td>
              <td>${r.numAnalysts}</td>
              <td class="analyst-bars">
                <span class="pos">${r.strongBuy + r.buy}</span> /
                <span>${r.hold}</span> /
                <span class="neg">${r.sell + r.strongSell}</span>
              </td>
              <td class="${r.revisions > 0 ? 'pos' : r.revisions < 0 ? 'neg' : ''}">${r.revisions > 0 ? '+' : ''}${r.revisions}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.querySelectorAll('[data-sort]').forEach((th) => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      if (sortKey === key) sortDir = sortDir === 'desc' ? 'asc' : 'desc';
      else { sortKey = key; sortDir = 'desc'; }
      renderAnalyst(container);
    });
  });

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}