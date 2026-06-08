import { EARNINGS_CALENDAR, ECON_CALENDAR } from '../data/marketData.js';
import { getSettings } from '../store.js';
import { fetchMarketWidgets } from '../api.js';
import { fmtPrice } from '../utils/format.js';

export async function renderCalendar(container) {
  const settings = getSettings();
  const widgets = await fetchMarketWidgets(settings).catch(() => null);
  const earnings = widgets?.earnings?.length ? widgets.earnings : EARNINGS_CALENDAR;
  const economic = widgets?.economic?.length ? widgets.economic : ECON_CALENDAR;
  const live = !!widgets?.earnings?.length;

  container.innerHTML = `
    <div class="page-header">
      <h1>Economic &amp; Earnings Calendar</h1>
      ${live ? '<p class="page-sub">Live data from Financial Modeling Prep.</p>' : '<p class="page-sub">Simulated data — add an FMP API key in Settings for live calendars.</p>'}
    </div>
    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">Earnings</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Symbol</th><th>Date</th><th>EPS Est.</th><th>Cap</th></tr></thead>
          <tbody>
            ${earnings.map((e) => `
              <tr class="clickable" data-symbol="${e.symbol}">
                <td class="sym">${e.symbol}</td>
                <td>${e.date}</td>
                <td>$${fmtPrice(e.epsEst)}</td>
                <td>${e.cap}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>
      <section class="panel">
        <h2 class="panel-title">Economic Events</h2>
        <table class="data-table finviz-tbl">
          <thead><tr><th>Date</th><th>Time</th><th>Impact</th><th>Event</th><th>Expected</th></tr></thead>
          <tbody>
            ${economic.map((e) => `
              <tr>
                <td>${e.date}</td>
                <td>${e.time}</td>
                <td><span class="impact impact-${e.impact}">${e.impact}</span></td>
                <td>${e.event}</td>
                <td>${e.expected}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>
    </div>
  `;

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}