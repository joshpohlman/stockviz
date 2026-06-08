/** Finviz-style one-click screener presets. */
export const PRESETS = [
  { id: 'all', label: 'All Stocks', filters: {} },
  { id: 'gainers', label: 'Top Gainers', filters: { minChange: '2' } },
  { id: 'losers', label: 'Top Losers', filters: { maxChange: '-2' } },
  { id: 'highvol', label: 'High Volume', filters: { minVolume: '10000000' } },
  { id: 'megacap', label: 'Mega Cap', filters: { minMarketCap: '200000000000' } },
  { id: 'tech', label: 'Technology', filters: { sector: 'Technology' } },
  { id: 'healthcare', label: 'Healthcare', filters: { sector: 'Healthcare' } },
  { id: 'energy', label: 'Energy', filters: { sector: 'Energy' } },
  { id: 'financial', label: 'Financial', filters: { sector: 'Financial' } },
  { id: 'oversold', label: 'Oversold (< -3%)', filters: { maxChange: '-3' } },
  { id: 'momentum', label: 'Momentum (> 5%)', filters: { minChange: '5' } },
];