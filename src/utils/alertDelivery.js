/** Deliver alerts via webhook (works with Telegram bots, Discord, IFTTT, etc.). */

export async function deliverAlertWebhook(settings, alert) {
  const url = settings.alertWebhookUrl?.trim();
  if (!url) return false;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `StockViz Alert: ${alert.symbol} — ${alert.detail}`,
        symbol: alert.symbol,
        type: alert.type,
        value: alert.value,
        detail: alert.detail,
        triggeredAt: Date.now(),
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}