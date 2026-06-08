import { getSettings, updateSettings } from '../store.js';
import { validateApiKey, validateFmpApiKey, clearQuoteCache } from '../api.js';
import { toast } from '../components/toast.js';
import {
  isNotificationSupported, getNotificationPermission, requestNotificationPermission,
} from '../utils/notifications.js';
import { clearMarketWidgetCache } from '../api/marketExtras.js';
import { clearLiveAdvancedCache } from '../api/liveAdvanced.js';
import { clearHomeIndicesCache } from '../api/homeIndices.js';
import { auditFmpEndpoints } from '../api/fmpHealth.js';
import { getUniverseMeta, refreshUniverse } from '../data/universeStore.js';
import { downloadSettingsBundle, copySettingsBundle, importFromEncoded } from '../utils/settingsBundle.js';

export function renderSettings(container) {
  const s = getSettings();
  const uni = getUniverseMeta();

  container.innerHTML = `
    <div class="page-header">
      <h1>Settings</h1>
      <p class="page-sub">Connect an API key for live quotes and market data, or use simulated data for development.</p>
    </div>

    <form class="settings-form panel" id="settings-form">
      <fieldset>
        <legend>Data Source</legend>
        <div class="field">
          <label for="fmpApiKey">Financial Modeling Prep API Key</label>
          <div class="input-row">
            <input type="password" id="fmpApiKey" name="fmpApiKey" placeholder="Paste your FMP key…" value="${esc(s.fmpApiKey)}" autocomplete="off" />
            <button type="button" class="btn-secondary" id="test-fmp-api">Test Connection</button>
          </div>
          <p class="field-hint">
            Get a key at <a href="https://site.financialmodelingprep.com/developer/docs" target="_blank" rel="noopener">financialmodelingprep.com</a>.
            FMP powers quotes, fundamentals, earnings calendar, insider trades, futures, and forex.
          </p>
          <p class="api-status" id="fmp-api-status"></p>
          <div class="export-btn-row" style="margin-top:0.5rem">
            <button type="button" class="btn-secondary" id="audit-fmp-api">Test All FMP Data</button>
          </div>
          <div id="fmp-audit-results" class="fmp-audit-results" hidden></div>
        </div>

        <div class="field">
          <label>Stock Universe</label>
          <p class="field-hint">
            Current: <strong id="universe-label">${esc(uni.label)}</strong>
            (${uni.source === 'sp500' ? 'loaded from FMP, cached 7 days' : 'bundled list — add FMP key for full S&amp;P 500'})
          </p>
          <div class="export-btn-row">
            <button type="button" class="btn-secondary" id="refresh-universe" ${s.useMockData || !s.fmpApiKey?.trim() ? 'disabled' : ''}>Refresh S&amp;P 500 List</button>
          </div>
          <p class="field-hint">S&amp;P 500 uses ~13 batch quote calls on refresh. Use 60s+ refresh interval for large universes.</p>
        </div>

        <div class="field">
          <label for="apiKey">Finnhub API Key (optional fallback)</label>
          <div class="input-row">
            <input type="password" id="apiKey" name="apiKey" placeholder="Paste your Finnhub key…" value="${esc(s.apiKey)}" autocomplete="off" />
            <button type="button" class="btn-secondary" id="test-api">Test Connection</button>
          </div>
          <p class="field-hint">
            Get a free key at <a href="https://finnhub.io/register" target="_blank" rel="noopener">finnhub.io/register</a>
            (60 calls/min). Used only when no FMP key is set.
          </p>
          <p class="api-status" id="api-status"></p>
        </div>

        <div class="field">
          <label for="refreshInterval">Refresh Interval (seconds)</label>
          <input type="number" id="refreshInterval" name="refreshInterval" min="10" max="300" value="${s.refreshInterval}" />
        </div>

        <div class="field checkbox-field">
          <label>
            <input type="checkbox" name="useMockData" ${s.useMockData ? 'checked' : ''} />
            Force simulated data (ignore API keys)
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Notifications</legend>
        <div class="field checkbox-field">
          <label>
            <input type="checkbox" name="pushNotifications" ${s.pushNotifications ? 'checked' : ''} ${!isNotificationSupported() ? 'disabled' : ''} />
            Browser push notifications for alerts
          </label>
          ${isNotificationSupported() ? `<p class="field-hint">Permission: <strong>${getNotificationPermission()}</strong>
            ${getNotificationPermission() === 'default' ? ' — save settings to request permission' : ''}</p>` : '<p class="field-hint">Not supported in this browser.</p>'}
        </div>
        <div class="field checkbox-field">
          <label>
            <input type="checkbox" name="alertSound" ${s.alertSound !== false ? 'checked' : ''} />
            In-app toast notifications (always on when alerts fire)
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Display</legend>
        <div class="field">
          <label for="chartTheme">Chart Theme</label>
          <select id="chartTheme" name="chartTheme">
            <option value="dark" ${s.chartTheme !== 'light' ? 'selected' : ''}>Dark</option>
            <option value="light" ${s.chartTheme === 'light' ? 'selected' : ''}>Light</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Alert Delivery</legend>
        <div class="field">
          <label for="alertWebhookUrl">Webhook URL (Telegram, Discord, IFTTT)</label>
          <input type="url" id="alertWebhookUrl" name="alertWebhookUrl" placeholder="https://…" value="${esc(s.alertWebhookUrl)}" />
          <p class="field-hint">POST JSON when alerts fire. Works with Telegram bot webhooks and Discord.</p>
        </div>
      </fieldset>

      <fieldset>
        <legend>Sync Settings (cross-device)</legend>
        <p class="field-hint">Export your API keys and preferences to use on another computer.</p>
        <div class="export-btn-row">
          <button type="button" class="btn-secondary" id="export-settings">Download JSON</button>
          <button type="button" class="btn-secondary" id="copy-settings">Copy Sync Code</button>
          <button type="button" class="btn-secondary" id="import-settings">Import Sync Code</button>
        </div>
      </fieldset>

      <fieldset>
        <legend>Watchlist</legend>
        <div class="field">
          <label for="watchlist">Symbols (comma-separated)</label>
          <input type="text" id="watchlist" name="watchlist" value="${esc(s.watchlist.join(', '))}" placeholder="AAPL, MSFT, NVDA" />
        </div>
      </fieldset>

      <button type="submit" class="btn-primary">Save Settings</button>
    </form>

    <section class="panel about-panel">
      <h2>About StockViz</h2>
      <p>Finviz-inspired stock screener you can customize and extend. Built with Vite + vanilla JS.</p>
      <ul>
        <li><strong>Screener</strong> — filter by sector, change %, volume, market cap</li>
        <li><strong>Heat Map</strong> — sector treemap with live color updates</li>
        <li><strong>Quote Panel</strong> — click any ticker for details</li>
        <li><strong>S&amp;P 500</strong> — full index when FMP key is set (cached locally)</li>
      </ul>
    </section>
  `;

  const form = container.querySelector('#settings-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const watchlist = fd
      .get('watchlist')
      .split(',')
      .map((x) => x.trim().toUpperCase())
      .filter(Boolean);

    const pushNotifications = fd.get('pushNotifications') === 'on';
    const fmpKey = String(fd.get('fmpApiKey') || '').trim();
    const useMockData = fd.get('useMockData') === 'on';
    if (useMockData && fmpKey) {
      toast('Simulated data is ON — prices will be fake. Uncheck "Force simulated data" for live FMP quotes.', 'error', 8000);
    }
    updateSettings({
      fmpApiKey: fd.get('fmpApiKey'),
      apiKey: fd.get('apiKey'),
      refreshInterval: Number(fd.get('refreshInterval')) || 30,
      useMockData,
      watchlist,
      pushNotifications,
      alertSound: fd.get('alertSound') === 'on',
      chartTheme: fd.get('chartTheme') || 'dark',
      alertWebhookUrl: fd.get('alertWebhookUrl'),
    });

    clearMarketWidgetCache();
    clearLiveAdvancedCache();
    clearHomeIndicesCache();
    clearQuoteCache();

    if (pushNotifications && getNotificationPermission() === 'default') {
      await requestNotificationPermission();
    }

    showSaved(container);
    window.dispatchEvent(new CustomEvent('stockviz:settings-saved'));
  });

  container.querySelector('#test-fmp-api')?.addEventListener('click', async () => {
    const key = container.querySelector('#fmpApiKey').value;
    const status = container.querySelector('#fmp-api-status');
    status.textContent = 'Testing…';
    status.className = 'api-status';
    const result = await validateFmpApiKey(key);
    status.textContent = result.message;
    status.className = `api-status ${result.valid ? 'ok' : 'err'}`;
  });

  container.querySelector('#audit-fmp-api')?.addEventListener('click', async () => {
    const key = container.querySelector('#fmpApiKey').value;
    const status = container.querySelector('#fmp-api-status');
    const resultsEl = container.querySelector('#fmp-audit-results');
    const btn = container.querySelector('#audit-fmp-api');
    status.textContent = 'Running endpoint audit (~15 API calls)…';
    status.className = 'api-status';
    btn.disabled = true;
    resultsEl.hidden = true;

    const audit = await auditFmpEndpoints(key);
    status.textContent = audit.message;
    status.className = `api-status ${audit.valid ? 'ok' : 'err'}`;
    resultsEl.hidden = false;
    resultsEl.innerHTML = `
      <table class="fmp-audit-table">
        <thead><tr><th>Endpoint</th><th>Status</th><th>Time</th><th>Detail</th></tr></thead>
        <tbody>
          ${audit.results.map((r) => `
            <tr class="${r.ok ? 'ok' : 'err'}">
              <td>${esc(r.name)}</td>
              <td>${r.ok ? '✓ Live' : '✗ Failed'}</td>
              <td>${r.ms}ms</td>
              <td>${esc(r.detail)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    btn.disabled = false;
  });

  container.querySelector('#refresh-universe')?.addEventListener('click', async () => {
    const btn = container.querySelector('#refresh-universe');
    const label = container.querySelector('#universe-label');
    btn.disabled = true;
    btn.textContent = 'Loading…';
    const settings = {
      ...getSettings(),
      fmpApiKey: container.querySelector('#fmpApiKey').value,
      useMockData: container.querySelector('[name="useMockData"]').checked,
    };
    const meta = await refreshUniverse(settings);
    label.textContent = meta.label;
    btn.textContent = 'Refresh S&P 500 List';
    btn.disabled = settings.useMockData || !settings.fmpApiKey?.trim();
    showSaved(container, `Universe updated: ${meta.label}`);
    window.dispatchEvent(new CustomEvent('stockviz:settings-saved'));
  });

  container.querySelector('#export-settings')?.addEventListener('click', () => downloadSettingsBundle());
  container.querySelector('#copy-settings')?.addEventListener('click', async () => {
    await copySettingsBundle();
    showSaved(container, 'Sync code copied to clipboard.');
  });
  container.querySelector('#import-settings')?.addEventListener('click', () => {
    const code = prompt('Paste your sync code:');
    if (!code) return;
    try {
      importFromEncoded(code);
      showSaved(container, 'Settings imported — reloading…');
      setTimeout(() => window.dispatchEvent(new CustomEvent('stockviz:settings-saved')), 500);
    } catch (e) {
      alert(e.message || 'Import failed');
    }
  });

  container.querySelector('#test-api')?.addEventListener('click', async () => {
    const key = container.querySelector('#apiKey').value;
    const status = container.querySelector('#api-status');
    status.textContent = 'Testing…';
    status.className = 'api-status';
    const result = await validateApiKey(key);
    status.textContent = result.message;
    status.className = `api-status ${result.valid ? 'ok' : 'err'}`;
  });
}

function showSaved(container, msg = 'Settings saved.') {
  let toast = container.querySelector('.save-toast');
  if (!toast) {
    toast = document.createElement('p');
    toast.className = 'save-toast';
    container.querySelector('.settings-form')?.appendChild(toast);
  }
  toast.textContent = msg;
  setTimeout(() => toast.remove(), 2500);
}

function esc(v) {
  return String(v ?? '').replace(/"/g, '&quot;');
}