import { evaluateFormula } from '../analysis/formula.js';

/** Shared filter logic — descriptive, fundamental, technical, signals, patterns, formula. */
export function applyFiltersFromQuotes(quotes, f) {
  const rows = [...quotes.values()];
  return rows.filter((q) => {
    if (f.search) {
      const s = f.search.toLowerCase();
      if (!q.symbol.toLowerCase().includes(s) && !(q.name || '').toLowerCase().includes(s)) return false;
    }
    if (f.sector && q.sector !== f.sector) return false;
    if (f.industry && q.industry !== f.industry) return false;
    if (f.minChange !== '' && q.changePct < Number(f.minChange)) return false;
    if (f.maxChange !== '' && q.changePct > Number(f.maxChange)) return false;
    if (f.minVolume !== '' && (q.volume || 0) < Number(f.minVolume)) return false;
    if (f.minMarketCap !== '' && (q.marketCap || 0) < Number(f.minMarketCap)) return false;

    if (f.minRsi !== '' && (q.ta?.rsi ?? 50) < Number(f.minRsi)) return false;
    if (f.maxRsi !== '' && (q.ta?.rsi ?? 50) > Number(f.maxRsi)) return false;
    if (f.minPe !== '' && (q.fundamentals?.pe ?? 0) < Number(f.minPe)) return false;
    if (f.maxPe !== '' && (q.fundamentals?.pe ?? 999) > Number(f.maxPe)) return false;

    if (f.signal && !q.signals?.some((s) => s.id === f.signal)) return false;
    if (f.pattern && !q.patterns?.some((p) => p.id === f.pattern)) return false;
    if (f.prediction && q.prediction?.direction !== f.prediction) return false;
    if (f.aboveSma50 === 'yes' && !(q.ta?.sma50 && q.price > q.ta.sma50)) return false;
    if (f.aboveSma50 === 'no' && q.ta?.sma50 && q.price > q.ta.sma50) return false;
    if (f.aboveSma200 === 'yes' && !(q.ta?.sma200 && q.price > q.ta.sma200)) return false;
    if (f.aboveSma200 === 'no' && q.ta?.sma200 && q.price > q.ta.sma200) return false;

    if (f.formula && !evaluateFormula(f.formula, q)) return false;

    return true;
  });
}