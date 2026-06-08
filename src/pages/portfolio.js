import { getPortfolio, getQuotes, addPortfolioHolding, removePortfolioHolding } from '../store.js';
import { UNIVERSE } from '../data/universe.js';
import { fmtPrice, fmtPct, fmtMarketCap, changeClass } from '../utils/format.js';
import { toast } from '../components/toast.js';

export function renderPortfolio(container) {
  const holdings = getPortfolio();
  const quotes = getQuotes();

  let totalValue = 0;
  let totalCost = 0;
  const rows = holdings.map((h) => {
    const q = quotes.get(h.symbol);
    const price = q?.price ?? 0;
    const value = price * h.shares;
    const cost = h.costBasis * h.shares;
    const pl = value - cost;
    const plPct = cost ? (pl / cost) * 100 : 0;
    totalValue += value;
    totalCost += cost;
    return { ...h, q, price, value, cost, pl, plPct };
  });

  const totalPl = totalValue - totalCost;
  const totalPlPct = totalCost ? (totalPl / totalCost) * 100 : 0;

  container.innerHTML = `
    <div class="page-header">
      <h1>Portfolio</h1>
      <p class="page-sub">Track holdings, cost basis, and live P&amp;L.</p>
    </div>

    <div class="portfolio-summary">
      <div class="summary-card">
        <span class="summary-label">Total Value</span>
        <span class="summary-value">$${fmtPrice(totalValue)}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Total Cost</span>
        <span class="summary-value">$${fmtPrice(totalCost)}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">P&amp;L</span>
        <span class="summary-value ${changeClass(totalPl)}">${totalPl >= 0 ? '+' : '-'}$${fmtPrice(Math.abs(totalPl))} (${fmtPct(totalPlPct)})</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Holdings</span>
        <span class="summary-value">${holdings.length}</span>
      </div>
    </div>

    <form class="portfolio-form panel" id="add-holding">
      <h2 class="panel-title">Add Holding</h2>
      <div class="form-row">
        <div class="filter-group">
          <label>Symbol</label>
          <input list="symbol-list" name="symbol" placeholder="AAPL" required />
          <datalist id="symbol-list">${UNIVERSE.map((s) => `<option value="${s.symbol}">`).join('')}</datalist>
        </div>
        <div class="filter-group">
          <label>Shares</label>
          <input type="number" name="shares" min="0.01" step="0.01" placeholder="10" required />
        </div>
        <div class="filter-group">
          <label>Cost / Share</label>
          <input type="number" name="costBasis" min="0.01" step="0.01" placeholder="150.00" required />
        </div>
        <button type="submit" class="btn-primary">Add</button>
      </div>
    </form>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Symbol</th><th>Shares</th><th>Avg Cost</th><th>Price</th>
            <th>Value</th><th>P&amp;L</th><th>P&amp;L %</th><th></th>
          </tr>
        </thead>
        <tbody>
          ${rows.length ? rows.map(renderRow).join('') : '<tr><td colspan="8" class="empty-row">No holdings yet — add your first position above.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;

  container.querySelector('#add-holding')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const symbol = fd.get('symbol').toString().trim().toUpperCase();
    if (!UNIVERSE.find((s) => s.symbol === symbol)) {
      toast('Symbol not in universe', 'error');
      return;
    }
    addPortfolioHolding({
      symbol,
      shares: fd.get('shares'),
      costBasis: fd.get('costBasis'),
    });
    toast(`Added ${symbol}`, 'success');
    e.target.reset();
  });

  container.querySelectorAll('[data-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      removePortfolioHolding(btn.dataset.remove);
      toast(`Removed ${btn.dataset.remove}`, 'info');
    });
  });

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}

function renderRow(h) {
  return `
    <tr data-live-symbol="${h.symbol}">
      <td class="sym clickable" data-symbol="${h.symbol}">${h.symbol}</td>
      <td>${h.shares}</td>
      <td>$${fmtPrice(h.costBasis)}</td>
      <td data-live="price">$${fmtPrice(h.price)}</td>
      <td>$${fmtPrice(h.value)}</td>
      <td class="${changeClass(h.pl)}">${h.pl >= 0 ? '+' : ''}$${fmtPrice(Math.abs(h.pl))}</td>
      <td class="${changeClass(h.plPct)}">${fmtPct(h.plPct)}</td>
      <td><button class="btn-ghost btn-sm" data-remove="${h.symbol}">Remove</button></td>
    </tr>
  `;
}