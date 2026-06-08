import { getQuotes } from '../store.js';
import { PATTERN_GROUPS } from '../data/marketData.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

export function renderPatterns(container) {
  const quotes = getQuotes();
  const rows = [...quotes.values()];

  const allPatterns = rows.flatMap((q) =>
    (q.patterns || []).map((p) => ({ ...q, pattern: p })),
  ).sort((a, b) => b.pattern.confidence - a.pattern.confidence);

  container.innerHTML = `
    <div class="page-header">
      <h1>Pattern Scanner</h1>
      <p class="page-sub">Chart pattern detection with confidence scores and directional bias.</p>
    </div>

    <div class="pattern-summary panel">
      <span><strong>${allPatterns.length}</strong> patterns detected across ${rows.filter((q) => q.patterns?.length).length} stocks</span>
      <div class="preset-bar">
        ${PATTERN_GROUPS.slice(0, 8).map((pg) => {
          const n = rows.filter((q) => q.patterns?.some((p) => p.id === pg.id)).length;
          return `<a href="#/screener?pattern=${pg.id}" class="preset-chip">${pg.label} (${n})</a>`;
        }).join('')}
      </div>
    </div>

    <div class="table-wrap">
      <table class="data-table finviz-tbl">
        <thead>
          <tr>
            <th>Ticker</th><th>Company</th><th>Price</th><th>Change %</th>
            <th>Pattern</th><th>Bias</th><th>Confidence</th>
            <th>Prediction</th><th>Target</th>
          </tr>
        </thead>
        <tbody>
          ${allPatterns.slice(0, 80).map(({ symbol, name, price, changePct, pattern, prediction }) => `
            <tr class="clickable" data-symbol="${symbol}">
              <td class="sym">${symbol}</td>
              <td class="name-cell">${name || '—'}</td>
              <td>$${fmtPrice(price)}</td>
              <td class="${changeClass(changePct)}">${fmtPct(changePct)}</td>
              <td class="pattern-label">${pattern.label}</td>
              <td class="${pattern.bias === 'bullish' ? 'pos' : 'neg'}">${pattern.bias}</td>
              <td>
                <div class="conf-bar"><div class="conf-fill" style="width:${pattern.confidence}%"></div></div>
                ${pattern.confidence}%
              </td>
              <td class="${changeClass(prediction?.score)}">${prediction?.direction || '—'} (${prediction?.confidence || 0}%)</td>
              <td>$${fmtPrice(prediction?.priceTarget)}</td>
            </tr>
          `).join('') || '<tr><td colspan="9" class="empty-row">Scanning… refresh to detect patterns.</td></tr>'}
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