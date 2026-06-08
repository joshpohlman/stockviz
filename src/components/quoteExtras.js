import { formatFundValue } from '../analysis/fundamentals.js';
import { generateStockSummary } from './aiSummary.js';

export function renderFinancialsStatements(financials, container) {
  if (!financials?.income?.length) {
    container.innerHTML = '<p class="muted">No financial statement data — add FMP key in Settings.</p>';
    return;
  }

  const renderTable = (title, rows, cols) => `
    <h4 class="fund-section-title">${title}</h4>
    <table class="data-table compact finviz-tbl fin-stmt-tbl">
      <thead><tr><th>Period</th>${cols.map((c) => `<th>${c.label}</th>`).join('')}</tr></thead>
      <tbody>
        ${rows.map((r) => `
          <tr>
            <td>${r.date?.slice(0, 4) || r.calendarYear || '—'}</td>
            ${cols.map((c) => `<td>${formatFundValue(r[c.key], c.fmt)}</td>`).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  container.innerHTML = `
    <div class="fin-statements">
      ${renderTable('Income Statement', financials.income, [
        { key: 'revenue', label: 'Revenue', fmt: 'mcap' },
        { key: 'grossProfit', label: 'Gross Profit', fmt: 'mcap' },
        { key: 'netIncome', label: 'Net Income', fmt: 'mcap' },
        { key: 'eps', label: 'EPS', fmt: 'money' },
      ])}
      ${renderTable('Balance Sheet', financials.balance, [
        { key: 'totalAssets', label: 'Assets', fmt: 'mcap' },
        { key: 'totalLiabilities', label: 'Liabilities', fmt: 'mcap' },
        { key: 'totalStockholdersEquity', label: 'Equity', fmt: 'mcap' },
      ])}
      ${renderTable('Cash Flow', financials.cash, [
        { key: 'operatingCashFlow', label: 'Operating CF', fmt: 'mcap' },
        { key: 'freeCashFlow', label: 'Free CF', fmt: 'mcap' },
        { key: 'capitalExpenditure', label: 'CapEx', fmt: 'mcap' },
      ])}
    </div>
  `;
}

export function renderFilingsList(filings, container) {
  if (!filings.length) {
    container.innerHTML = '<p class="muted">No SEC filings available.</p>';
    return;
  }
  container.innerHTML = `
    <ul class="filings-list">
      ${filings.map((f) => `
        <li><a href="${f.url}" target="_blank" rel="noopener">
          <span class="filing-type">${f.type}</span>
          <span class="filing-date">${f.date}</span>
          <span class="filing-title">${f.title}</span>
        </a></li>
      `).join('')}
    </ul>
  `;
}

export function renderAiSummaryPanel(quote, news, container) {
  container.innerHTML = `
    <div class="ai-summary panel">
      <p class="ai-summary-text">${generateStockSummary(quote, news)}</p>
      <p class="field-hint">Auto-generated from live quote, TA, and news — not financial advice.</p>
    </div>
  `;
}