import { drawAreaChart } from '../utils/sparkline.js';
import { fmtPct, changeClass } from '../utils/format.js';

export function renderHomeIndexCharts(container, indices) {
  if (!indices?.length) return;

  container.innerHTML = `
    <div class="home-indices-scroll">
      ${indices.map((idx, i) => `
        <article class="home-index-card ${changeClass(idx.changePct)}" data-symbol="${idx.navigateSymbol}" data-idx="${i}" title="Open ${idx.label}">
          <div class="home-index-head">
            <span class="home-index-label">${idx.label}</span>
            <span class="home-index-price" data-live="price">${formatIndexPrice(idx.price, idx.decimals)}</span>
            <span class="home-index-chg ${changeClass(idx.changePct)}" data-live="pct">${fmtPct(idx.changePct)}</span>
          </div>
          <canvas class="home-index-chart" data-chart-idx="${i}" aria-hidden="true"></canvas>
        </article>
      `).join('')}
    </div>
  `;

  const canvases = container.querySelectorAll('.home-index-chart');
  const observers = [];

  indices.forEach((idx, i) => {
    const canvas = canvases[i];
    if (!canvas) return;

    const paint = () => {
      const w = canvas.parentElement?.clientWidth || 180;
      drawAreaChart(canvas, idx.history, {
        width: w,
        height: 72,
        positive: idx.changePct >= 0,
      });
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

function formatIndexPrice(price, decimals = 2) {
  if (!price) return '—';
  if (price >= 10000) return price.toLocaleString('en-US', { maximumFractionDigits: 0 });
  if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return price.toFixed(decimals);
}