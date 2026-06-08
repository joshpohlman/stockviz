let container;

export function initToast() {
  container = document.getElementById('toast-root');
}

export function toast(message, type = 'info', ms = 2800) {
  if (!container) return;
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.textContent = message;
  container.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 300);
  }, ms);
}