import { getSettings, getQuotes } from '../store.js';
import { fetchDividends } from '../api/liveAdvanced.js';
import { fmtPrice } from '../utils/format.js';

export async function renderDividends(container) {
  const settings = getSettings();
  const quotes = getQuotes();
  const dividends = await fetchDividends(settings);
  const live = dividends.length > 0;

  const enriched = dividends.map((d) => {
    const q = quotes.get(d.symbol);
    return { ...d, name: q?.name, price: q?.price };
  });

  container.innerHTML = `
    <div class="page-header">
      <h1>Dividend Calendar</h1>
      <p class="page-sub">${live ? 'Upcoming ex-dividend dates from FMP.' : 'Add an FMP API key in Settings for live dividend calendar.'}</p>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr><th>Symbol</th><th>Company</th><th>Ex-Date</th><th>Payment</th><th>Amount</th><th>Yield</th><th>Price</th></tr>
        </thead>
        <tbody>
          ${enriched.length ? enriched.map((d) => `
            <tr class="clickable" data-symbol="${d.symbol}">
              <td class="sym">${d.symbol}</td>
              <td>${d.name || '—'}</td>
              <td>${d.exDate}</td>
              <td>${d.date}</td>
              <td>$${fmtPrice(d.amount)}</td>
              <td>${d.yield != null ? `${d.yield}%` : '—'}</td>
              <td>${d.price ? `$${fmtPrice(d.price)}` : '—'}</td>
            </tr>
          `).join('') : '<tr><td colspan="7" class="empty-row">No dividend data — check FMP key or try again later</td></tr>'}
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