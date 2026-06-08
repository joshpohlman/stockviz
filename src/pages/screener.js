import {
  getQuotes, getFilters, getSort, getActivePreset, getSavedFilters,
  updateFilters, applyPreset, setSort, resetFilters, saveFilterPreset, deleteSavedFilter, loadSavedFilter,
} from '../store.js';
import { SECTORS } from '../data/universe.js';
import { PRESETS } from '../data/presets.js';
import { fmtPrice, fmtPct, fmtVolume, fmtMarketCap, changeClass } from '../utils/format.js';
import { applyFiltersFromQuotes } from './screenerFilters.js';
import { exportToCsv } from '../utils/export.js';
import { buildShareUrl, syncFiltersToUrl } from '../utils/urlState.js';

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

    <form class="filter-bar" id="filter-form">
      <div class="filter-group">
        <label>Search</label>
        <input type="search" name="search" placeholder="Symbol or name…" value="${esc(filters.search)}" />
      </div>
      <div class="filter-group">
        <label>Sector</label>
        <select name="sector">
          <option value="">All Sectors</option>
          ${SECTORS.map((s) => `<option value="${s}" ${filters.sector === s ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
      </div>
      <div class="filter-group">
        <label>Min %</label>
        <input type="number" name="minChange" step="0.1" placeholder="-10" value="${esc(filters.minChange)}" />
      </div>
      <div class="filter-group">
        <label>Max %</label>
        <input type="number" name="maxChange" step="0.1" placeholder="10" value="${esc(filters.maxChange)}" />
      </div>
      <div class="filter-group">
        <label>Min Vol</label>
        <input type="number" name="minVolume" step="100000" placeholder="1M" value="${esc(filters.minVolume)}" />
      </div>
      <div class="filter-group">
        <label>Min MCap</label>
        <select name="minMarketCap">
          <option value="">Any</option>
          <option value="10000000000" ${filters.minMarketCap === '10000000000' ? 'selected' : ''}>$10B+</option>
          <option value="50000000000" ${filters.minMarketCap === '50000000000' ? 'selected' : ''}>$50B+</option>
          <option value="100000000000" ${filters.minMarketCap === '100000000000' ? 'selected' : ''}>$100B+</option>
          <option value="500000000000" ${filters.minMarketCap === '500000000000' ? 'selected' : ''}>$500B+</option>
        </select>
      </div>
      <button type="button" class="btn-ghost" id="reset-filters">Reset</button>
      <button type="button" class="btn-ghost" id="save-filter">Save Preset</button>
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

    <div class="table-wrap">
      <table class="data-table screener-table" id="screener-table">
        <thead>
          <tr>
            ${sortHeader('symbol', 'Ticker', sort)}
            ${sortHeader('name', 'Company', sort)}
            ${sortHeader('sector', 'Sector', sort)}
            ${sortHeader('price', 'Price', sort)}
            ${sortHeader('change', 'Change', sort)}
            ${sortHeader('changePct', 'Change %', sort)}
            ${sortHeader('volume', 'Volume', sort)}
            ${sortHeader('marketCap', 'Market Cap', sort)}
          </tr>
        </thead>
        <tbody>
          ${sorted.length ? sorted.map(renderRow).join('') : '<tr><td colspan="8" class="empty-row">No matches — adjust filters</td></tr>'}
        </tbody>
      </table>
    </div>
  `;

  const form = container.querySelector('#filter-form');
  const pushFilters = () => {
    const fd = new FormData(form);
    updateFilters(Object.fromEntries(fd.entries()), { preset: 'custom' });
  };
  form.addEventListener('input', pushFilters);
  form.addEventListener('change', pushFilters);

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

  container.querySelector('#export-csv')?.addEventListener('click', () => {
    exportToCsv(sorted);
  });

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
}

function sortHeader(key, label, sort) {
  const arrow = sort.key === key ? (sort.dir === 'asc' ? ' ▲' : ' ▼') : '';
  return `<th data-sort="${key}" class="sortable">${label}${arrow}</th>`;
}

function renderRow(q) {
  return `
    <tr class="clickable" data-symbol="${q.symbol}">
      <td class="sym">${q.symbol}</td>
      <td class="name-cell">${q.name || '—'}</td>
      <td class="sector-cell">${q.sector || '—'}</td>
      <td>$${fmtPrice(q.price)}</td>
      <td class="${changeClass(q.change)}">${q.change >= 0 ? '+' : ''}${q.change?.toFixed(2) ?? '—'}</td>
      <td class="${changeClass(q.changePct)}">${fmtPct(q.changePct)}</td>
      <td>${fmtVolume(q.volume)}</td>
      <td>${fmtMarketCap(q.marketCap)}</td>
    </tr>
  `;
}

function applySort(rows, { key, dir }) {
  const mul = dir === 'asc' ? 1 : -1;
  return [...rows].sort((a, b) => {
    const av = a[key] ?? '';
    const bv = b[key] ?? '';
    if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * mul;
    return String(av).localeCompare(String(bv)) * mul;
  });
}

function esc(v) {
  return String(v ?? '').replace(/"/g, '&quot;');
}