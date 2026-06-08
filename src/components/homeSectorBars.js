import { SECTORS } from '../data/universeStore.js';
import { drawSectorBarChart } from '../utils/sparkline.js';

export function buildSectorStats(quotes) {
  const rows = [...quotes.values()];
  return SECTORS.map((sector) => {
    const inSector = rows.filter((r) => r.sector === sector);
    const avg = inSector.length
      ? inSector.reduce((s, x) => s + x.changePct, 0) / inSector.length
      : 0;
    return { label: sector, value: avg, count: inSector.length };
  })
    .filter((s) => s.count > 0)
    .sort((a, b) => b.value - a.value);
}

export function renderHomeSectorBars(container, quotes) {
  const sectors = buildSectorStats(quotes);
  if (!sectors.length) return;

  container.innerHTML = `
    <div class="home-sector-bars-head">
      <h2 class="finviz-col-title"><a href="#/groups">Sector Performance</a></h2>
      <span class="home-sector-bars-sub">Avg % change today</span>
    </div>
    <canvas class="home-sector-bars-canvas" aria-label="Sector performance bar chart"></canvas>
  `;

  const canvas = container.querySelector('.home-sector-bars-canvas');
  if (!canvas) return;

  const paint = () => {
    const w = container.clientWidth || 600;
    drawSectorBarChart(canvas, sectors, { width: w, height: 150 });
  };

  paint();
  const ro = new ResizeObserver(paint);
  ro.observe(container);
  return () => ro.disconnect();
}

/** Repaint sector bars from latest quotes without rebuilding the panel. */
export function patchHomeSectorBars(quotes) {
  const canvas = document.querySelector('.home-sector-bars-canvas');
  if (!canvas) return;
  const sectors = buildSectorStats(quotes);
  if (!sectors.length) return;
  const w = canvas.parentElement?.clientWidth || 600;
  drawSectorBarChart(canvas, sectors, { width: w, height: 150 });
}