export function fmtPrice(n, decimals = 2) {
  if (n == null || Number.isNaN(n)) return '—';
  return n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

/** Index levels (S&P, Dow) — no dollar sign. */
export function fmtIndexPrice(price, decimals = 2) {
  if (!price) return '—';
  if (price >= 10000) return price.toLocaleString('en-US', { maximumFractionDigits: 0 });
  if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return price.toFixed(decimals);
}

export function fmtChange(n) {
  if (n == null || Number.isNaN(n)) return '—';
  const sign = n >= 0 ? '+' : '';
  return `${sign}${n.toFixed(2)}`;
}

export function fmtPct(n) {
  if (n == null || Number.isNaN(n)) return '—';
  const sign = n >= 0 ? '+' : '';
  return `${sign}${n.toFixed(2)}%`;
}

export function fmtVolume(n) {
  if (n == null) return '—';
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

export function fmtMarketCap(n) {
  if (n == null) return '—';
  if (n >= 1_000_000_000_000) return `${(n / 1_000_000_000_000).toFixed(2)}T`;
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(0)}M`;
  return n.toLocaleString();
}

export function fmtTime(ts) {
  if (!ts) return '';
  return new Date(ts).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export function changeClass(n) {
  if (n == null) return '';
  if (n > 0) return 'pos';
  if (n < 0) return 'neg';
  return 'flat';
}

export function heatColor(pct) {
  const clamped = Math.max(-5, Math.min(5, pct));
  if (clamped >= 0) {
    const t = clamped / 5;
    const r = Math.round(20 + (1 - t) * 30);
    const g = Math.round(80 + t * 120);
    const b = Math.round(40 + (1 - t) * 20);
    return `rgb(${r},${g},${b})`;
  }
  const t = Math.abs(clamped) / 5;
  const r = Math.round(120 + t * 135);
  const g = Math.round(40 + (1 - t) * 30);
  const b = Math.round(40 + (1 - t) * 20);
  return `rgb(${r},${g},${b})`;
}