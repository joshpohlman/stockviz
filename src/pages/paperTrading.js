import { getPaperTrades, getQuotes, addPaperTrade, closePaperTrade, removePaperTrade } from '../store.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

export function renderPaperTrading(container) {
  const trades = getPaperTrades();
  const quotes = getQuotes();

  const enriched = trades.map((t) => {
    const q = quotes.get(t.symbol);
    const current = q?.price ?? t.entryPrice;
    const pnl = t.side === 'long'
      ? (current - t.entryPrice) * t.shares
      : (t.entryPrice - current) * t.shares;
    const pnlPct = ((current - t.entryPrice) / t.entryPrice) * 100 * (t.side === 'long' ? 1 : -1);
    return { ...t, current, pnl, pnlPct, open: !t.closedAt };
  });

  const open = enriched.filter((t) => t.open);
  const closed = enriched.filter((t) => !t.open);
  const totalPnl = enriched.reduce((s, t) => s + (t.closedAt ? t.realizedPnl ?? t.pnl : t.pnl), 0);

  container.innerHTML = `
    <div class="page-header">
      <h1>Paper Trading</h1>
      <p class="page-sub">Simulated positions against live quotes — no real money.</p>
    </div>

    <div class="paper-summary">
      <div class="summary-card"><span class="summary-label">Open Positions</span><span class="summary-value">${open.length}</span></div>
      <div class="summary-card"><span class="summary-label">Total P&amp;L</span>
        <span class="summary-value ${changeClass(totalPnl)}">$${totalPnl.toFixed(2)}</span></div>
    </div>

    <form class="panel paper-form" id="paper-form">
      <div class="filter-group"><label>Symbol</label><input name="symbol" placeholder="AAPL" required /></div>
      <div class="filter-group"><label>Side</label><select name="side"><option value="long">Long</option><option value="short">Short</option></select></div>
      <div class="filter-group"><label>Shares</label><input type="number" name="shares" min="1" value="10" required /></div>
      <button type="submit" class="btn-primary">Open Position</button>
    </form>

    <section class="panel">
      <h2 class="panel-title">Open Positions</h2>
      <table class="data-table finviz-tbl">
        <thead><tr><th>Symbol</th><th>Side</th><th>Shares</th><th>Entry</th><th>Current</th><th>P&amp;L</th><th></th></tr></thead>
        <tbody>
          ${open.length ? open.map((t) => `
            <tr>
              <td class="sym">${t.symbol}</td>
              <td class="${t.side === 'long' ? 'pos' : 'neg'}">${t.side}</td>
              <td>${t.shares}</td>
              <td>$${fmtPrice(t.entryPrice)}</td>
              <td>$${fmtPrice(t.current)}</td>
              <td class="${changeClass(t.pnl)}">$${t.pnl.toFixed(2)} (${fmtPct(t.pnlPct)})</td>
              <td><button class="btn-ghost btn-sm" data-close="${t.id}">Close</button></td>
            </tr>
          `).join('') : '<tr><td colspan="7" class="empty-row">No open positions</td></tr>'}
        </tbody>
      </table>
    </section>

    ${closed.length ? `
      <section class="panel">
        <h2 class="panel-title">Closed Trades</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Symbol</th><th>Side</th><th>P&amp;L</th><th>Closed</th><th></th></tr></thead>
          <tbody>
            ${closed.map((t) => `
              <tr>
                <td class="sym">${t.symbol}</td>
                <td>${t.side}</td>
                <td class="${changeClass(t.realizedPnl)}">$${(t.realizedPnl ?? 0).toFixed(2)}</td>
                <td>${new Date(t.closedAt).toLocaleDateString()}</td>
                <td><button class="btn-ghost btn-sm" data-rm="${t.id}">Remove</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>
    ` : ''}
  `;

  container.querySelector('#paper-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const symbol = fd.get('symbol').toString().toUpperCase();
    const q = quotes.get(symbol);
    addPaperTrade({
      symbol,
      side: fd.get('side'),
      shares: Number(fd.get('shares')),
      entryPrice: q?.price ?? 100,
    });
  });

  container.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const trade = open.find((t) => t.id === btn.dataset.close);
      if (trade) closePaperTrade(trade.id, trade.current);
    });
  });

  container.querySelectorAll('[data-rm]').forEach((btn) => {
    btn.addEventListener('click', () => removePaperTrade(btn.dataset.rm));
  });
}