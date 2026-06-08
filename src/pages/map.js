import { getQuotes, getFilters } from '../store.js';
import { renderHeatmap } from '../components/heatmap.js';
import { applyFiltersFromQuotes } from './screenerFilters.js';

export function renderMap(container) {
  const quotes = getQuotes();
  const filters = getFilters();
  const stocks = applyFiltersFromQuotes(quotes, filters);

  container.innerHTML = `
    <div class="page-header">
      <h1>Market Heat Map</h1>
      <p class="page-sub">Sector treemap sized by market cap, colored by daily change. Uses screener filters.</p>
    </div>
    <div id="heatmap-root" class="heatmap-root"></div>
  `;

  const root = container.querySelector('#heatmap-root');
  renderHeatmap(root, stocks, (symbol) => {
    window.dispatchEvent(new CustomEvent('stockviz:select', { detail: symbol }));
  });
}