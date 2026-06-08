import {
  getAlerts, addAlert, removeAlert, toggleAlert, clearTriggeredAlerts, rearmAlert, rearmAllAlerts,
} from '../store.js';
import { getUniverse, findUniverseStock } from '../data/universeStore.js';
import { ALERT_TYPES } from '../alerts/alertEngine.js';
import { SIGNAL_GROUPS, PATTERN_GROUPS } from '../data/marketData.js';
import { toast } from '../components/toast.js';

export function renderAlerts(container) {
  const alerts = getAlerts();
  const active = alerts.filter((a) => a.active && !a.triggered);
  const triggered = alerts.filter((a) => a.triggered);

  container.innerHTML = `
    <div class="page-header">
      <h1>Custom Alerts</h1>
      <p class="page-sub">Price, RSI, signal, pattern, and prediction alerts — checked every refresh.</p>
    </div>

    <form class="alert-form panel" id="alert-form">
      <h2 class="panel-title">Create Alert</h2>
      <div class="form-row">
        <div class="filter-group">
          <label>Symbol</label>
          <input list="alert-symbols" name="symbol" placeholder="AAPL" required />
          <datalist id="alert-symbols">${getUniverse().map((s) => `<option value="${s.symbol}">`).join('')}</datalist>
        </div>
        <div class="filter-group">
          <label>Condition</label>
          <select name="type" id="alert-type">
            ${ALERT_TYPES.map((t) => `<option value="${t.id}">${t.label}</option>`).join('')}
          </select>
        </div>
        <div class="filter-group" id="alert-value-group">
          <label>Value</label>
          <input type="text" name="value" id="alert-value" placeholder="200" />
        </div>
        <div class="filter-group">
          <label>Note (optional)</label>
          <input type="text" name="note" placeholder="Breakout watch" />
        </div>
        <button type="submit" class="btn-primary">Create Alert</button>
      </div>
    </form>

    <div class="two-col">
      <section class="panel">
        <h2 class="panel-title">Active Alerts (${active.length})</h2>
        ${active.length ? renderAlertTable(active, false) : '<p class="muted">No active alerts.</p>'}
      </section>
      <section class="panel">
        <div class="panel-title-row">
          <h2 class="panel-title">Triggered (${triggered.length})</h2>
          ${triggered.length ? `
            <div class="panel-actions">
              <button class="btn-ghost btn-sm" id="rearm-all">Re-arm All</button>
              <button class="btn-ghost btn-sm" id="clear-triggered">Clear All</button>
            </div>
          ` : ''}
        </div>
        ${triggered.length ? renderAlertTable(triggered, true) : '<p class="muted">None triggered yet.</p>'}
      </section>
    </div>
  `;

  const typeSel = container.querySelector('#alert-type');
  const valueGroup = container.querySelector('#alert-value-group');
  const valueInput = container.querySelector('#alert-value');

  function updateValueField() {
    const type = ALERT_TYPES.find((t) => t.id === typeSel.value);
    if (!type) return;
    if (type.valueType === 'signal') {
      valueInput.outerHTML = `<select name="value" id="alert-value">${SIGNAL_GROUPS.map((s) => `<option value="${s.id}">${s.label}</option>`).join('')}</select>`;
    } else if (type.valueType === 'pattern') {
      valueInput.outerHTML = `<select name="value" id="alert-value">${PATTERN_GROUPS.map((p) => `<option value="${p.id}">${p.label}</option>`).join('')}</select>`;
    } else if (type.valueType === 'prediction') {
      valueInput.outerHTML = `<select name="value" id="alert-value"><option value="bullish">Bullish</option><option value="bearish">Bearish</option><option value="neutral">Neutral</option></select>`;
    } else {
      if (valueGroup.querySelector('select')) {
        valueGroup.innerHTML = `<label>Value</label><input type="text" name="value" id="alert-value" placeholder="${type.placeholder || ''}" />`;
      } else {
        container.querySelector('#alert-value').placeholder = type.placeholder || '';
      }
    }
  }
  typeSel?.addEventListener('change', updateValueField);
  updateValueField();

  container.querySelector('#alert-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const symbol = fd.get('symbol').toString().trim().toUpperCase();
    if (!findUniverseStock(symbol)) {
      toast('Symbol not in universe', 'error');
      return;
    }
    addAlert({
      symbol,
      type: fd.get('type'),
      value: fd.get('value'),
      note: fd.get('note') || '',
    });
    toast(`Alert created for ${symbol}`, 'success');
    e.target.reset();
  });

  container.querySelector('#clear-triggered')?.addEventListener('click', clearTriggeredAlerts);
  container.querySelector('#rearm-all')?.addEventListener('click', () => {
    rearmAllAlerts();
    toast('All triggered alerts re-armed', 'success');
    renderAlerts(container);
  });

  container.querySelectorAll('[data-rearm]').forEach((btn) => {
    btn.addEventListener('click', () => {
      rearmAlert(btn.dataset.rearm);
      toast('Alert re-armed', 'success');
      renderAlerts(container);
    });
  });

  container.querySelectorAll('[data-del-alert]').forEach((btn) => {
    btn.addEventListener('click', () => removeAlert(btn.dataset.delAlert));
  });

  container.querySelectorAll('[data-toggle-alert]').forEach((btn) => {
    btn.addEventListener('click', () => toggleAlert(btn.dataset.toggleAlert));
  });

  container.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}

function renderAlertTable(alerts, triggered) {
  return `
    <table class="data-table finviz-tbl">
      <thead><tr><th>Symbol</th><th>Condition</th><th>Value</th><th>${triggered ? 'Fired' : 'Status'}</th><th></th></tr></thead>
      <tbody>
        ${alerts.map((a) => `
          <tr>
            <td class="sym clickable" data-symbol="${a.symbol}">${a.symbol}</td>
            <td>${ALERT_TYPES.find((t) => t.id === a.type)?.label || a.type}</td>
            <td>${a.value}</td>
            <td>${triggered ? `<span class="pos">${a.triggerDetail || 'Triggered'}</span> <span class="muted">${fmtTime(a.triggeredAt)}</span>` : (a.active ? 'Watching' : 'Paused')}</td>
            <td>
              ${!triggered ? `<button class="btn-ghost btn-sm" data-toggle-alert="${a.id}">${a.active ? 'Pause' : 'Resume'}</button>` : `<button class="btn-ghost btn-sm" data-rearm="${a.id}">Re-arm</button>`}
              <button class="btn-ghost btn-sm" data-del-alert="${a.id}">×</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function fmtTime(ts) {
  if (!ts) return '';
  return new Date(ts).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}