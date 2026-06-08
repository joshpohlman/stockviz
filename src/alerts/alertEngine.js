import { getAlerts, markAlertTriggered } from '../store.js';

/** Check all active alerts against current quotes. Returns newly triggered alerts. */
export function checkAlerts(quotes) {
  const alerts = getAlerts().filter((a) => a.active && !a.triggered);
  const triggered = [];

  for (const alert of alerts) {
    const q = quotes.get(alert.symbol);
    if (!q) continue;

    let fire = false;
    let detail = '';

    switch (alert.type) {
      case 'price_above':
        fire = q.price >= Number(alert.value);
        detail = `$${q.price.toFixed(2)} ≥ $${alert.value}`;
        break;
      case 'price_below':
        fire = q.price <= Number(alert.value);
        detail = `$${q.price.toFixed(2)} ≤ $${alert.value}`;
        break;
      case 'change_above':
        fire = q.changePct >= Number(alert.value);
        detail = `${q.changePct.toFixed(2)}% ≥ ${alert.value}%`;
        break;
      case 'change_below':
        fire = q.changePct <= Number(alert.value);
        detail = `${q.changePct.toFixed(2)}% ≤ ${alert.value}%`;
        break;
      case 'rsi_above':
        fire = (q.ta?.rsi ?? 0) >= Number(alert.value);
        detail = `RSI ${q.ta?.rsi?.toFixed(1)} ≥ ${alert.value}`;
        break;
      case 'rsi_below':
        fire = (q.ta?.rsi ?? 100) <= Number(alert.value);
        detail = `RSI ${q.ta?.rsi?.toFixed(1)} ≤ ${alert.value}`;
        break;
      case 'signal':
        fire = q.signals?.some((s) => s.id === alert.value);
        detail = `Signal: ${alert.value}`;
        break;
      case 'pattern':
        fire = q.patterns?.some((p) => p.id === alert.value);
        detail = `Pattern: ${alert.value}`;
        break;
      case 'prediction':
        fire = q.prediction?.direction === alert.value;
        detail = `Prediction: ${q.prediction?.direction} (${q.prediction?.confidence}%)`;
        break;
      default:
        break;
    }

    if (fire) {
      markAlertTriggered(alert.id, detail);
      triggered.push({ ...alert, detail });
    }
  }

  return triggered;
}

export const ALERT_TYPES = [
  { id: 'price_above', label: 'Price Above', needsValue: true, placeholder: '200.00' },
  { id: 'price_below', label: 'Price Below', needsValue: true, placeholder: '150.00' },
  { id: 'change_above', label: 'Change % Above', needsValue: true, placeholder: '5' },
  { id: 'change_below', label: 'Change % Below', needsValue: true, placeholder: '-5' },
  { id: 'rsi_above', label: 'RSI Above', needsValue: true, placeholder: '70' },
  { id: 'rsi_below', label: 'RSI Below', needsValue: true, placeholder: '30' },
  { id: 'signal', label: 'Signal Detected', needsValue: true, valueType: 'signal' },
  { id: 'pattern', label: 'Pattern Detected', needsValue: true, valueType: 'pattern' },
  { id: 'prediction', label: 'Prediction Direction', needsValue: true, valueType: 'prediction' },
];