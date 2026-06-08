import { heatColor } from '../utils/format.js';

export function renderHeatmap(container, stocks, onSelect) {
  if (!stocks.length) {
    container.innerHTML = '<p class="empty-state">No stocks match current filters.</p>';
    return;
  }

  const bySector = new Map();
  for (const s of stocks) {
    const sector = s.sector || 'Other';
    if (!bySector.has(sector)) bySector.set(sector, []);
    bySector.get(sector).push(s);
  }

  const sectors = [...bySector.entries()].sort((a, b) => {
    const avgA = a[1].reduce((sum, x) => sum + x.changePct, 0) / a[1].length;
    const avgB = b[1].reduce((sum, x) => sum + x.changePct, 0) / b[1].length;
    return avgB - avgA;
  });

  container.innerHTML = `
    <div class="heatmap-legend">
      <span class="legend-label">-5%</span>
      <div class="legend-gradient"></div>
      <span class="legend-label">+5%</span>
    </div>
    <div class="treemap">
      ${sectors.map(([sector, items]) => renderSectorBlock(sector, items)).join('')}
    </div>
  `;

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => onSelect?.(el.dataset.symbol));
  });
}

function renderSectorBlock(sector, items) {
  const totalCap = items.reduce((s, x) => s + (x.marketCap || 1), 0);
  const avgChange = items.reduce((s, x) => s + x.changePct, 0) / items.length;
  const sectorFlex = Math.max(1, Math.round(totalCap / 50_000_000_000));

  return `
    <div class="sector-block" style="flex:${sectorFlex}">
      <div class="sector-header" style="background:${heatColor(avgChange)}">
        <span class="sector-name">${sector}</span>
        <span class="sector-avg">${avgChange >= 0 ? '+' : ''}${avgChange.toFixed(2)}%</span>
      </div>
      <div class="sector-tiles">
        ${items
          .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0))
          .map((s) => renderTile(s, totalCap))
          .join('')}
      </div>
    </div>
  `;
}

function renderTile(stock, sectorCap) {
  const weight = (stock.marketCap || 1) / sectorCap;
  const flex = Math.max(1, Math.round(weight * 20));
  const pct = stock.changePct ?? 0;
  return `
    <button
      class="heat-tile"
      data-symbol="${stock.symbol}"
      style="flex:${flex};background:${heatColor(pct)}"
      title="${stock.name}: ${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%"
    >
      <span class="tile-symbol">${stock.symbol}</span>
      <span class="tile-pct">${pct >= 0 ? '+' : ''}${pct.toFixed(1)}%</span>
    </button>
  `;
}