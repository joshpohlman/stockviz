import { getQuotes } from '../store.js';
import { fmtPrice, fmtPct, fmtIndexPrice, changeClass, heatColor } from './format.js';
import { drawSparkline } from './sparkline.js';
import { patchIndexCharts } from '../components/homeIndexCharts.js';
import { patchHomeSectorBars } from '../components/homeSectorBars.js';
import { getCachedTickerIndices } from '../api/liveAdvanced.js';
import { getMarketBreadth } from '../analysis/enrich.js';
import { renderHeatmap } from '../components/heatmap.js';

/** Patch live price cells without full page re-render — keeps UI buttery on refresh. */
export function patchLivePrices() {
  const quotes = getQuotes();
  const tickerIndices = getCachedTickerIndices();

  document.querySelectorAll('[data-live-symbol]').forEach((el) => {
    const q = quotes.get(el.dataset.liveSymbol);
    if (!q) return;

    const priceEl = el.querySelector('[data-live="price"]');
    const chgEl = el.querySelector('[data-live="change"]');
    const pctEl = el.querySelector('[data-live="pct"]');

    if (priceEl) {
      const isIndex = priceEl.dataset.liveFormat === 'index';
      const formatted = isIndex ? fmtIndexPrice(q.price) : `$${fmtPrice(q.price)}`;
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

  document.querySelectorAll('.ticker-item').forEach((el) => {
    const sym = el.dataset.indexSymbol;
    const live = sym ? tickerIndices?.get(sym) : null;
    const etfQ = el.dataset.navSymbol ? quotes.get(el.dataset.navSymbol) : null;
    const price = live?.price ?? etfQ?.price;
    const changePct = live?.changePct ?? etfQ?.changePct;
    if (price == null) return;

    const priceEl = el.querySelector('[data-live="price"]');
    const pctEl = el.querySelector('[data-live="pct"]');
    if (priceEl) {
      priceEl.textContent = live ? fmtIndexPrice(price) : `$${fmtPrice(price)}`;
    }
    if (pctEl) {
      pctEl.textContent = fmtPct(changePct);
      pctEl.className = `ticker-chg ${changeClass(changePct)}`;
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

function patchHomeBreadth() {
  const bar = document.querySelector('.finviz-breadth');
  if (!bar) return;
  const b = getMarketBreadth(getQuotes());
  const set = (key, text) => {
    const el = bar.querySelector(`[data-live="${key}"]`);
    if (el) el.textContent = text;
  };
  set('adv-pct', `${b.advPct.toFixed(1)}%`);
  set('adv-count', `(${b.advancing})`);
  set('dec-count', `(${b.declining})`);
  set('dec-pct', `${b.decPct.toFixed(1)}%`);
  set('nh-pct', `${b.newHighPct.toFixed(1)}%`);
  set('nh-count', `(${b.newHigh})`);
  set('nl-pct', `${(100 - b.newHighPct).toFixed(1)}%`);
  set('sma50-pct', `${b.aboveSma50Pct.toFixed(1)}%`);
  set('sma50-above', `(${b.aboveSma50})`);
  set('sma50-below', `(${b.belowSma50})`);
  set('sma50-below-pct', `${(100 - b.aboveSma50Pct).toFixed(1)}%`);
  set('sma200-pct', `${b.aboveSma200Pct.toFixed(1)}%`);
  set('sma200-above', `(${b.aboveSma200})`);
  set('sma200-below', `(${b.belowSma200})`);
  set('sma200-below-pct', `${(100 - b.aboveSma200Pct).toFixed(1)}%`);
}

function patchHomeHeatmap() {
  const heatHost = document.getElementById('home-heatmap');
  if (!heatHost) return;
  renderHeatmap(heatHost, [...getQuotes().values()], (symbol) => {
    window.dispatchEvent(new CustomEvent('stockviz:select', { detail: symbol }));
  });
}

/** Refresh home-page charts, sector bars, breadth, and heatmap without full re-render. */
export function patchHomeCharts() {
  patchIndexCharts();
  patchHomeSectorBars(getQuotes());
  patchHomeBreadth();
  patchHomeHeatmap();
}