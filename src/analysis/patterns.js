import { localExtrema, sma, atr } from './indicators.js';

/** Finviz-style chart pattern heuristics. Returns array of { id, label, bias, confidence }. */
export function detectPatterns(candles) {
  if (!candles?.length || candles.length < 20) return [];
  const closes = candles.map((c) => c.c);
  const highs = candles.map((c) => c.h);
  const lows = candles.map((c) => c.l);
  const price = closes[closes.length - 1];
  const patterns = [];
  const { peaks, troughs } = localExtrema(closes, 4);

  // Double top
  if (peaks.length >= 2) {
    const p1 = peaks[peaks.length - 2];
    const p2 = peaks[peaks.length - 1];
    const diff = Math.abs(p1.v - p2.v) / p1.v;
    if (diff < 0.03 && p2.i - p1.i >= 5) {
      patterns.push({ id: 'double_top', label: 'Double Top', bias: 'bearish', confidence: 72 - diff * 500 });
    }
  }

  // Double bottom
  if (troughs.length >= 2) {
    const t1 = troughs[troughs.length - 2];
    const t2 = troughs[troughs.length - 1];
    const diff = Math.abs(t1.v - t2.v) / t1.v;
    if (diff < 0.03 && t2.i - t1.i >= 5) {
      patterns.push({ id: 'double_bottom', label: 'Double Bottom', bias: 'bullish', confidence: 74 - diff * 500 });
    }
  }

  // Head & shoulders (3 peaks, middle tallest)
  if (peaks.length >= 3) {
    const [a, b, c] = peaks.slice(-3);
    if (b.v > a.v * 1.02 && b.v > c.v * 1.02 && Math.abs(a.v - c.v) / a.v < 0.05) {
      patterns.push({ id: 'head_shoulders', label: 'Head & Shoulders', bias: 'bearish', confidence: 68 });
    }
  }

  // Inverse H&S (3 troughs)
  if (troughs.length >= 3) {
    const [a, b, c] = troughs.slice(-3);
    if (b.v < a.v * 0.98 && b.v < c.v * 0.98 && Math.abs(a.v - c.v) / a.v < 0.05) {
      patterns.push({ id: 'inv_head_shoulders', label: 'Inverse H&S', bias: 'bullish', confidence: 70 });
    }
  }

  // Channel / wedge via linear slope
  const recent = closes.slice(-20);
  const slope = (recent[recent.length - 1] - recent[0]) / recent.length;
  const slopePct = (slope / price) * 100;
  const volatility = atr(candles.slice(-20)) / price;

  if (slopePct > 0.15 && volatility < 0.025) {
    patterns.push({ id: 'channel_up', label: 'Channel Up', bias: 'bullish', confidence: 62 });
  } else if (slopePct < -0.15 && volatility < 0.025) {
    patterns.push({ id: 'channel_down', label: 'Channel Down', bias: 'bearish', confidence: 62 });
  }

  if (slopePct > 0.08 && highs.slice(-10).every((h, i, arr) => i === 0 || h <= arr[i - 1] * 1.01)) {
    patterns.push({ id: 'wedge_down', label: 'Wedge Down', bias: 'bearish', confidence: 58 });
  }
  if (slopePct < -0.08 && lows.slice(-10).every((l, i, arr) => i === 0 || l >= arr[i - 1] * 0.99)) {
    patterns.push({ id: 'wedge_up', label: 'Wedge Up', bias: 'bullish', confidence: 58 });
  }

  // Triangle (converging range)
  const earlyRange = Math.max(...highs.slice(-30, -15)) - Math.min(...lows.slice(-30, -15));
  const lateRange = Math.max(...highs.slice(-15)) - Math.min(...lows.slice(-15));
  if (lateRange < earlyRange * 0.55) {
    const bias = slopePct >= 0 ? 'bullish' : 'bearish';
    patterns.push({
      id: bias === 'bullish' ? 'triangle_asc' : 'triangle_desc',
      label: bias === 'bullish' ? 'Triangle Ascending' : 'Triangle Descending',
      bias,
      confidence: 60,
    });
  }

  // Horizontal support/resistance
  const s50 = sma(closes, 50);
  const nearSma = s50 && Math.abs(price - s50) / price < 0.015;
  if (nearSma) {
    patterns.push({
      id: price > s50 ? 'horizontal_resistance' : 'horizontal_support',
      label: price > s50 ? 'Horizontal Resistance' : 'Horizontal Support',
      bias: price > s50 ? 'bearish' : 'bullish',
      confidence: 55,
    });
  }

  // Trendline support/resistance
  const s20 = sma(closes, 20);
  if (s20 && price > s20 * 1.01) {
    patterns.push({ id: 'tl_support', label: 'Trendline Support', bias: 'bullish', confidence: 57 });
  } else if (s20 && price < s20 * 0.99) {
    patterns.push({ id: 'tl_resistance', label: 'Trendline Resistance', bias: 'bearish', confidence: 57 });
  }

  return patterns.map((p) => ({
    ...p,
    confidence: Math.round(Math.min(95, Math.max(45, p.confidence))),
  }));
}