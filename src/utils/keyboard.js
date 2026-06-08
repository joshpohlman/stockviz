const SHORTCUTS = {
  h: { path: '/', label: 'Home' },
  d: { path: '/dashboard', label: 'Dashboard' },
  s: { path: '/screener', label: 'Screener' },
  w: { path: '/watchlist', label: 'Watchlist' },
  n: { path: '/news', label: 'News' },
  p: { path: '/portfolio', label: 'Portfolio' },
  a: { path: '/alerts', label: 'Alerts' },
  g: { path: '/groups', label: 'Groups' },
  c: { path: '/charts', label: 'Charts' },
  ',': { path: '/settings', label: 'Settings' },
};

export function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea, select') || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === '?') {
      showShortcutHelp();
      return;
    }
    const route = SHORTCUTS[e.key];
    if (route) {
      e.preventDefault();
      location.hash = route.path;
    }
  });
}

function showShortcutHelp() {
  const existing = document.getElementById('kbd-help');
  if (existing) { existing.remove(); return; }

  const el = document.createElement('div');
  el.id = 'kbd-help';
  el.className = 'kbd-help-overlay';
  el.innerHTML = `
    <div class="kbd-help panel">
      <h3>Keyboard Shortcuts</h3>
      <ul>
        <li><kbd>/</kbd> or <kbd>Ctrl+K</kbd> — Search ticker</li>
        ${Object.entries(SHORTCUTS).map(([k, v]) => `<li><kbd>${k}</kbd> — ${v.label}</li>`).join('')}
        <li><kbd>?</kbd> — Toggle this help</li>
        <li><kbd>Esc</kbd> — Close panels</li>
      </ul>
      <button class="btn-secondary" id="kbd-close">Close</button>
    </div>
  `;
  document.body.appendChild(el);
  el.addEventListener('click', (ev) => { if (ev.target === el) el.remove(); });
  el.querySelector('#kbd-close')?.addEventListener('click', () => el.remove());
}