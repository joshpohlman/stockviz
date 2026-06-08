import { getQuotes } from '../store.js';
import { generateShortInterest } from '../data/advancedData.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

let minSqueeze = 0;

export function renderShorts(container) {
  const quotes = getQuotes();
  let shorts = generateShortInterest(quotes);
  if (minSqueeze > 0) shorts = shorts.filter((s) => s.squeezeScore >= minSqueeze);

  container.innerHTML = `
    <div class="page-header">
      <h1>Short Interest Scanner</h1>
      <p class="page-sub">Short % of float, days to cover, and squeeze score ranking.</p>
    </div>

    <div class="filter-chips">
      <button class="preset-chip ${minSqueeze === 0 ? 'active' : ''}" data-min="0">All</button>
      <button class="preset-chip ${minSqueeze === 50 ? 'active' : ''}" data-min="50">Squeeze 50+</button>
      <button class="preset-chip ${minSqueeze === 70 ? 'active' : ''}" data-min="70">Squeeze 70+</button>
      <button class="preset-chip ${minSqueeze === 85 ? 'active' : ''}" data-min="85">High Risk 85+</button>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th>Symbol</th><th>Company</th><th>Sector</th><th>Price</th><th>Change</th>
            <th>Short %</th><th>Days to Cover</th><th>Short Δ</th><th>Squeeze Score</th>
          </tr>
        </thead>
        <tbody>
          ${shorts.slice(0, 60).map((s) => `
            <tr class="clickable ${s.squeezeScore >= 70 ? 'row-highlight' : ''}" data-symbol="${s.symbol}">
              <td class="sym">${s.symbol}</td>
              <td>${s.name}</td>
              <td>${s.sector}</td>
              <td>$${fmtPrice(s.price)}</td>
              <td class="${changeClass(s.changePct)}">${fmtPct(s.changePct)}</td>
              <td class="${s.shortPct > 15 ? 'neg' : ''}">${s.shortPct}%</td>
              <td>${s.daysToCover}</td>
              <td class="${changeClass(s.change)}">${s.change > 0 ? '+' : ''}${s.change}%</td>
              <td>
                <div class="squeeze-cell">
                  <div class="squeeze-bar"><div class="squeeze-fill" style="width:${s.squeezeScore}%"></div></div>
                  <span>${s.squeezeScore}</span>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.querySelectorAll('[data-min]').forEach((btn) => {
    btn.addEventListener('click', () => {
      minSqueeze = Number(btn.dataset.min);
      renderShorts(container);
    });
  });
  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}