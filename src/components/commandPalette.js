import { getUniverse } from '../data/universeStore.js';
import { getQuotes } from '../store.js';
import { fmtPrice, fmtPct, changeClass } from '../utils/format.js';

let paletteEl, inputEl, listEl, activeIdx = 0;
let results = [];

export function initCommandPalette() {
  paletteEl = document.getElementById('command-palette');
  inputEl = document.getElementById('cmd-input');
  listEl = document.getElementById('cmd-results');
  const overlay = document.getElementById('cmd-overlay');

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openPalette();
    }
    if (e.key === '/' && !isTyping()) {
      if (!paletteEl?.hidden) return;
      e.preventDefault();
      openPalette();
    }
  });

  overlay?.addEventListener('click', closePalette);
  inputEl?.addEventListener('input', () => renderResults(inputEl.value));
  inputEl?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePalette();
    if (e.key === 'ArrowDown') { e.preventDefault(); moveActive(1); }
    if (e.key === 'ArrowUp') { e.preventDefault(); moveActive(-1); }
    if (e.key === 'Enter') selectActive();
  });
}

function isTyping() {
  const t = document.activeElement?.tagName;
  return t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT';
}

export function openPalette() {
  if (!paletteEl) return;
  paletteEl.hidden = false;
  document.getElementById('cmd-overlay').hidden = false;
  inputEl.value = '';
  activeIdx = 0;
  renderResults('');
  requestAnimationFrame(() => inputEl?.focus());
}

export function closePalette() {
  if (!paletteEl) return;
  paletteEl.hidden = true;
  document.getElementById('cmd-overlay').hidden = true;
}

function renderResults(query) {
  const q = query.trim().toLowerCase();
  const quotes = getQuotes();
  results = getUniverse().filter((s) => {
    if (!q) return true;
    return s.symbol.toLowerCase().includes(q) || s.name.toLowerCase().includes(q);
  }).slice(0, 12);

  listEl.innerHTML = results.map((s, i) => {
    const quote = quotes.get(s.symbol);
    const cls = quote ? changeClass(quote.changePct) : '';
    return `
      <button class="cmd-item ${i === activeIdx ? 'active' : ''}" data-idx="${i}" data-symbol="${s.symbol}">
        <span class="cmd-sym">${s.symbol}</span>
        <span class="cmd-name">${s.name}</span>
        ${quote ? `<span class="cmd-price ${cls}">$${fmtPrice(quote.price)} ${fmtPct(quote.changePct)}</span>` : ''}
      </button>
    `;
  }).join('') || '<p class="cmd-empty">No matches</p>';

  listEl.querySelectorAll('.cmd-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectSymbol(btn.dataset.symbol);
    });
  });
}

function moveActive(dir) {
  activeIdx = Math.max(0, Math.min(results.length - 1, activeIdx + dir));
  listEl.querySelectorAll('.cmd-item').forEach((el, i) => {
    el.classList.toggle('active', i === activeIdx);
  });
}

function selectActive() {
  if (results[activeIdx]) selectSymbol(results[activeIdx].symbol);
}

function selectSymbol(symbol) {
  closePalette();
  window.dispatchEvent(new CustomEvent('stockviz:select', { detail: symbol }));
}