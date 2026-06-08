/** Pearson correlation matrix from price return series. */

export function pearson(a, b) {
  const n = Math.min(a.length, b.length);
  if (n < 3) return 0;
  const xs = a.slice(-n);
  const ys = b.slice(-n);
  const mx = xs.reduce((s, v) => s + v, 0) / n;
  const my = ys.reduce((s, v) => s + v, 0) / n;
  let num = 0;
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < n; i++) {
    const vx = xs[i] - mx;
    const vy = ys[i] - my;
    num += vx * vy;
    dx += vx * vx;
    dy += vy * vy;
  }
  const den = Math.sqrt(dx * dy);
  return den ? num / den : 0;
}

export function returnsFromCandles(candles) {
  if (!candles?.length) return [];
  const closes = candles.map((c) => c.c);
  const rets = [];
  for (let i = 1; i < closes.length; i++) {
    rets.push((closes[i] - closes[i - 1]) / closes[i - 1]);
  }
  return rets;
}

export function buildCorrelationMatrix(symbols, quotes, { period = 30 } = {}) {
  const series = new Map();
  for (const sym of symbols) {
    const q = quotes.get(sym);
    const candles = q?.candles;
    if (!candles?.length) continue;
    series.set(sym, returnsFromCandles(candles).slice(-period));
  }

  const syms = [...series.keys()];
  const matrix = syms.map((a) =>
    syms.map((b) => (a === b ? 1 : pearson(series.get(a), series.get(b))))
  );

  return { symbols: syms, matrix };
}

export function correlationColor(r) {
  if (r >= 0.7) return 'rgba(63,185,80,0.85)';
  if (r >= 0.4) return 'rgba(63,185,80,0.45)';
  if (r >= 0.15) return 'rgba(88,166,255,0.35)';
  if (r > -0.15) return 'rgba(139,148,158,0.25)';
  if (r > -0.4) return 'rgba(248,81,73,0.35)';
  if (r > -0.7) return 'rgba(248,81,73,0.55)';
  return 'rgba(248,81,73,0.85)';
}