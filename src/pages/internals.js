import { getQuotes } from '../store.js';
import { getMarketBreadth } from '../analysis/enrich.js';
import { getSectorInternals } from '../data/advancedData.js';
import { fmtPct, fmtVolume, changeClass } from '../utils/format.js';

export function renderInternals(container) {
  const quotes = getQuotes();
  const breadth = getMarketBreadth(quotes);
  const sectors = getSectorInternals(quotes);
  const rows = [...quotes.values()];

  const highVol = rows.filter((q) => (q.ta?.relVolume ?? 1) > 1.5)
    .sort((a, b) => (b.ta?.relVolume ?? 1) - (a.ta?.relVolume ?? 1)).slice(0, 12);
  const rsiExtreme = rows.filter((q) => (q.ta?.rsi ?? 50) < 25 || (q.ta?.rsi ?? 50) > 75)
    .sort((a, b) => Math.abs(50 - (b.ta?.rsi ?? 50)) - Math.abs(50 - (a.ta?.rsi ?? 50))).slice(0, 12);

  const ratio = breadth.declining ? breadth.advancing / breadth.declining : breadth.advancing;

  container.innerHTML = `
    <div class="page-header">
      <h1>Market Internals</h1>
      <p class="page-sub">Advance/decline, breadth thrust, sector internals, volume extremes.</p>
    </div>

    <div class="internals-grid">
      <section class="panel internals-card">
        <h2 class="panel-title">Breadth Overview</h2>
        <div class="internals-metrics">
          <div class="metric-big">
            <span class="metric-val pos">${breadth.advancing}</span>
            <span class="metric-label">Advancing</span>
          </div>
          <div class="metric-big">
            <span class="metric-val neg">${breadth.declining}</span>
            <span class="metric-label">Declining</span>
          </div>
          <div class="metric-big">
            <span class="metric-val">${ratio.toFixed(2)}</span>
            <span class="metric-label">A/D Ratio</span>
          </div>
          <div class="metric-big">
            <span class="metric-val">${breadth.newHigh}</span>
            <span class="metric-label">52W Highs</span>
          </div>
          <div class="metric-big">
            <span class="metric-val">${breadth.newLow}</span>
            <span class="metric-label">52W Lows</span>
          </div>
        </div>
        <div class="breadth-visual">
          <div class="breadth-stack">
            <div class="breadth-seg pos" style="flex:${breadth.advPct}">${breadth.advPct.toFixed(0)}%</div>
            <div class="breadth-seg flat" style="flex:${100 - breadth.advPct - breadth.decPct}"></div>
            <div class="breadth-seg neg" style="flex:${breadth.decPct}">${breadth.decPct.toFixed(0)}%</div>
          </div>
        </div>
      </section>

      <section class="panel internals-card">
        <h2 class="panel-title">Moving Average Breadth</h2>
        <div class="ma-breadth-bars">
          <div class="ma-bar-row">
            <span>SMA 50</span>
            <div class="ma-bar"><div class="ma-fill" style="width:${breadth.aboveSma50Pct}%"></div></div>
            <span>${breadth.aboveSma50} / ${rows.length}</span>
          </div>
          <div class="ma-bar-row">
            <span>SMA 200</span>
            <div class="ma-bar"><div class="ma-fill accent" style="width:${breadth.aboveSma200Pct}%"></div></div>
            <span>${breadth.aboveSma200} / ${rows.length}</span>
          </div>
        </div>
        <p class="field-hint">Above 70% on SMA200 often signals bull market; below 30% bearish.</p>
      </section>

      <section class="panel internals-card wide">
        <h2 class="panel-title">Sector Advance/Decline</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Sector</th><th>Adv %</th><th>Adv/Dec</th><th>Avg Volume</th><th>Breadth</th></tr></thead>
          <tbody>
            ${sectors.map((s) => `
              <tr>
                <td>${s.sector}</td>
                <td class="${changeClass(s.advPct - 50)}">${s.advPct.toFixed(0)}%</td>
                <td>${s.adv}/${s.dec}</td>
                <td>${fmtVolume(s.avgVol)}</td>
                <td><div class="mini-bar"><div class="mini-fill" style="width:${s.advPct}%"></div></div></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>

      <section class="panel internals-card">
        <h2 class="panel-title">Volume Surge</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Ticker</th><th>Rel Vol</th><th>Change</th></tr></thead>
          <tbody>
            ${highVol.map((q) => `
              <tr class="clickable" data-symbol="${q.symbol}">
                <td class="sym">${q.symbol}</td>
                <td>${(q.ta?.relVolume ?? 1).toFixed(1)}x</td>
                <td class="${changeClass(q.changePct)}">${fmtPct(q.changePct)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>

      <section class="panel internals-card">
        <h2 class="panel-title">RSI Extremes</h2>
        <table class="data-table compact finviz-tbl">
          <thead><tr><th>Ticker</th><th>RSI</th><th>Change</th></tr></thead>
          <tbody>
            ${rsiExtreme.map((q) => `
              <tr class="clickable" data-symbol="${q.symbol}">
                <td class="sym">${q.symbol}</td>
                <td class="${(q.ta?.rsi ?? 50) < 30 ? 'pos' : 'neg'}">${q.ta?.rsi?.toFixed(0)}</td>
                <td class="${changeClass(q.changePct)}">${fmtPct(q.changePct)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>
    </div>
  `;

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}