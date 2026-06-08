import { getQuotes } from '../store.js';
import { SIGNAL_GROUPS } from '../data/marketData.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

export function renderSignals(container) {
  const quotes = getQuotes();
  const rows = [...quotes.values()];

  container.innerHTML = `
    <div class="page-header">
      <h1>Technical Signals</h1>
      <p class="page-sub">Finviz-style TA signals — click any ticker for prediction details.</p>
    </div>
    <div class="signals-grid">
      ${SIGNAL_GROUPS.map((sg) => {
        const matches = rows.filter((q) => q.signals?.some((s) => s.id === sg.id))
          .sort((a, b) => Math.abs(b.changePct) - Math.abs(a.changePct))
          .slice(0, 8);
        return `
          <section class="panel signal-panel">
            <h2 class="panel-title signal-title">
              <a href="#/screener?signal=${sg.id}" class="signal-link">${sg.label}</a>
              <span class="signal-count">${matches.length}</span>
            </h2>
            <table class="data-table compact finviz-tbl">
              <thead><tr><th>Ticker</th><th>Last</th><th>Change</th><th>Signal</th></tr></thead>
              <tbody>
                ${matches.length ? matches.map((q) => `
                  <tr class="clickable" data-symbol="${q.symbol}">
                    <td class="sym">${q.symbol}</td>
                    <td>$${fmtPrice(q.price)}</td>
                    <td class="${changeClass(q.changePct)}">${fmtPct(q.changePct)}</td>
                    <td class="signal-tag">${sg.label}</td>
                  </tr>
                `).join('') : '<tr><td colspan="4" class="empty-row">None detected</td></tr>'}
              </tbody>
            </table>
          </section>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}