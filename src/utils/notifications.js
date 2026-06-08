/** Browser push notifications for StockViz alerts. */

export function isNotificationSupported() {
  return 'Notification' in window;
}

export function getNotificationPermission() {
  if (!isNotificationSupported()) return 'unsupported';
  return Notification.permission;
}

export async function requestNotificationPermission() {
  if (!isNotificationSupported()) return 'unsupported';
  if (Notification.permission === 'granted') return 'granted';
  if (Notification.permission === 'denied') return 'denied';
  const result = await Notification.requestPermission();
  return result;
}

export function sendNotification({ title, body, tag }) {
  if (!isNotificationSupported() || Notification.permission !== 'granted') return false;
  try {
    new Notification(title, {
      body,
      tag: tag || 'stockviz-alert',
      icon: '/favicon.svg',
      silent: false,
    });
    return true;
  } catch {
    return false;
  }
}