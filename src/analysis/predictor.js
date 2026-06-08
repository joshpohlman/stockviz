import { rsi, sma, macd, atr, bollinger, pctFromSma } from './indicators.js';

/**
 * Multi-factor trend prediction engine.
 * Returns direction, confidence, price target, and factor breakdown.
 */
export function predictTrend(candles, quote, patterns = []) {
  if (!candles?.length) {
    return defaultPrediction(quote);
  }

  const closes = candles.map((c) => c.c);
  const price = quote.price ?? closes[closes.length - 1];
  const rsiVal = rsi(closes);
  const sma20 = sma(closes, 20);
  const sma50 = sma(closes, 50);
  const sma200 = sma(closes, 200);
  const { hist, macd: macdLine } = macd(closes);
  const atrVal = atr(candles);
  const bb = bollinger(closes);
  const momentum5 = closes.length >= 6
    ? ((closes[closes.length - 1] - closes[closes.length - 6]) / closes[closes.length - 6]) * 100
    : quote.changePct ?? 0;

  const factors = [];

  // RSI factor
  if (rsiVal < 35) factors.push({ name: 'RSI Oversold', score: 18, weight: 'bullish' });
  else if (rsiVal > 65) factors.push({ name: 'RSI Overbought', score: -18, weight: 'bearish' });
  else factors.push({ name: 'RSI Neutral', score: (50 - rsiVal) * 0.3, weight: 'neutral' });

  // Trend factor (SMA stack)
  let trendScore = 0;
  if (sma20 && price > sma20) trendScore += 8;
  else trendScore -= 8;
  if (sma50 && price > sma50) trendScore += 12;
  else trendScore -= 12;
  if (sma200 && price > sma200) trendScore += 15;
  else trendScore -= 10;
  factors.push({ name: 'Moving Avg Trend', score: trendScore, weight: trendScore > 0 ? 'bullish' : 'bearish' });

  // MACD
  factors.push({ name: 'MACD Momentum', score: hist * 2, weight: hist > 0 ? 'bullish' : 'bearish' });

  // Momentum
  factors.push({ name: '5D Momentum', score: momentum5 * 1.5, weight: momentum5 > 0 ? 'bullish' : 'bearish' });

  // Bollinger position
  if (bb.upper && price > bb.upper) factors.push({ name: 'Above Upper BB', score: -10, weight: 'bearish' });
  else if (bb.lower && price < bb.lower) factors.push({ name: 'Below Lower BB', score: 10, weight: 'bullish' });

  // Pattern bias
  for (const p of patterns) {
    const s = p.bias === 'bullish' ? p.confidence * 0.15 : -p.confidence * 0.15;
    factors.push({ name: p.label, score: s, weight: p.bias });
  }

  const totalScore = factors.reduce((s, f) => s + f.score, 0);
  const normalized = Math.max(-100, Math.min(100, totalScore));

  let direction = 'neutral';
  if (normalized > 12) direction = 'bullish';
  else if (normalized < -12) direction = 'bearish';

  const confidence = Math.round(Math.min(92, Math.max(48, 55 + Math.abs(normalized) * 0.35)));

  // Price target: ATR-based projection over ~10 sessions
  const expectedMove = (normalized / 100) * atrVal * 4;
  const priceTarget = Math.max(0.01, price + expectedMove);
  const targetPct = ((priceTarget - price) / price) * 100;

  // Short-term label
  const horizon = Math.abs(normalized) > 25 ? '5-10 days' : '3-7 days';

  return {
    direction,
    confidence,
    score: Math.round(normalized),
    priceTarget: Math.round(priceTarget * 100) / 100,
    targetPct: Math.round(targetPct * 100) / 100,
    horizon,
    factors: factors.slice(0, 6),
    rsi: Math.round(rsiVal * 10) / 10,
    sma20, sma50, sma200,
    atr: Math.round(atrVal * 100) / 100,
    macdHist: Math.round(hist * 100) / 100,
  };
}

function defaultPrediction(quote) {
  const dir = (quote?.changePct ?? 0) > 0 ? 'bullish' : (quote?.changePct ?? 0) < 0 ? 'bearish' : 'neutral';
  return {
    direction: dir,
    confidence: 52,
    score: quote?.changePct ?? 0,
    priceTarget: quote?.price ?? 0,
    targetPct: 0,
    horizon: '3-7 days',
    factors: [],
    rsi: 50,
    sma20: null, sma50: null, sma200: null,
    atr: 0,
    macdHist: 0,
  };
}