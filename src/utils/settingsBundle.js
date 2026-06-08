/** Export/import settings + watchlist for cross-device transfer (no server). */

const BUNDLE_VERSION = 1;

export function exportSettingsBundle() {
  const keys = [
    'stockviz-settings', 'stockviz-favorites', 'stockviz-portfolio',
    'stockviz-alerts', 'stockviz-saved-filters', 'stockviz-multichart',
    'stockviz-paper-trades',
  ];
  const bundle = { version: BUNDLE_VERSION, exportedAt: Date.now(), data: {} };
  for (const key of keys) {
    try {
      const raw = localStorage.getItem(key);
      if (raw) bundle.data[key] = JSON.parse(raw);
    } catch { /* skip */ }
  }
  return bundle;
}

export function importSettingsBundle(bundle) {
  if (!bundle?.data || bundle.version !== BUNDLE_VERSION) {
    throw new Error('Invalid settings bundle');
  }
  for (const [key, value] of Object.entries(bundle.data)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  return Object.keys(bundle.data).length;
}

export function downloadSettingsBundle() {
  const bundle = exportSettingsBundle();
  const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `stockviz-settings-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export async function copySettingsBundle() {
  const bundle = exportSettingsBundle();
  const encoded = btoa(JSON.stringify(bundle));
  await navigator.clipboard.writeText(encoded);
  return encoded.length;
}

export function importFromEncoded(encoded) {
  const bundle = JSON.parse(atob(encoded.trim()));
  return importSettingsBundle(bundle);
}