import { SIGNAL_GROUPS, PATTERN_GROUPS } from './marketData.js';

/** Finviz-style screener presets — momentum, signals, patterns, predictions. */
export const PRESETS = [
  { id: 'all', label: 'All Stocks', filters: {} },
  { id: 'gainers', label: 'Top Gainers', filters: { signal: 'top_gainers' } },
  { id: 'losers', label: 'Top Losers', filters: { signal: 'top_losers' } },
  { id: 'newhigh', label: 'New High', filters: { signal: 'new_high' } },
  { id: 'newlow', label: 'New Low', filters: { signal: 'new_low' } },
  { id: 'overbought', label: 'Overbought', filters: { signal: 'overbought' } },
  { id: 'oversold', label: 'Oversold', filters: { signal: 'oversold' } },
  { id: 'unusualvol', label: 'Unusual Volume', filters: { signal: 'unusual_volume' } },
  { id: 'golden', label: 'Golden Cross', filters: { signal: 'golden_cross' } },
  { id: 'doublebottom', label: 'Double Bottom', filters: { pattern: 'double_bottom' } },
  { id: 'headshoulders', label: 'Head & Shoulders', filters: { pattern: 'head_shoulders' } },
  { id: 'bullish', label: 'Bullish Prediction', filters: { prediction: 'bullish' } },
  { id: 'bearish', label: 'Bearish Prediction', filters: { prediction: 'bearish' } },
  { id: 'tech', label: 'Technology', filters: { sector: 'Technology' } },
  { id: 'megacap', label: 'Mega Cap', filters: { minMarketCap: '200000000000' } },
];

export { SIGNAL_GROUPS, PATTERN_GROUPS };