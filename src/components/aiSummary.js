/** Rule-based stock summary from quote data, news, and TA (no external AI API). */

export function generateStockSummary(quote, news = []) {
  if (!quote) return 'No data available.';

  const parts = [];
  const dir = quote.changePct >= 0 ? 'up' : 'down';
  const abs = Math.abs(quote.changePct).toFixed(2);

  parts.push(`${quote.symbol} (${quote.name || '—'}) is ${dir} ${abs}% today at $${quote.price?.toFixed(2)}.`);

  if (quote.sector) {
    parts.push(`Sector: ${quote.sector}${quote.industry ? ` · ${quote.industry}` : ''}.`);
  }

  const f = quote.fundamentals || {};
  const valBits = [];
  if (f.pe) valBits.push(`P/E ${f.pe}`);
  if (f.peg) valBits.push(`PEG ${f.peg}`);
  if (f.dividendYield) valBits.push(`div yield ${f.dividendYield}%`);
  if (valBits.length) parts.push(`Valuation: ${valBits.join(', ')}.`);

  if (quote.ta?.rsi != null) {
    const rsi = quote.ta.rsi;
    if (rsi > 70) parts.push(`RSI ${rsi.toFixed(1)} suggests overbought conditions.`);
    else if (rsi < 30) parts.push(`RSI ${rsi.toFixed(1)} suggests oversold conditions.`);
    else parts.push(`RSI ${rsi.toFixed(1)} is neutral.`);
  }

  if (quote.prediction) {
    parts.push(`Pattern engine: ${quote.prediction.direction} bias (${quote.prediction.confidence}% confidence, target $${quote.prediction.priceTarget?.toFixed(2)}).`);
  }

  if (quote.patterns?.length) {
    parts.push(`Detected patterns: ${quote.patterns.slice(0, 3).map((p) => p.label).join(', ')}.`);
  }

  if (quote.signals?.length) {
    parts.push(`Active signals: ${quote.signals.slice(0, 3).map((s) => s.label).join(', ')}.`);
  }

  if (news.length) {
    parts.push(`Latest headline: "${news[0].headline || news[0].title}" (${news[0].source || 'news'}).`);
  }

  return parts.join(' ');
}