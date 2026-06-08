import { getQuotes } from '../store.js';
import { generateAnalystRatings } from '../data/advancedData.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

let sortKey = 'upside';
let sortDir = 'desc';

export function renderAnalyst(container) {
  const quotes = getQuotes();
  let ratings = generateAnalystRatings(quotes);

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
      <p class="page-sub">Consensus ratings, price targets, and revision trends.</p>
    </div>

    <div class="analyst-summary">
      <div class="summary-card"><span class="summary-label">Upgrades</span><span class="summary-value pos">${upgrades}</span></div>
      <div class="summary-card"><span class="summary-label">Downgrades</span><span class="summary-value neg">${downgrades}</span></div>
      <div class="summary-card"><span class="summary-label">Avg Upside</span>
        <span class="summary-value">${(ratings.reduce((s, r) => s + r.upside, 0) / ratings.length).toFixed(1)}%</span></div>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl" id="analyst-table">
        <thead>
          <tr>
            <th data-sort="symbol">Symbol</th>
            <th>Company</th>
            <th data-sort="price">Price</th>
            <th data-sort="consensus">Consensus</th>
            <th data-sort="target">Target</th>
            <th data-sort="upside">Upside %</th>
            <th data-sort="numAnalysts">Analysts</th>
            <th>Breakdown</th>
            <th data-sort="revisions">Revisions</th>
          </tr>
        </thead>
        <tbody>
          ${ratings.slice(0, 80).map((r) => `
            <tr class="clickable" data-symbol="${r.symbol}">
              <td class="sym">${r.symbol}</td>
              <td>${r.name}</td>
              <td>$${fmtPrice(r.price)}</td>
              <td><span class="rating-badge ${ratingClass(r.consensus)}">${r.consensus}</span></td>
              <td>$${fmtPrice(r.target)}</td>
              <td class="${changeClass(r.upside)}">${fmtPct(r.upside)}</td>
              <td>${r.numAnalysts}</td>
              <td class="rating-breakdown">
                <span class="pos" title="Strong Buy">${r.strongBuy}</span>/
                <span class="pos" title="Buy">${r.buy}</span>/
                <span title="Hold">${r.hold}</span>/
                <span class="neg" title="Sell">${r.sell}</span>
              </td>
              <td class="${r.revisions > 0 ? 'pos' : r.revisions < 0 ? 'neg' : ''}">${r.revisions > 0 ? '+' : ''}${r.revisions}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.querySelectorAll('th[data-sort]').forEach((th) => {
    th.style.cursor = 'pointer';
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

function ratingClass(consensus) {
  if (consensus.includes('Strong Buy') || consensus === 'Buy') return 'bullish';
  if (consensus.includes('Sell')) return 'bearish';
  return 'neutral';
}