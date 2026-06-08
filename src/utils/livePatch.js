import { getQuotes } from '../store.js';
import { fmtPrice, fmtPct, changeClass, heatColor } from './format.js';
import { drawSparkline } from './sparkline.js';
import { patchIndexCharts } from '../components/homeIndexCharts.js';
import { patchHomeSectorBars } from '../components/homeSectorBars.js';

/** Patch live price cells without full page re-render — keeps UI buttery on refresh. */
export function patchLivePrices() {
  const quotes = getQuotes();

  document.querySelectorAll('[data-live-symbol]').forEach((el) => {
    const q = quotes.get(el.dataset.liveSymbol);
    if (!q) return;

    const priceEl = el.querySelector('[data-live="price"]');
    const chgEl = el.querySelector('[data-live="change"]');
    const pctEl = el.querySelector('[data-live="pct"]');

    if (priceEl) {
      const isIndex = priceEl.dataset.liveFormat === 'index';
      const formatted = isIndex
        ? (() => {
            const p = q.price;
            if (!p) return '—';
            if (p >= 10000) return p.toLocaleString('en-US', { maximumFractionDigits: 0 });
            if (p >= 1000) return p.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            return p.toFixed(2);
          })()
        : `$${fmtPrice(q.price)}`;
      if (priceEl.textContent !== formatted) {
        priceEl.textContent = formatted;
        flashEl(priceEl, q.change >= 0 ? 'flash-up' : 'flash-down');
      }
    }
    if (chgEl) {
      chgEl.textContent = `${q.change >= 0 ? '+' : ''}${q.change?.toFixed(2) ?? '—'}`;
      chgEl.className = changeClass(q.change);
    }
    if (pctEl) {
      pctEl.textContent = fmtPct(q.changePct);
      pctEl.className = changeClass(q.changePct);
    }
  });

  document.querySelectorAll('canvas[data-spark]').forEach((canvas) => {
    const q = quotes.get(canvas.dataset.spark);
    if (q?.sparkline?.length) {
      const w = Number(canvas.getAttribute('width')) || 72;
      const h = Number(canvas.getAttribute('height')) || 24;
      drawSparkline(canvas, q.sparkline, { width: w, height: h });
    }
  });

  document.querySelectorAll('.heat-tile[data-symbol]').forEach((tile) => {
    const q = quotes.get(tile.dataset.symbol);
    if (!q) return;
    const pct = q.changePct ?? 0;
    tile.style.background = heatColor(pct);
    const pctEl = tile.querySelector('.tile-pct');
    if (pctEl) pctEl.textContent = `${pct >= 0 ? '+' : ''}${pct.toFixed(1)}%`;
  });
}

function flashEl(el, cls) {
  el.classList.remove('flash-up', 'flash-down');
  void el.offsetWidth;
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 600);
}

/** Refresh home-page index candlesticks and sector bar chart. */
export function patchHomeCharts() {
  const quotes = getQuotes();
  patchIndexCharts(quotes);
  patchHomeSectorBars(quotes);
}