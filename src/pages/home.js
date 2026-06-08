import { getQuotes, getSettings } from '../store.js';
import { getMarketBreadth } from '../analysis/enrich.js';
import { renderHeatmap } from '../components/heatmap.js';
import { fmtPrice, fmtPct, fmtVolume, changeClass } from '../utils/format.js';
import {
  SIGNAL_GROUPS, PATTERN_GROUPS, FUTURES, FOREX, BONDS,
  INSIDER_TRADES, EARNINGS_CALENDAR, ECON_CALENDAR,
} from '../data/marketData.js';
import { fetchMarketNews, fetchMarketWidgets } from '../api.js';
import { fetchHomeIndices } from '../api/homeIndices.js';
import { renderHomeIndexCharts } from '../components/homeIndexCharts.js';

const LEFT_TAPE = [
  { signal: 'top_gainers', limit: 7, sort: (a, b) => b.changePct - a.changePct },
  { signal: 'new_high', limit: 4, sort: (a, b) => b.changePct - a.changePct },
  { signal: 'overbought', limit: 2, sort: (a, b) => (b.ta?.rsi ?? 0) - (a.ta?.rsi ?? 0) },
  { signal: 'unusual_volume', limit: 4, sort: (a, b) => (b.ta?.relVolume ?? 0) - (a.ta?.relVolume ?? 0) },
];

const RIGHT_TAPE = [
  { signal: 'top_losers', limit: 7, sort: (a, b) => a.changePct - b.changePct },
  { signal: 'new_low', limit: 4, sort: (a, b) => a.changePct - b.changePct },
  { signal: 'oversold', limit: 2, sort: (a, b) => (a.ta?.rsi ?? 100) - (b.ta?.rsi ?? 100) },
  { signal: 'most_volatile', limit: 2, sort: (a, b) => Math.abs(b.changePct) - Math.abs(a.changePct) },
  { signal: 'most_active', limit: 2, sort: (a, b) => (b.volume ?? 0) - (a.volume ?? 0) },
];

export async function renderHome(container) {
  const quotes = getQuotes();
  const settings = getSettings();
  const rows = [...quotes.values()];
  const breadth = getMarketBreadth(quotes);
  const [news, widgets, indices] = await Promise.all([
    fetchMarketNews(settings).catch(() => []),
    fetchMarketWidgets(settings).catch(() => null),
    fetchHomeIndices(settings, quotes).catch(() => []),
  ]);

  const earningsData = widgets?.earnings?.length ? widgets.earnings : EARNINGS_CALENDAR;
  const econData = widgets?.economic?.length ? widgets.economic : ECON_CALENDAR;
  const insiderData = widgets?.insider?.length ? widgets.insider : INSIDER_TRADES;
  const futuresData = widgets?.futures?.length ? widgets.futures : FUTURES;
  const forexData = widgets?.forex?.length ? widgets.forex : FOREX;
  const bondsData = widgets?.bonds?.length ? widgets.bonds : BONDS;

  const leftRows = buildTape(rows, LEFT_TAPE);
  const rightRows = buildTape(rows, RIGHT_TAPE);

  const earningsBefore = earningsData.filter((e) => /BMO|before/i.test(e.date));
  const earningsAfter = earningsData.filter((e) => /AMC|after|Today/i.test(e.date));
  const insiderBuys = insiderData.filter((t) => t.type === 'Buy').slice(0, 2);
  const insiderSells = insiderData.filter((t) => t.type === 'Sale').slice(0, 2);

  const majorNews = rows
    .filter((q) => Math.abs(q.changePct) >= 1.5)
    .sort((a, b) => Math.abs(b.changePct) - Math.abs(a.changePct))
    .slice(0, 12);

  const patternLeft = PATTERN_GROUPS.slice(0, 7);
  const patternRight = PATTERN_GROUPS.slice(7, 14);

  container.innerHTML = `
    <div class="finviz-home">
      ${news[0] ? `
        <div class="home-market-line panel">
          <span class="home-market-time">${formatNewsTime(news[0].datetime)}</span>
          <a class="home-market-text" href="${news[0].url || '#/'}" target="_blank" rel="noopener">${news[0].headline || news[0].title}</a>
        </div>
      ` : ''}

      <section class="panel home-indices-panel" id="home-indices"></section>

      <div class="breadth-bar panel finviz-breadth">
        <div class="breadth-item">
          <span class="breadth-label">Advancing</span>
          <span class="breadth-val pos">${breadth.advPct.toFixed(1)}%</span>
          <span class="breadth-sub">(${breadth.advancing})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Declining</span>
          <span class="breadth-sub">(${breadth.declining})</span>
          <span class="breadth-val neg">${breadth.decPct.toFixed(1)}%</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">New High</span>
          <span class="breadth-val pos">${breadth.newHighPct.toFixed(1)}%</span>
          <span class="breadth-sub">(${breadth.newHigh})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">New Low</span>
          <span class="breadth-sub">(${breadth.newLow})</span>
          <span class="breadth-val neg">${(100 - breadth.newHighPct).toFixed(1)}%</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Above</span>
          <span class="breadth-val">${breadth.aboveSma50Pct.toFixed(1)}%</span>
          <span class="breadth-sub">SMA50 (${breadth.aboveSma50})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Below</span>
          <span class="breadth-sub">(${breadth.belowSma50})</span>
          <span class="breadth-val">${(100 - breadth.aboveSma50Pct).toFixed(1)}%</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Above</span>
          <span class="breadth-val">${breadth.aboveSma200Pct.toFixed(1)}%</span>
          <span class="breadth-sub">SMA200 (${breadth.aboveSma200})</span>
        </div>
        <div class="breadth-item">
          <span class="breadth-label">Below</span>
          <span class="breadth-sub">(${breadth.belowSma200})</span>
          <span class="breadth-val">${(100 - breadth.aboveSma200Pct).toFixed(1)}%</span>
        </div>
      </div>

      <div class="home-main-grid">
        <section class="panel home-tape-col">
          ${renderTapeTable(leftRows)}
          ${renderEarningsRows(earningsBefore, 'Earnings Before')}
          ${renderInsiderRows(insiderBuys, 'Insider Buying')}
        </section>

        <section class="panel home-center-col">
          <h2 class="finviz-col-title"><a href="#/map">S&amp;P 500 — 1 Day Performance</a></h2>
          <div id="home-heatmap" class="home-heatmap-host"></div>
          <div class="home-pattern-cols">
            <div class="home-pattern-col">
              ${renderPatternBlock(patternLeft, rows)}
            </div>
            <div class="home-pattern-col">
              ${renderPatternBlock(patternRight, rows)}
            </div>
          </div>
        </section>

        <section class="panel home-tape-col">
          ${renderTapeTable(rightRows)}
          ${renderEarningsRows(earningsAfter, 'Earnings After')}
          ${renderInsiderRows(insiderSells, 'Insider Selling')}
        </section>

        <section class="panel home-news-col">
          <h2 class="finviz-col-title"><a href="#/news">Headlines</a></h2>
          <div class="headline-list home-headlines">
            ${news.slice(0, 6).map((n) => `
              <a class="headline-item" href="${n.url || '#'}" target="_blank" rel="noopener">
                <span class="headline-time">${formatNewsTime(n.datetime)}</span>
                <span class="headline-text">${n.headline || n.title}</span>
              </a>
            `).join('')}
          </div>
          <h3 class="finviz-sub-title"><a href="#/screener">Major News</a></h3>
          <div class="major-news-strip">
            ${majorNews.map((q) => `
              <a class="major-news-chip clickable" data-symbol="${q.symbol}">
                <span class="sym">${q.symbol}</span>
                <span class="${changeClass(q.changePct)}">${fmtPct(q.changePct)}</span>
              </a>
            `).join('')}
          </div>
        </section>
      </div>

      <div class="home-bottom-grid">
        <section class="panel home-bottom-panel">
          <h3 class="finviz-sub-title"><a href="#/calendar">Economic Calendar</a></h3>
          <table class="data-table compact finviz-tbl home-mini-tbl">
            <thead><tr><th>Date</th><th>Time</th><th>Impact</th><th>Event</th><th>Expected</th></tr></thead>
            <tbody>
              ${econData.slice(0, 4).map((e) => `
                <tr>
                  <td>${e.date}</td>
                  <td>${e.time}</td>
                  <td><span class="impact impact-${e.impact}">${e.impact}</span></td>
                  <td>${e.event}</td>
                  <td>${e.expected}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </section>

        <section class="panel home-bottom-panel">
          <h3 class="finviz-sub-title"><a href="#/calendar">Earnings Release</a></h3>
          <table class="data-table compact finviz-tbl home-mini-tbl">
            <thead><tr><th>Date</th><th>Symbol</th></tr></thead>
            <tbody>
              ${earningsData.slice(0, 6).map((e) => `
                <tr class="clickable" data-symbol="${e.symbol}">
                  <td>${e.date}</td>
                  <td class="sym">${e.symbol}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </section>

        <section class="panel home-bottom-panel">
          <h3 class="finviz-sub-title"><a href="#/insider">Latest Insider Trading</a></h3>
          <table class="data-table compact finviz-tbl home-mini-tbl">
            <thead><tr><th>Ticker</th><th>Insider</th><th>Date</th><th>Type</th><th>Value</th></tr></thead>
            <tbody>
              ${insiderData.slice(0, 5).map((t) => `
                <tr class="clickable" data-symbol="${t.symbol}">
                  <td class="sym">${t.symbol}</td>
                  <td>${t.insider.split(' ')[0]}</td>
                  <td>${t.date}</td>
                  <td class="${t.type === 'Buy' ? 'pos' : 'neg'}">${t.type}</td>
                  <td>$${(t.value / 1e6).toFixed(1)}M</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </section>

        <section class="panel home-bottom-panel">
          <h3 class="finviz-sub-title"><a href="#/futures">Futures</a></h3>
          <table class="data-table compact finviz-tbl home-mini-tbl">
            <thead><tr><th>Contract</th><th>Last</th><th>Chg</th><th>Chg %</th></tr></thead>
            <tbody>
              ${futuresData.map((f) => `
                <tr>
                  <td>${f.name}</td>
                  <td>${f.last > 1000 ? f.last.toLocaleString() : fmtPrice(f.last)}</td>
                  <td class="${changeClass(f.change)}">${f.change >= 0 ? '+' : ''}${fmtPrice(f.change)}</td>
                  <td class="${changeClass(f.changePct)}">${fmtPct(f.changePct)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </section>

        <section class="panel home-bottom-panel">
          <h3 class="finviz-sub-title"><a href="#/futures">Forex &amp; Bonds</a></h3>
          <table class="data-table compact finviz-tbl home-mini-tbl">
            <thead><tr><th>Pair / Bond</th><th>Last</th><th>Chg %</th></tr></thead>
            <tbody>
              ${[...forexData, ...bondsData].map((f) => `
                <tr>
                  <td>${f.pair || f.name}</td>
                  <td>${typeof f.last === 'number' && f.last > 100 ? f.last.toLocaleString() : fmtPrice(f.last)}</td>
                  <td class="${changeClass(f.changePct)}">${fmtPct(f.changePct)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </section>
      </div>

      <div class="signal-ticker-row panel">
        <span class="signal-ticker-label">Signals:</span>
        ${SIGNAL_GROUPS.map((sg) => {
          const n = rows.filter((q) => q.signals?.some((s) => s.id === sg.id)).length;
          return `<a href="#/screener?signal=${sg.id}" class="signal-ticker-chip">${sg.label} (${n})</a>`;
        }).join('')}
        <a href="#/patterns" class="signal-ticker-chip accent">Patterns →</a>
        <a href="#/signals" class="signal-ticker-chip accent">All Signals →</a>
      </div>
    </div>
  `;

  const indicesHost = container.querySelector('#home-indices');
  if (indicesHost && indices.length) {
    renderHomeIndexCharts(indicesHost, indices);
  }

  const heatHost = container.querySelector('#home-heatmap');
  if (heatHost) {
    renderHeatmap(heatHost, rows, (symbol) => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: symbol }));
    });
  }

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}

function buildTape(rows, config) {
  const out = [];
  for (const { signal, limit, sort } of config) {
    const label = SIGNAL_GROUPS.find((s) => s.id === signal)?.label || signal;
    const matches = rows
      .filter((q) => q.signals?.some((s) => s.id === signal))
      .sort(sort)
      .slice(0, limit);
    for (const q of matches) {
      out.push({ quote: q, signal, signalLabel: label });
    }
  }
  return out;
}

function renderTapeTable(tapeRows) {
  return `
    <table class="data-table compact finviz-tbl home-tape-tbl">
      <thead>
        <tr>
          <th>Ticker</th><th>Last</th><th>Change</th><th>Volume</th><th>Signal</th>
        </tr>
      </thead>
      <tbody>
        ${tapeRows.length ? tapeRows.map(({ quote: q, signal, signalLabel }) => `
          <tr class="clickable" data-live-symbol="${q.symbol}" data-symbol="${q.symbol}">
            <td class="sym">${q.symbol}</td>
            <td data-live="price">$${fmtPrice(q.price)}</td>
            <td class="${changeClass(q.changePct)}" data-live="pct">${fmtPct(q.changePct)}</td>
            <td>${fmtVolume(q.volume)}</td>
            <td><a href="#/screener?signal=${signal}" class="signal-link">${signalLabel}</a></td>
          </tr>
        `).join('') : '<tr><td colspan="5" class="empty-row">—</td></tr>'}
      </tbody>
    </table>
  `;
}

function renderEarningsRows(earnings, label) {
  if (!earnings.length) return '';
  return `
    <table class="data-table compact finviz-tbl home-tape-tbl home-tape-extra">
      <tbody>
        ${earnings.slice(0, 2).map((e) => `
          <tr class="clickable" data-symbol="${e.symbol}">
            <td class="sym">${e.symbol}</td>
            <td>$${fmtPrice(e.epsEst)}</td>
            <td>${e.date}</td>
            <td></td>
            <td><a href="#/calendar" class="signal-link">${label}</a></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderInsiderRows(trades, label) {
  if (!trades.length) return '';
  return `
    <table class="data-table compact finviz-tbl home-tape-tbl home-tape-extra">
      <tbody>
        ${trades.map((t) => `
          <tr class="clickable" data-symbol="${t.symbol}">
            <td class="sym">${t.symbol}</td>
            <td>$${t.cost}</td>
            <td>${t.shares.toLocaleString()}</td>
            <td>$${(t.value / 1e6).toFixed(1)}M</td>
            <td><a href="#/insider" class="signal-link">${label}</a></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderPatternBlock(patterns, rows) {
  return `
    <table class="data-table compact finviz-tbl home-pattern-tbl">
      <thead><tr><th>Ticker</th><th>Signal</th></tr></thead>
      <tbody>
        ${patterns.flatMap((pg) => {
          const matches = rows
            .filter((q) => q.patterns?.some((p) => p.id === pg.id))
            .slice(0, 4);
          if (!matches.length) return '';
          return matches.map((q) => `
            <tr class="clickable" data-symbol="${q.symbol}">
              <td class="sym">${q.symbol}</td>
              <td><a href="#/screener?pattern=${pg.id}" class="signal-link">${pg.label}</a></td>
            </tr>
          `);
        }).join('')}
      </tbody>
    </table>
  `;
}

function formatNewsTime(ts) {
  if (!ts) return '';
  const d = typeof ts === 'number' ? new Date(ts * 1000) : new Date(ts);
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}