import { FUNDAMENTAL_SECTIONS, formatFundValue, getFieldValue } from '../analysis/fundamentals.js';
import { changeClass } from '../utils/format.js';

let activeTab = 'key';

export function renderFundamentalsPanel(quote, container) {
  const f = quote.fundamentals || {};
  const ta = quote.ta || {};

  container.innerHTML = `
    <div class="fund-panel">
      <div class="fund-tabs" role="tablist">
        ${FUNDAMENTAL_SECTIONS.map((s) => `
          <button type="button" class="fund-tab ${activeTab === s.id ? 'active' : ''}" data-tab="${s.id}" role="tab">
            ${s.title}
          </button>
        `).join('')}
      </div>
      <div class="fund-body">
        ${FUNDAMENTAL_SECTIONS.map((s) => `
          <section class="fund-section ${activeTab === s.id ? 'active' : ''}" data-section="${s.id}">
            <h4 class="fund-section-title">${s.title}</h4>
            <div class="fund-grid">
              ${s.fields.map((field) => {
                const raw = getFieldValue(field, quote, f, ta);
                const formatted = formatFundValue(raw, field.fmt, quote, ta);
                const cls = field.fmt === 'pct' && raw != null ? changeClass(raw) : '';
                return `
                  <div class="fund-row">
                    <span class="fund-label">${field.label}</span>
                    <span class="fund-value ${cls}">${formatted}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
        `).join('')}
      </div>
      <p class="fund-disclaimer">Fundamental data — simulated unless Finnhub API key provides live metrics.</p>
    </div>
  `;

  container.querySelectorAll('.fund-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      renderFundamentalsPanel(quote, container);
    });
  });
}