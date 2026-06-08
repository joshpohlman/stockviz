import { getQuotes, getFilters } from '../store.js';
import { applyFiltersFromQuotes } from './screenerFilters.js';
import { exportToCsv, exportToJson, exportApiPayload, copyJsonToClipboard } from '../utils/export.js';
import { toast } from '../components/toast.js';

export function renderExportApi(container) {
  const quotes = getQuotes();
  const filters = getFilters();
  const filtered = applyFiltersFromQuotes(quotes, filters);
  const all = [...quotes.values()];
  const sample = exportApiPayload(all.slice(0, 2));

  container.innerHTML = `
    <div class="page-header">
      <h1>Export &amp; API</h1>
      <p class="page-sub">Finviz Elite-style data export — CSV, JSON, and clipboard API payloads.</p>
    </div>

    <div class="export-actions panel">
      <h2 class="panel-title">Quick Export</h2>
      <div class="export-btn-row">
        <button class="btn-primary" id="exp-csv">Screener CSV (${filtered.length})</button>
        <button class="btn-primary" id="exp-csv-full">Full TA CSV (${all.length})</button>
        <button class="btn-secondary" id="exp-json">JSON Export (${all.length})</button>
        <button class="btn-secondary" id="exp-clipboard">Copy API JSON</button>
      </div>
      <p class="field-hint">Full CSV includes RSI, SMA, signals, patterns, and predictions.</p>
    </div>

    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">API Reference</h2>
        <div class="api-docs">
          <div class="api-endpoint">
            <code class="api-method">GET</code> <code>/api/v1/screener</code>
            <p>Returns full universe with technical analysis enrichment.</p>
          </div>
          <div class="api-endpoint">
            <code class="api-method">GET</code> <code>/api/v1/quote?symbol=AAPL</code>
            <p>Single stock quote with patterns, signals, and prediction.</p>
          </div>
          <div class="api-endpoint">
            <code class="api-method">GET</code> <code>/api/v1/signals?type=overbought</code>
            <p>Filter stocks by technical signal ID.</p>
          </div>
          <div class="api-endpoint">
            <code class="api-method">GET</code> <code>/api/v1/patterns?type=double_bottom</code>
            <p>Filter stocks by chart pattern ID.</p>
          </div>
          <div class="api-endpoint">
            <code class="api-method">GET</code> <code>/api/v1/export?format=json|csv</code>
            <p>Bulk export — use the buttons above for client-side export.</p>
          </div>
        </div>
        <p class="field-hint">Live REST API requires a backend. Client-side export works now with zero setup.</p>
      </section>

      <section class="panel">
        <h2 class="panel-title">Sample API Response</h2>
        <pre class="api-sample"><code>${JSON.stringify(sample, null, 2).slice(0, 2800)}…</code></pre>
        <button class="btn-ghost btn-sm" id="exp-sample">Download Sample JSON</button>
      </section>
    </div>

    <section class="panel">
      <h2 class="panel-title">Field Reference</h2>
      <table class="data-table finviz-tbl">
        <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>ta.rsi</td><td>number</td><td>14-period RSI</td></tr>
          <tr><td>ta.sma50 / sma200</td><td>number</td><td>Simple moving averages</td></tr>
          <tr><td>signals[]</td><td>array</td><td>Active TA signals (Overbought, Golden Cross…)</td></tr>
          <tr><td>patterns[]</td><td>array</td><td>Detected chart patterns with confidence</td></tr>
          <tr><td>prediction</td><td>object</td><td>direction, confidence, priceTarget, factors</td></tr>
          <tr><td>fundamentals</td><td>object</td><td>P/E, EPS, Beta, Dividend</td></tr>
        </tbody>
      </table>
    </section>
  `;

  container.querySelector('#exp-csv')?.addEventListener('click', () => {
    exportToCsv(filtered, 'stockviz-screener.csv', false);
    toast(`Exported ${filtered.length} rows`, 'success');
  });

  container.querySelector('#exp-csv-full')?.addEventListener('click', () => {
    exportToCsv(all, 'stockviz-full-ta.csv', true);
    toast(`Exported ${all.length} rows with TA`, 'success');
  });

  container.querySelector('#exp-json')?.addEventListener('click', () => {
    exportToJson(all);
    toast(`Exported ${all.length} stocks as JSON`, 'success');
  });

  container.querySelector('#exp-clipboard')?.addEventListener('click', async () => {
    try {
      const n = await copyJsonToClipboard(all);
      toast(`Copied ${n} stocks to clipboard`, 'success');
    } catch {
      toast('Clipboard failed — use JSON download', 'error');
    }
  });

  container.querySelector('#exp-sample')?.addEventListener('click', () => {
    exportToJson(all.slice(0, 5), 'stockviz-api-sample.json');
  });
}