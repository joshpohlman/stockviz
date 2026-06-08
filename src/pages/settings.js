import { getSettings, updateSettings } from '../store.js';
import { validateApiKey } from '../api.js';

export function renderSettings(container) {
  const s = getSettings();

  container.innerHTML = `
    <div class="page-header">
      <h1>Settings</h1>
      <p class="page-sub">Connect a free Finnhub API key for live quotes, or use simulated data for development.</p>
    </div>

    <form class="settings-form panel" id="settings-form">
      <fieldset>
        <legend>Data Source</legend>
        <div class="field">
          <label for="apiKey">Finnhub API Key</label>
          <div class="input-row">
            <input type="password" id="apiKey" name="apiKey" placeholder="Paste your key…" value="${esc(s.apiKey)}" autocomplete="off" />
            <button type="button" class="btn-secondary" id="test-api">Test Connection</button>
          </div>
          <p class="field-hint">
            Get a free key at <a href="https://finnhub.io/register" target="_blank" rel="noopener">finnhub.io/register</a>
            (60 calls/min). Leave blank to use simulated live data.
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
            Force simulated data (ignore API key)
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
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const watchlist = fd
      .get('watchlist')
      .split(',')
      .map((x) => x.trim().toUpperCase())
      .filter(Boolean);

    updateSettings({
      apiKey: fd.get('apiKey'),
      refreshInterval: Number(fd.get('refreshInterval')) || 30,
      useMockData: fd.get('useMockData') === 'on',
      watchlist,
    });

    showSaved(container);
    window.dispatchEvent(new CustomEvent('stockviz:settings-saved'));
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