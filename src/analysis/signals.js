import { rsi, sma, macd, avgVolume, pctFromSma } from './indicators.js';

/** Finviz-style technical signals from candles + quote. */
export function detectSignals(candles, quote) {
  if (!candles?.length) return [];
  const closes = candles.map((c) => c.c);
  const price = quote.price ?? closes[closes.length - 1];
  const signals = [];

  const rsiVal = rsi(closes);
  const sma20 = sma(closes, 20);
  const sma50 = sma(closes, 50);
  const sma200 = sma(closes, 200);
  const { hist } = macd(closes);
  const volAvg = avgVolume(candles);
  const volume = quote.volume ?? candles[candles.length - 1]?.v ?? 0;

  const high52 = Math.max(...candles.map((c) => c.h));
  const low52 = Math.min(...candles.map((c) => c.l));

  if (quote.changePct >= 2) signals.push({ id: 'top_gainers', label: 'Top Gainers', type: 'momentum' });
  if (quote.changePct <= -2) signals.push({ id: 'top_losers', label: 'Top Losers', type: 'momentum' });
  if (price >= high52 * 0.998) signals.push({ id: 'new_high', label: 'New High', type: 'breakout' });
  if (price <= low52 * 1.002) signals.push({ id: 'new_low', label: 'New Low', type: 'breakout' });
  if (rsiVal >= 70) signals.push({ id: 'overbought', label: 'Overbought', type: 'rsi' });
  if (rsiVal <= 30) signals.push({ id: 'oversold', label: 'Oversold', type: 'rsi' });
  if (volume > volAvg * 2) signals.push({ id: 'unusual_volume', label: 'Unusual Volume', type: 'volume' });
  if (volume > volAvg * 1.3 && Math.abs(quote.changePct) > 3) {
    signals.push({ id: 'most_active', label: 'Most Active', type: 'volume' });
  }
  if (Math.abs(quote.changePct) > 5) signals.push({ id: 'most_volatile', label: 'Most Volatile', type: 'volatility' });

  if (sma50 && sma200) {
    const prev50 = sma(closes.slice(0, -1), 50);
    const prev200 = sma(closes.slice(0, -1), 200);
    if (prev50 && prev200 && prev50 <= prev200 && sma50 > sma200) {
      signals.push({ id: 'golden_cross', label: 'Golden Cross', type: 'trend' });
    }
    if (prev50 && prev200 && prev50 >= prev200 && sma50 < sma200) {
      signals.push({ id: 'death_cross', label: 'Death Cross', type: 'trend' });
    }
    if (price > sma50) signals.push({ id: 'above_sma50', label: 'Above SMA50', type: 'trend' });
    else signals.push({ id: 'below_sma50', label: 'Below SMA50', type: 'trend' });
    if (price > sma200) signals.push({ id: 'above_sma200', label: 'Above SMA200', type: 'trend' });
    else signals.push({ id: 'below_sma200', label: 'Below SMA200', type: 'trend' });
  }

  if (hist > 0 && quote.changePct > 0) signals.push({ id: 'macd_bullish', label: 'MACD Bullish', type: 'macd' });
  if (hist < 0 && quote.changePct < 0) signals.push({ id: 'macd_bearish', label: 'MACD Bearish', type: 'macd' });

  if (sma20 && pctFromSma(price, sma20) > 5) signals.push({ id: 'extended', label: 'Extended Above SMA20', type: 'trend' });
  if (sma20 && pctFromSma(price, sma20) < -5) signals.push({ id: 'pullback', label: 'Pullback to SMA20', type: 'trend' });

  return signals;
}