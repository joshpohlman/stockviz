/** Technical indicators from OHLCV candle arrays [{o,h,l,c,v}]. */

export function sma(closes, period) {
  if (closes.length < period) return null;
  const slice = closes.slice(-period);
  return slice.reduce((a, b) => a + b, 0) / period;
}

export function ema(closes, period) {
  if (closes.length < period) return null;
  const k = 2 / (period + 1);
  let val = closes.slice(0, period).reduce((a, b) => a + b, 0) / period;
  for (let i = period; i < closes.length; i++) {
    val = closes[i] * k + val * (1 - k);
  }
  return val;
}

export function rsi(closes, period = 14) {
  if (closes.length < period + 1) return 50;
  let gains = 0;
  let losses = 0;
  for (let i = closes.length - period; i < closes.length; i++) {
    const diff = closes[i] - closes[i - 1];
    if (diff >= 0) gains += diff;
    else losses -= diff;
  }
  if (losses === 0) return 100;
  const rs = gains / losses;
  return 100 - 100 / (1 + rs);
}

export function macd(closes) {
  if (closes.length < 26) return { macd: 0, signal: 0, hist: 0 };
  const ema12 = ema(closes, 12);
  const ema26 = ema(closes, 26);
  const macdLine = (ema12 ?? 0) - (ema26 ?? 0);
  const signal = macdLine * 0.85;
  return { macd: macdLine, signal, hist: macdLine - signal };
}

export function atr(candles, period = 14) {
  if (candles.length < period + 1) return 0;
  const trs = [];
  for (let i = candles.length - period; i < candles.length; i++) {
    const c = candles[i];
    const prev = candles[i - 1];
    trs.push(Math.max(c.h - c.l, Math.abs(c.h - prev.c), Math.abs(c.l - prev.c)));
  }
  return trs.reduce((a, b) => a + b, 0) / trs.length;
}

export function bollinger(closes, period = 20) {
  const mid = sma(closes, period);
  if (mid == null) return { upper: 0, mid: 0, lower: 0 };
  const slice = closes.slice(-period);
  const variance = slice.reduce((s, v) => s + (v - mid) ** 2, 0) / period;
  const std = Math.sqrt(variance);
  return { upper: mid + 2 * std, mid, lower: mid - 2 * std };
}

export function localExtrema(closes, window = 3) {
  const peaks = [];
  const troughs = [];
  for (let i = window; i < closes.length - window; i++) {
    const v = closes[i];
    const left = closes.slice(i - window, i);
    const right = closes.slice(i + 1, i + window + 1);
    if (left.every((x) => v >= x) && right.every((x) => v >= x)) peaks.push({ i, v });
    if (left.every((x) => v <= x) && right.every((x) => v <= x)) troughs.push({ i, v });
  }
  return { peaks, troughs };
}

export function pctFromSma(price, smaVal) {
  if (!smaVal) return 0;
  return ((price - smaVal) / smaVal) * 100;
}

export function avgVolume(candles, period = 20) {
  if (!candles.length) return 0;
  const vols = candles.slice(-period).map((c) => c.v || 0);
  return vols.reduce((a, b) => a + b, 0) / vols.length;
}