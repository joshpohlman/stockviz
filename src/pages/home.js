import { getQuotes, getSettings } from '../store.js';
import { fmtPrice, fmtPct, fmtVolume, changeClass } from '../utils/format.js';
import { SECTORS } from '../data/universe.js';

export function renderHome(container) {
  const quotes = getQuotes();
  const settings = getSettings();
  const rows = [...quotes.values()].filter((q) => q.changePct != null);

  const gainers = [...rows].sort((a, b) => b.changePct - a.changePct).slice(0, 10);
  const losers = [...rows].sort((a, b) => a.changePct - b.changePct).slice(0, 10);
  const active = [...rows].sort((a, b) => (b.volume || 0) - (a.volume || 0)).slice(0, 10);

  const sectorStats = SECTORS.map((sector) => {
    const inSector = rows.filter((r) => r.sector === sector);
    if (!inSector.length) return null;
    const avg = inSector.reduce((s, x) => s + x.changePct, 0) / inSector.length;
    return { sector, avg, count: inSector.length };
  }).filter(Boolean);

  const watchlist = settings.watchlist
    .map((sym) => quotes.get(sym))
    .filter(Boolean);

  container.innerHTML = `
    <div class="page-header">
      <h1>Market Overview</h1>
      <p class="page-sub">Real-time snapshot of your stock universe. Click any ticker for details.</p>
    </div>

    <section class="panel">
      <h2 class="panel-title">Watchlist</h2>
      <div class="card-grid">
        ${watchlist.length ? watchlist.map(renderWatchCard).join('') : '<p class="muted">Add symbols in Settings → Watchlist</p>'}
      </div>
    </section>

    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title pos-title">Top Gainers</h2>
        ${renderMoverTable(gainers)}
      </section>
      <section class="panel">
        <h2 class="panel-title neg-title">Top Losers</h2>
        ${renderMoverTable(losers)}
      </section>
    </div>

    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">Most Active</h2>
        ${renderActiveTable(active)}
      </section>
      <section class="panel">
        <h2 class="panel-title">Sector Performance</h2>
        <div class="sector-bars">
          ${sectorStats.map(renderSectorBar).join('')}
        </div>
      </section>
    </div>
  `;

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}

function renderWatchCard(q) {
  const cls = changeClass(q.changePct);
  return `
    <button class="watch-card" data-symbol="${q.symbol}">
      <span class="watch-sym">${q.symbol}</span>
      <span class="watch-price">$${fmtPrice(q.price)}</span>
      <span class="watch-chg ${cls}">${fmtPct(q.changePct)}</span>
    </button>
  `;
}

function renderMoverTable(rows) {
  return `
    <table class="data-table compact">
      <thead><tr><th>Ticker</th><th>Price</th><th>Change</th><th>%</th></tr></thead>
      <tbody>
        ${rows.map((q) => `
          <tr class="clickable" data-symbol="${q.symbol}">
            <td class="sym">${q.symbol}</td>
            <td>$${fmtPrice(q.price)}</td>
            <td class="${changeClass(q.change)}">${q.change >= 0 ? '+' : ''}${q.change?.toFixed(2) ?? '—'}</td>
            <td class="${changeClass(q.changePct)}">${fmtPct(q.changePct)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderActiveTable(rows) {
  return `
    <table class="data-table compact">
      <thead><tr><th>Ticker</th><th>Volume</th><th>Price</th><th>%</th></tr></thead>
      <tbody>
        ${rows.map((q) => `
          <tr class="clickable" data-symbol="${q.symbol}">
            <td class="sym">${q.symbol}</td>
            <td>${fmtVolume(q.volume)}</td>
            <td>$${fmtPrice(q.price)}</td>
            <td class="${changeClass(q.changePct)}">${fmtPct(q.changePct)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderSectorBar({ sector, avg, count }) {
  const cls = changeClass(avg);
  const width = Math.min(100, Math.abs(avg) * 15 + 10);
  return `
    <div class="sector-bar-row">
      <span class="sector-bar-label">${sector}</span>
      <div class="sector-bar-track">
        <div class="sector-bar-fill ${cls}" style="width:${width}%"></div>
      </div>
      <span class="sector-bar-val ${cls}">${fmtPct(avg)}</span>
      <span class="sector-bar-count">${count}</span>
    </div>
  `;
}