import { drawMiniCandles } from '../utils/sparkline.js';
import { fmtPct, changeClass, fmtIndexPrice } from '../utils/format.js';
import { getCachedTickerIndices } from '../api/liveAdvanced.js';

let indexChartState = [];

export function renderHomeIndexCharts(container, indices) {
  if (!indices?.length) return;

  indexChartState = indices.map((idx) => ({
    ...idx,
    history: idx.history.map((c) => ({ ...c })),
  }));

  container.innerHTML = `
    <div class="home-indices-scroll">
      ${indices.map((idx, i) => `
        <article class="home-index-card ${changeClass(idx.changePct)}" data-live-symbol="${idx.navigateSymbol}" data-symbol="${idx.navigateSymbol}" data-idx="${i}" title="Open ${idx.label}">
          <div class="home-index-head">
            <span class="home-index-label">${idx.label}</span>
            <span class="home-index-price" data-live="price" data-live-format="index">${fmtIndexPrice(idx.price, idx.decimals)}</span>
            <span class="home-index-chg ${changeClass(idx.changePct)}" data-live="pct">${fmtPct(idx.changePct)}</span>
          </div>
          <canvas class="home-index-chart" data-chart-idx="${i}" aria-hidden="true"></canvas>
        </article>
      `).join('')}
    </div>
  `;

  const canvases = container.querySelectorAll('.home-index-chart');
  const observers = [];

  indexChartState.forEach((idx, i) => {
    const canvas = canvases[i];
    if (!canvas) return;

    const paint = () => {
      const w = canvas.parentElement?.clientWidth || 180;
      drawMiniCandles(canvas, idx.history, { width: w, height: 72 });
    };

    paint();
    const ro = new ResizeObserver(paint);
    ro.observe(canvas.parentElement);
    observers.push(ro);
  });

  container.querySelectorAll('.home-index-card').forEach((card) => {
    card.addEventListener('click', () => {
      const sym = card.dataset.symbol;
      if (sym) {
        window.dispatchEvent(new CustomEvent('stockviz:select', { detail: sym }));
      }
    });
  });

  return () => observers.forEach((ro) => ro.disconnect());
}

/** Update index card prices and extend the last candle with live data. */
export function patchIndexCharts(quotes) {
  if (!indexChartState.length) return;

  const tickerIndices = getCachedTickerIndices();

  indexChartState.forEach((idx, i) => {
    const live = idx.etf ? tickerIndices?.get(idx.etf) : null;
    const q = idx.etf ? quotes.get(idx.etf) : null;
    const price = live?.price ?? q?.price ?? idx.price;
    const changePct = live?.changePct ?? q?.changePct ?? idx.changePct;

    const card = document.querySelector(`.home-index-card[data-idx="${i}"]`);
    if (!card) return;

    card.className = `home-index-card ${changeClass(changePct)}`;
    const priceEl = card.querySelector('[data-live="price"]');
    const pctEl = card.querySelector('[data-live="pct"]');
    if (priceEl) priceEl.textContent = fmtIndexPrice(price, idx.decimals);
    if (pctEl) {
      pctEl.textContent = fmtPct(changePct);
      pctEl.className = `home-index-chg ${changeClass(changePct)}`;
    }

    const history = idx.history.map((c) => ({ ...c }));
    if (history.length) {
      const last = history[history.length - 1];
      last.c = price;
      last.h = Math.max(last.h ?? price, price);
      last.l = Math.min(last.l ?? price, price);
      idx.history = history;
    }

    const canvas = card.querySelector('.home-index-chart');
    if (canvas) {
      const w = card.clientWidth || 180;
      drawMiniCandles(canvas, history, { width: w, height: 72 });
    }
  });
}