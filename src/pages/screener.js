import {
  getQuotes, getFilters, getSort, getActivePreset, getSavedFilters,
  updateFilters, applyPreset, setSort, resetFilters, saveFilterPreset,
  deleteSavedFilter, loadSavedFilter, toggleFavorite, isFavorite,
} from '../store.js';
import { SECTORS } from '../data/universe.js';
import { PRESETS, SIGNAL_GROUPS, PATTERN_GROUPS } from '../data/presets.js';
import { fmtPrice, fmtPct, fmtVolume, fmtMarketCap, changeClass } from '../utils/format.js';
import { applyFiltersFromQuotes } from './screenerFilters.js';
import { exportToCsv } from '../utils/export.js';
import { buildShareUrl, syncFiltersToUrl } from '../utils/urlState.js';
import { sparklineHtml } from '../utils/sparkline.js';
import { debounce } from '../utils/debounce.js';
import { FORMULA_EXAMPLES, validateFormula } from '../analysis/formula.js';

export function renderScreener(container) {
  const filters = getFilters();
  const sort = getSort();
  const activePreset = getActivePreset();
  const saved = getSavedFilters();
  const quotes = getQuotes();
  const filtered = applyFiltersFromQuotes(quotes, filters);
  const sorted = applySort(filtered, sort);

  syncFiltersToUrl(filters);

  container.innerHTML = `
    <div class="page-header screener-header">
      <div>
        <h1>Stock Screener</h1>
        <p class="page-sub">Filter and sort ${quotes.size} symbols — Finviz-style customizable view.</p>
      </div>
      <div class="screener-actions">
        <button type="button" class="btn-secondary" id="export-csv">Export CSV</button>
        <button type="button" class="btn-secondary" id="export-full">Full TA CSV</button>
        <a href="#/export" class="btn-secondary">Export API</a>
        <button type="button" class="btn-secondary" id="share-screener">Copy Link</button>
        <span class="result-count">${sorted.length} results</span>
      </div>
    </div>

    <div class="preset-bar">
      ${PRESETS.map((p) => `
        <button type="button" class="preset-chip ${activePreset === p.id ? 'active' : ''}" data-preset="${p.id}">
          ${p.label}
        </button>
      `).join('')}
    </div>

    <div class="screener-tabs">
      <button type="button" class="screener-tab active" data-tab="all">All</button>
      <button type="button" class="screener-tab" data-tab="desc">Descriptive</button>
      <button type="button" class="screener-tab" data-tab="fund">Fundamental</button>
      <button type="button" class="screener-tab" data-tab="tech">Technical</button>
      <button type="button" class="screener-tab" data-tab="signals">Signals</button>
      <button type="button" class="screener-tab" data-tab="formula">Formula</button>
    </div>

    <form class="filter-bar" id="filter-form">
      <div class="filter-panel" data-panel="all">
        <div class="filter-group"><label>Search</label><input type="search" name="search" placeholder="Symbol…" value="${esc(filters.search)}" /></div>
      </div>
      <div class="filter-panel" data-panel="desc" hidden>
        <div class="filter-group"><label>Sector</label><select name="sector"><option value="">Any</option>${SECTORS.map((s) => `<option value="${s}" ${filters.sector === s ? 'selected' : ''}>${s}</option>`).join('')}</select></div>
        <div class="filter-group"><label>Min %</label><input type="number" name="minChange" step="0.1" value="${esc(filters.minChange)}" /></div>
        <div class="filter-group"><label>Max %</label><input type="number" name="maxChange" step="0.1" value="${esc(filters.maxChange)}" /></div>
        <div class="filter-group"><label>Min Vol</label><input type="number" name="minVolume" value="${esc(filters.minVolume)}" /></div>
        <div class="filter-group"><label>Min MCap</label><select name="minMarketCap"><option value="">Any</option><option value="10000000000" ${filters.minMarketCap === '10000000000' ? 'selected' : ''}>$10B+</option><option value="50000000000" ${filters.minMarketCap === '50000000000' ? 'selected' : ''}>$50B+</option><option value="100000000000" ${filters.minMarketCap === '100000000000' ? 'selected' : ''}>$100B+</option></select></div>
      </div>
      <div class="filter-panel" data-panel="fund" hidden>
        <div class="filter-group"><label>Min P/E</label><input type="number" name="minPe" step="0.1" value="${esc(filters.minPe)}" /></div>
        <div class="filter-group"><label>Max P/E</label><input type="number" name="maxPe" step="0.1" value="${esc(filters.maxPe)}" /></div>
        <div class="filter-group"><label>Min PEG</label><input type="number" name="minPeg" step="0.1" value="${esc(filters.minPeg)}" /></div>
        <div class="filter-group"><label>Max PEG</label><input type="number" name="maxPeg" step="0.1" value="${esc(filters.maxPeg)}" /></div>
        <div class="filter-group"><label>Min Div %</label><input type="number" name="minDivYield" step="0.1" value="${esc(filters.minDivYield)}" /></div>
      </div>
      <div class="filter-panel" data-panel="tech" hidden>
        <div class="filter-group"><label>Min RSI</label><input type="number" name="minRsi" value="${esc(filters.minRsi)}" /></div>
        <div class="filter-group"><label>Max RSI</label><input type="number" name="maxRsi" value="${esc(filters.maxRsi)}" /></div>
        <div class="filter-group"><label>Above SMA50</label><select name="aboveSma50"><option value="">Any</option><option value="yes" ${filters.aboveSma50 === 'yes' ? 'selected' : ''}>Yes</option><option value="no" ${filters.aboveSma50 === 'no' ? 'selected' : ''}>No</option></select></div>
        <div class="filter-group"><label>Above SMA200</label><select name="aboveSma200"><option value="">Any</option><option value="yes" ${filters.aboveSma200 === 'yes' ? 'selected' : ''}>Yes</option><option value="no" ${filters.aboveSma200 === 'no' ? 'selected' : ''}>No</option></select></div>
        <div class="filter-group"><label>Prediction</label><select name="prediction"><option value="">Any</option><option value="bullish" ${filters.prediction === 'bullish' ? 'selected' : ''}>Bullish</option><option value="bearish" ${filters.prediction === 'bearish' ? 'selected' : ''}>Bearish</option><option value="neutral" ${filters.prediction === 'neutral' ? 'selected' : ''}>Neutral</option></select></div>
      </div>
      <div class="filter-panel" data-panel="signals" hidden>
        <div class="filter-group"><label>Signal</label><select name="signal"><option value="">Any</option>${SIGNAL_GROUPS.map((s) => `<option value="${s.id}" ${filters.signal === s.id ? 'selected' : ''}>${s.label}</option>`).join('')}</select></div>
        <div class="filter-group"><label>Pattern</label><select name="pattern"><option value="">Any</option>${PATTERN_GROUPS.map((p) => `<option value="${p.id}" ${filters.pattern === p.id ? 'selected' : ''}>${p.label}</option>`).join('')}</select></div>
      </div>
      <div class="filter-panel" data-panel="formula" hidden>
        <div class="filter-group formula-group">
          <label>Custom Formula</label>
          <input type="text" name="formula" id="formula-input" placeholder="rsi < 35 and changePct > 0" value="${esc(filters.formula)}" />
          <span class="formula-status ${validateFormula(filters.formula).valid ? 'ok' : filters.formula ? 'err' : ''}" id="formula-status">
            ${filters.formula && !validateFormula(filters.formula).valid ? validateFormula(filters.formula).error : 'Fields: price, changePct, rsi, pe, relVolume, sma20, predConf…'}
          </span>
        </div>
        <div class="formula-examples">
          ${FORMULA_EXAMPLES.map((ex) => `<button type="button" class="preset-chip formula-chip" data-formula="${esc(ex.formula)}">${ex.label}</button>`).join('')}
        </div>
      </div>
      <button type="button" class="btn-ghost" id="reset-filters">Reset</button>
      <button type="button" class="btn-ghost" id="save-filter">Save</button>
    </form>

    ${saved.length ? `
      <div class="saved-filters">
        <span class="saved-label">Saved:</span>
        ${saved.map((s) => `
          <button type="button" class="saved-chip" data-saved="${s.id}">${s.name}</button>
          <button type="button" class="saved-del" data-del="${s.id}" title="Delete">&times;</button>
        `).join('')}
      </div>
    ` : ''}

    <div class="table-wrap screener-scroll">
      <table class="data-table screener-table" id="screener-table">
        <thead>
          <tr>
            <th class="col-star"></th>
            ${sortHeader('symbol', 'Ticker', sort)}
            ${sortHeader('name', 'Company', sort)}
            <th>Trend</th>
            ${sortHeader('sector', 'Sector', sort)}
            ${sortHeader('price', 'Price', sort)}
            ${sortHeader('changePct', 'Change %', sort)}
            <th>Signal</th><th>Pattern</th>
            ${sortHeader('ta.rsi', 'RSI', sort)}
            ${sortHeader('fundamentals.pe', 'P/E', sort)}
            ${sortHeader('fundamentals.peg', 'PEG', sort)}
            ${sortHeader('fundamentals.eps', 'EPS', sort)}
            ${sortHeader('fundamentals.ps', 'P/S', sort)}
            ${sortHeader('fundamentals.dividendYield', 'Div %', sort)}
            ${sortHeader('fundamentals.beta', 'Beta', sort)}
            <th>Prediction</th>
            ${sortHeader('volume', 'Volume', sort)}
            ${sortHeader('marketCap', 'Market Cap', sort)}
          </tr>
        </thead>
        <tbody>
          ${sorted.length ? sorted.map(renderRow).join('') : '<tr><td colspan="18" class="empty-row">No matches — adjust filters</td></tr>'}
        </tbody>
      </table>
    </div>
  `;

  const form = container.querySelector('#filter-form');
  const pushFilters = debounce(() => {
    const fd = new FormData(form);
    updateFilters(Object.fromEntries(fd.entries()), { preset: 'custom' });
  }, 180);

  form.addEventListener('input', pushFilters);
  form.addEventListener('change', () => {
    const fd = new FormData(form);
    updateFilters(Object.fromEntries(fd.entries()), { preset: 'custom' });
  });

  container.querySelector('#reset-filters')?.addEventListener('click', resetFilters);
  container.querySelector('#save-filter')?.addEventListener('click', () => {
    const name = prompt('Name this filter preset:');
    if (name?.trim()) saveFilterPreset(name.trim());
  });

  container.querySelectorAll('[data-preset]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const preset = PRESETS.find((p) => p.id === btn.dataset.preset);
      if (preset) applyPreset(preset.id, preset.filters);
    });
  });

  container.querySelectorAll('[data-saved]').forEach((btn) => {
    btn.addEventListener('click', () => loadSavedFilter(btn.dataset.saved));
  });

  container.querySelectorAll('[data-del]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteSavedFilter(btn.dataset.del);
    });
  });

  container.querySelector('#export-csv')?.addEventListener('click', () => exportToCsv(sorted));
  container.querySelector('#export-full')?.addEventListener('click', () => exportToCsv(sorted, 'stockviz-screener-ta.csv', true));

  container.querySelector('#share-screener')?.addEventListener('click', async () => {
    const url = buildShareUrl(filters);
    try {
      await navigator.clipboard.writeText(url);
      const btn = container.querySelector('#share-screener');
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = orig; }, 2000);
    } catch {
      prompt('Copy this link:', url);
    }
  });

  container.querySelectorAll('th[data-sort]').forEach((th) => {
    th.addEventListener('click', () => setSort(th.dataset.sort));
  });

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });

  container.querySelectorAll('.screener-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.screener-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const id = tab.dataset.tab;
      container.querySelectorAll('.filter-panel').forEach((p) => {
        p.hidden = p.dataset.panel !== id;
      });
    });
  });

  container.querySelectorAll('[data-fav]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const on = toggleFavorite(btn.dataset.fav);
      btn.textContent = on ? '★' : '☆';
      btn.classList.toggle('starred', on);
    });
  });

  container.querySelectorAll('[data-formula]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = container.querySelector('#formula-input');
      if (input) {
        input.value = btn.dataset.formula;
        updateFilters({ formula: btn.dataset.formula }, { preset: 'custom' });
      }
    });
  });
}

function sortHeader(key, label, sort) {
  const arrow = sort.key === key ? (sort.dir === 'asc' ? ' ▲' : ' ▼') : '';
  return `<th data-sort="${key}" class="sortable">${label}${arrow}</th>`;
}

function renderRow(q) {
  const fav = isFavorite(q.symbol);
  return `
    <tr class="clickable" data-live-symbol="${q.symbol}" data-symbol="${q.symbol}">
      <td class="col-star">
        <button class="star-btn ${fav ? 'starred' : ''}" data-fav="${q.symbol}" aria-label="Favorite">${fav ? '★' : '☆'}</button>
      </td>
      <td class="sym">${q.symbol}</td>
      <td class="name-cell">${q.name || '—'}</td>
      <td>${sparklineHtml(q.symbol)}</td>
      <td class="sector-cell">${q.sector || '—'}</td>
      <td data-live="price">$${fmtPrice(q.price)}</td>
      <td class="${changeClass(q.changePct)}" data-live="pct">${fmtPct(q.changePct)}</td>
      <td class="signal-tag">${q.primarySignal || '—'}</td>
      <td class="pattern-label">${q.patternLabels?.[0] || '—'}</td>
      <td class="${(q.ta?.rsi ?? 50) > 70 ? 'neg' : (q.ta?.rsi ?? 50) < 30 ? 'pos' : ''}">${q.ta?.rsi?.toFixed(1) ?? '—'}</td>
      <td>${q.fundamentals?.pe ?? '—'}</td>
      <td>${q.fundamentals?.peg ?? '—'}</td>
      <td>${q.fundamentals?.eps != null ? q.fundamentals.eps.toFixed(2) : '—'}</td>
      <td>${q.fundamentals?.ps ?? '—'}</td>
      <td>${q.fundamentals?.dividendYield != null ? `${q.fundamentals.dividendYield}%` : '—'}</td>
      <td>${q.fundamentals?.beta ?? '—'}</td>
      <td class="${q.prediction?.direction === 'bullish' ? 'pos' : q.prediction?.direction === 'bearish' ? 'neg' : ''}">${q.prediction ? `${q.prediction.direction} ${q.prediction.confidence}%` : '—'}</td>
      <td>${fmtVolume(q.volume)}</td>
      <td>${fmtMarketCap(q.marketCap)}</td>
    </tr>
  `;
}

function getNested(obj, key) {
  if (key.includes('.')) return key.split('.').reduce((o, k) => o?.[k], obj);
  return obj[key];
}

function applySort(rows, { key, dir }) {
  const mul = dir === 'asc' ? 1 : -1;
  return [...rows].sort((a, b) => {
    const av = getNested(a, key) ?? '';
    const bv = getNested(b, key) ?? '';
    if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * mul;
    return String(av).localeCompare(String(bv)) * mul;
  });
}

function esc(v) {
  return String(v ?? '').replace(/"/g, '&quot;');
}