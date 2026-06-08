import { getQuotes, getSettings } from '../store.js';
import { fetchShortInterestData } from '../api/liveAdvanced.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

let minSqueeze = 0;

export async function renderShorts(container) {
  const quotes = getQuotes();
  const settings = getSettings();
  let shorts = await fetchShortInterestData(settings, quotes);
  const live = shorts.some((s) => s.live);
  if (minSqueeze > 0) shorts = shorts.filter((s) => s.squeezeScore >= minSqueeze);

  container.innerHTML = `
    <div class="page-header">
      <h1>Short Interest Scanner</h1>
      <p class="page-sub">${live ? 'Live short interest from FMP.' : 'Simulated short data — add FMP key for live short interest.'}</p>
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
          <tr><th>Ticker</th><th>Price</th><th>Change</th><th>Short %</th><th>Days Cover</th><th>Short Chg</th><th>Squeeze</th><th>Sector</th></tr>
        </thead>
        <tbody>
          ${shorts.map((s) => `
            <tr class="clickable" data-symbol="${s.symbol}">
              <td class="sym">${s.symbol}</td>
              <td>$${fmtPrice(s.price)}</td>
              <td class="${changeClass(s.changePct)}">${fmtPct(s.changePct)}</td>
              <td>${s.shortPct.toFixed(2)}%</td>
              <td>${s.daysToCover.toFixed(1)}</td>
              <td class="${changeClass(s.change)}">${s.change >= 0 ? '+' : ''}${s.change.toFixed(2)}%</td>
              <td><span class="squeeze-badge ${s.squeezeScore >= 70 ? 'hot' : ''}">${s.squeezeScore}</span></td>
              <td>${s.sector || '—'}</td>
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