import { getQuotes, getSettings } from '../store.js';
import { getMarketBreadth } from '../analysis/enrich.js';
import { fmtPrice, fmtPct, fmtVolume, changeClass } from '../utils/format.js';
import { SIGNAL_GROUPS, PATTERN_GROUPS } from '../data/marketData.js';
import { fetchMarketNews } from '../api.js';

export async function renderHome(container) {
  const quotes = getQuotes();
  const settings = getSettings();
  const rows = [...quotes.values()];
  const breadth = getMarketBreadth(quotes);

  const gainers = rows.filter((q) => q.signals?.some((s) => s.id === 'top_gainers'))
    .sort((a, b) => b.changePct - a.changePct).slice(0, 7);
  const losers = rows.filter((q) => q.signals?.some((s) => s.id === 'top_losers'))
    .sort((a, b) => a.changePct - b.changePct).slice(0, 7);

  const news = await fetchMarketNews(settings).catch(() => []);

  const patternCols = PATTERN_GROUPS.slice(0, 6).map((pg) => {
    const match = rows.find((q) => q.patterns?.some((p) => p.id === pg.id));
    return { ...pg, stock: match };
  });

  container.innerHTML = `
    <div class="finviz-home">
      <!-- Market breadth bar -->
      <div class="breadth-bar panel">
        <div class="breadth-item">
          <span class="breadth-label">Advancing</span>
          <span class="breadth-val pos">${breadth.advPct.toFixed(1)}%</span>
          <span class="breadth-sub">(${breadth.advancing})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Declining</span>
          <span class="breadth-val neg">${breadth.decPct.toFixed(1)}%</span>
          <span class="breadth-sub">(${breadth.declining})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Above SMA50</span>
          <span class="breadth-val">${breadth.aboveSma50Pct.toFixed(1)}%</span>
          <span class="breadth-sub">(${breadth.aboveSma50})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Above SMA200</span>
          <span class="breadth-val">${breadth.aboveSma200Pct.toFixed(1)}%</span>
          <span class="breadth-sub">(${breadth.aboveSma200})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">New High / Low</span>
          <span class="breadth-val"><span class="pos">${breadth.newHigh}</span> / <span class="neg">${breadth.newLow}</span></span>
        </div>
      </div>

      <div class="finviz-cols">
        <!-- Left: Gainers -->
        <section class="panel finviz-col">
          <h2 class="finviz-col-title pos-title">Top Gainers</h2>
          ${renderSignalTable(gainers, 'Top Gainers')}
        </section>

        <!-- Center-left: Losers -->
        <section class="panel finviz-col">
          <h2 class="finviz-col-title neg-title">Top Losers</h2>
          ${renderSignalTable(losers, 'Top Losers')}
        </section>

        <!-- Center: Heat map link + patterns -->
        <section class="panel finviz-col finviz-col-map">
          <h2 class="finviz-col-title"><a href="#/map">S&amp;P 500 — Heat Map</a></h2>
          <a href="#/map" class="map-preview">
            <div class="map-preview-grid">
              ${rows.slice(0, 24).map((q) => `
                <span class="map-preview-tile" style="background:${heat(q.changePct)}" title="${q.symbol} ${fmtPct(q.changePct)}"></span>
              `).join('')}
            </div>
          </a>
          <h3 class="finviz-sub-title">Pattern Signals</h3>
          <table class="data-table compact finviz-tbl">
            <tbody>
              ${patternCols.map((pg) => pg.stock ? `
                <tr class="clickable" data-symbol="${pg.stock.symbol}">
                  <td class="sym">${pg.stock.symbol}</td>
                  <td class="signal-tag">${pg.label}</td>
                </tr>
              ` : '').join('')}
            </tbody>
          </table>
        </section>

        <!-- Right: News + predictions -->
        <section class="panel finviz-col finviz-col-news">
          <h2 class="finviz-col-title"><a href="#/news">Headlines</a></h2>
          <div class="headline-list">
            ${news.slice(0, 8).map((n) => `
              <a class="headline-item" href="${n.url || '#'}" target="_blank" rel="noopener">
                <span class="headline-time">${n.datetime ? new Date(n.datetime * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : ''}</span>
                <span class="headline-text">${n.headline || n.title}</span>
              </a>
            `).join('')}
          </div>
          <h3 class="finviz-sub-title"><a href="#/patterns">Top Predictions</a></h3>
          <table class="data-table compact finviz-tbl">
            <tbody>
              ${rows.filter((q) => q.prediction?.confidence >= 65)
                .sort((a, b) => b.prediction.confidence - a.prediction.confidence)
                .slice(0, 6).map((q) => `
                <tr class="clickable" data-symbol="${q.symbol}">
                  <td class="sym">${q.symbol}</td>
                  <td class="${q.prediction.direction === 'bullish' ? 'pos' : q.prediction.direction === 'bearish' ? 'neg' : ''}">${q.prediction.direction}</td>
                  <td>${q.prediction.confidence}%</td>
                  <td>$${fmtPrice(q.prediction.priceTarget)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </section>
      </div>

      <!-- Signal ticker rows -->
      <div class="signal-ticker-row panel">
        <span class="signal-ticker-label">Signals:</span>
        ${SIGNAL_GROUPS.slice(0, 10).map((sg) => {
          const n = rows.filter((q) => q.signals?.some((s) => s.id === sg.id)).length;
          return `<a href="#/screener?signal=${sg.id}" class="signal-ticker-chip">${sg.label} (${n})</a>`;
        }).join('')}
        <a href="#/signals" class="signal-ticker-chip accent">All Signals →</a>
        <a href="#/patterns" class="signal-ticker-chip accent">Pattern Scanner →</a>
      </div>
    </div>
  `;

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}

function renderSignalTable(rows, signalLabel) {
  return `
    <table class="data-table compact finviz-tbl">
      <thead><tr><th>Ticker</th><th>Last</th><th>Change</th><th>Vol</th><th>Signal</th></tr></thead>
      <tbody>
        ${rows.length ? rows.map((q) => `
          <tr class="clickable" data-live-symbol="${q.symbol}" data-symbol="${q.symbol}">
            <td class="sym">${q.symbol}</td>
            <td data-live="price">$${fmtPrice(q.price)}</td>
            <td class="${changeClass(q.changePct)}" data-live="pct">${fmtPct(q.changePct)}</td>
            <td>${fmtVolume(q.volume)}</td>
            <td><a href="#/screener" class="signal-link">${signalLabel}</a></td>
          </tr>
        `).join('') : '<tr><td colspan="5" class="empty-row">—</td></tr>'}
      </tbody>
    </table>
  `;
}

function heat(pct) {
  const clamped = Math.max(-5, Math.min(5, pct ?? 0));
  if (clamped >= 0) {
    const t = clamped / 5;
    return `rgb(${20 + (1 - t) * 30},${80 + t * 120},${40 + (1 - t) * 20})`;
  }
  const t = Math.abs(clamped) / 5;
  return `rgb(${120 + t * 135},${40 + (1 - t) * 30},${40})`;
}