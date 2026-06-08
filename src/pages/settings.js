import { getSettings, updateSettings } from '../store.js';
import { validateApiKey, validateFmpApiKey } from '../api.js';
import {
  isNotificationSupported, getNotificationPermission, requestNotificationPermission,
} from '../utils/notifications.js';
import { clearMarketWidgetCache } from '../api/marketExtras.js';

export function renderSettings(container) {
  const s = getSettings();

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
        <li><strong>Extensible</strong> — add symbols in <code>src/data/universe.js</code></li>
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
    updateSettings({
      fmpApiKey: fd.get('fmpApiKey'),
      apiKey: fd.get('apiKey'),
      refreshInterval: Number(fd.get('refreshInterval')) || 30,
      useMockData: fd.get('useMockData') === 'on',
      watchlist,
      pushNotifications,
      alertSound: fd.get('alertSound') === 'on',
    });

    clearMarketWidgetCache();

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

function showSaved(container) {
  let toast = container.querySelector('.save-toast');
  if (!toast) {
    toast = document.createElement('p');
    toast.className = 'save-toast';
    container.querySelector('.settings-form')?.appendChild(toast);
  }
  toast.textContent = 'Settings saved.';
  setTimeout(() => toast.remove(), 2500);
}

function esc(v) {
  return String(v ?? '').replace(/"/g, '&quot;');
}