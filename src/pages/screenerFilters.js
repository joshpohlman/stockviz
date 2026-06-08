/** Shared filter logic for screener + heat map. */
export function applyFiltersFromQuotes(quotes, f) {
  const rows = [...quotes.values()];
  return rows.filter((q) => {
    if (f.search) {
      const s = f.search.toLowerCase();
      if (!q.symbol.toLowerCase().includes(s) && !(q.name || '').toLowerCase().includes(s)) return false;
    }
    if (f.sector && q.sector !== f.sector) return false;
    if (f.minChange !== '' && q.changePct < Number(f.minChange)) return false;
    if (f.maxChange !== '' && q.changePct > Number(f.maxChange)) return false;
    if (f.minVolume !== '' && (q.volume || 0) < Number(f.minVolume)) return false;
    if (f.minMarketCap !== '' && (q.marketCap || 0) < Number(f.minMarketCap)) return false;
    return true;
  });
}