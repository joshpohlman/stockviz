import { SECTORS } from '../data/universe.js';

/** Sector rotation momentum scores from quote universe. */
export function computeSectorRotation(quotes) {
  const bySector = new Map();
  for (const s of SECTORS) bySector.set(s, []);

  for (const q of quotes.values()) {
    if (!q.sector || !bySector.has(q.sector)) continue;
    bySector.get(q.sector).push(q);
  }

  const sectors = SECTORS.map((sector) => {
    const stocks = bySector.get(sector) || [];
    const n = stocks.length || 1;
    const avgChange = stocks.reduce((s, q) => s + (q.changePct || 0), 0) / n;
    const advancing = stocks.filter((q) => q.changePct > 0).length;
    const bullish = stocks.filter((q) => q.prediction?.direction === 'bullish').length;
    const avgRsi = stocks.reduce((s, q) => s + (q.ta?.rsi ?? 50), 0) / n;
    const relVol = stocks.reduce((s, q) => s + (q.ta?.relVolume ?? 1), 0) / n;
    const aboveSma50 = stocks.filter((q) => q.ta?.sma50 && q.price > q.ta.sma50).length;

    const momentum = avgChange * 2 + (advancing / n) * 15 + (bullish / n) * 10 + (aboveSma50 / n) * 8;
    const strength = Math.max(0, Math.min(100, 50 + momentum));

    return {
      sector,
      count: stocks.length,
      avgChange,
      advancing,
      advancingPct: (advancing / n) * 100,
      bullish,
      bullishPct: (bullish / n) * 100,
      avgRsi,
      relVol,
      aboveSma50Pct: (aboveSma50 / n) * 100,
      momentum,
      strength,
      topStock: stocks.sort((a, b) => b.changePct - a.changePct)[0] || null,
      laggard: stocks.sort((a, b) => a.changePct - b.changePct)[0] || null,
    };
  });

  return sectors.sort((a, b) => b.momentum - a.momentum);
}

export function rotationPhase(sector) {
  if (sector.momentum > 8) return { label: 'Leading', color: 'var(--green)' };
  if (sector.momentum > 2) return { label: 'Improving', color: 'var(--accent)' };
  if (sector.momentum > -2) return { label: 'Neutral', color: 'var(--text-muted)' };
  if (sector.momentum > -8) return { label: 'Weakening', color: 'var(--yellow)' };
  return { label: 'Lagging', color: 'var(--red)' };
}