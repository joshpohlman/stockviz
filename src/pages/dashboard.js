import { getQuotes, getSettings, getFavorites, getPortfolio } from '../store.js';
import { getMarketBreadth } from '../analysis/enrich.js';
import { computeSectorRotation, rotationPhase } from '../analysis/sectorRotation.js';
import { generateOptionsFlow } from '../data/advancedData.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

export function renderDashboard(container) {
  const quotes = getQuotes();
  const settings = getSettings();
  const favorites = getFavorites();
  const holdings = getPortfolio();
  const rows = [...quotes.values()];
  const breadth = getMarketBreadth(quotes);
  const rotation = computeSectorRotation(quotes).slice(0, 5);
  const options = generateOptionsFlow(quotes, 6);
  const bullish = rows.filter((q) => q.prediction?.direction === 'bullish')
    .sort((a, b) => (b.prediction?.confidence ?? 0) - (a.prediction?.confidence ?? 0)).slice(0, 6);

  container.innerHTML = `
    <div class="page-header dash-header">
      <div>
        <h1>Elite Dashboard</h1>
        <p class="page-sub">Real-time market command center — breadth, rotation, predictions, flow.</p>
      </div>
      <div class="dash-quick-links">
        <a href="#/internals" class="btn-secondary btn-sm">Internals</a>
        <a href="#/correlation" class="btn-secondary btn-sm">Correlation</a>
        <a href="#/backtest" class="btn-secondary btn-sm">Backtest</a>
        <a href="#/rotation" class="btn-secondary btn-sm">Rotation</a>
      </div>
    </div>

    <div class="dash-grid">
      <section class="panel dash-widget dash-breadth">
        <h2 class="widget-title">Market Breadth</h2>
        <div class="breadth-gauges">
          <div class="gauge-item">
            <div class="gauge-bar"><div class="gauge-fill pos" style="width:${breadth.advPct}%"></div></div>
            <span>Advancing ${breadth.advPct.toFixed(0)}%</span>
          </div>
          <div class="gauge-item">
            <div class="gauge-bar"><div class="gauge-fill" style="width:${breadth.aboveSma50Pct}%;background:var(--accent)"></div></div>
            <span>Above SMA50 ${breadth.aboveSma50Pct.toFixed(0)}%</span>
          </div>
          <div class="gauge-item">
            <div class="gauge-bar"><div class="gauge-fill" style="width:${breadth.aboveSma200Pct}%;background:var(--yellow)"></div></div>
            <span>Above SMA200 ${breadth.aboveSma200Pct.toFixed(0)}%</span>
          </div>
        </div>
        <div class="dash-stats-row">
          <span class="pos">${breadth.newHigh} new highs</span>
          <span class="neg">${breadth.newLow} new lows</span>
        </div>
      </section>

      <section class="panel dash-widget">
        <h2 class="widget-title">Sector Rotation</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Sector</th><th>Mom</th><th>Phase</th><th>Leader</th></tr></thead>
          <tbody>
            ${rotation.map((s) => {
              const phase = rotationPhase(s);
              return `<tr>
                <td><a href="#/rotation">${s.sector}</a></td>
                <td class="${changeClass(s.avgChange)}">${fmtPct(s.avgChange)}</td>
                <td style="color:${phase.color}">${phase.label}</td>
                <td class="sym">${s.topStock?.symbol || '—'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </section>

      <section class="panel dash-widget">
        <h2 class="widget-title">Top Predictions</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Ticker</th><th>Conf</th><th>Target</th><th>Change</th></tr></thead>
          <tbody>
            ${bullish.map((q) => `
              <tr class="clickable" data-symbol="${q.symbol}">
                <td class="sym">${q.symbol}</td>
                <td>${q.prediction.confidence}%</td>
                <td>$${fmtPrice(q.prediction.priceTarget)}</td>
                <td class="${changeClass(q.changePct)}">${fmtPct(q.changePct)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>

      <section class="panel dash-widget">
        <h2 class="widget-title">Watchlist</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Ticker</th><th>Price</th><th>Change</th><th>RSI</th></tr></thead>
          <tbody>
            ${settings.watchlist.slice(0, 8).map((sym) => {
              const q = quotes.get(sym);
              if (!q) return '';
              return `<tr class="clickable" data-symbol="${sym}">
                <td class="sym">${sym}</td>
                <td>$${fmtPrice(q.price)}</td>
                <td class="${changeClass(q.changePct)}">${fmtPct(q.changePct)}</td>
                <td>${q.ta?.rsi?.toFixed(0) ?? '—'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </section>

      <section class="panel dash-widget">
        <h2 class="widget-title">Unusual Options Flow</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Ticker</th><th>Type</th><th>Notional</th><th>Sentiment</th></tr></thead>
          <tbody>
            ${options.map((o) => `
              <tr class="clickable" data-symbol="${o.symbol}">
                <td class="sym">${o.symbol}</td>
                <td>${o.type}</td>
                <td>$${(o.notional / 1000).toFixed(0)}K</td>
                <td class="${o.sentiment === 'bullish' ? 'pos' : o.sentiment === 'bearish' ? 'neg' : ''}">${o.sentiment}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <a href="#/options" class="widget-link">View all flow →</a>
      </section>

      <section class="panel dash-widget">
        <h2 class="widget-title">Portfolio Snapshot</h2>
        ${holdings.length ? (() => {
          let val = 0;
          let cost = 0;
          holdings.forEach((h) => {
            const q = quotes.get(h.symbol);
            val += (q?.price ?? 0) * h.shares;
            cost += h.costBasis * h.shares;
          });
          const pl = val - cost;
          const plPct = cost ? (pl / cost) * 100 : 0;
          return `
            <div class="dash-portfolio-summary">
              <div><span class="muted">Value</span> <strong>$${fmtPrice(val)}</strong></div>
              <div><span class="muted">P&amp;L</span> <strong class="${changeClass(pl)}">${fmtPct(plPct)}</strong></div>
            </div>
            <table class="data-table compact finviz-tbl">
              <tbody>
                ${holdings.slice(0, 5).map((h) => {
                  const q = quotes.get(h.symbol);
                  const plH = q ? (q.price - h.costBasis) * h.shares : 0;
                  return `<tr class="clickable" data-symbol="${h.symbol}">
                    <td class="sym">${h.symbol}</td>
                    <td>$${fmtPrice(q?.price)}</td>
                    <td class="${changeClass(plH)}">${q ? fmtPct(((q.price - h.costBasis) / h.costBasis) * 100) : '—'}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          `;
        })() : '<p class="muted">No holdings — <a href="#/portfolio">add positions</a></p>'}
      </section>
    </div>
  `;

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}