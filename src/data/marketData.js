/** Mock futures, forex, insider, calendar — Finviz-style supplementary data. */

export const FUTURES = [
  { name: 'Crude Oil', symbol: 'CL', last: 78.42, change: 1.24, changePct: 1.61 },
  { name: 'Natural Gas', symbol: 'NG', last: 2.84, change: -0.06, changePct: -2.07 },
  { name: 'Gold', symbol: 'GC', last: 2348.5, change: 12.3, changePct: 0.53 },
  { name: 'Dow', symbol: 'YM', last: 42850, change: -120, changePct: -0.28 },
  { name: 'S&P 500', symbol: 'ES', last: 5892, change: 18, changePct: 0.31 },
  { name: 'Nasdaq 100', symbol: 'NQ', last: 21245, change: 95, changePct: 0.45 },
  { name: 'Russell 2000', symbol: 'ER2', last: 2185, change: -8, changePct: -0.37 },
];

export const FOREX = [
  { pair: 'EUR/USD', symbol: 'EURUSD', last: 1.0842, change: 0.0012, changePct: 0.11 },
  { pair: 'USD/JPY', symbol: 'USDJPY', last: 157.32, change: 0.28, changePct: 0.18 },
  { pair: 'GBP/USD', symbol: 'GBPUSD', last: 1.2718, change: -0.0008, changePct: -0.06 },
  { pair: 'BTC/USD', symbol: 'BTCUSD', last: 68420, change: 1240, changePct: 1.85 },
];

export const BONDS = [
  { name: '5-Year Treasury', last: 4.12, change: 0.03, changePct: 0.73 },
  { name: '10-Year Treasury', last: 4.28, change: 0.02, changePct: 0.47 },
  { name: '30-Year Treasury', last: 4.45, change: -0.01, changePct: -0.22 },
];

export const INSIDER_TRADES = [
  { symbol: 'NVDA', insider: 'Jensen Huang', relation: 'CEO', date: 'Jun 04', type: 'Sale', cost: 128.5, shares: 120000, value: 15420000 },
  { symbol: 'AAPL', insider: 'Tim Cook', relation: 'CEO', date: 'Jun 03', type: 'Sale', cost: 198.2, shares: 45000, value: 8919000 },
  { symbol: 'MSFT', insider: 'Satya Nadella', relation: 'CEO', date: 'Jun 02', type: 'Sale', cost: 425.0, shares: 22000, value: 9350000 },
  { symbol: 'JPM', insider: 'Jamie Dimon', relation: 'CEO', date: 'Jun 05', type: 'Buy', cost: 198.4, shares: 15000, value: 2976000 },
  { symbol: 'META', insider: 'Mark Zuckerberg', relation: 'CEO', date: 'Jun 01', type: 'Sale', cost: 512.0, shares: 80000, value: 40960000 },
  { symbol: 'GOOGL', insider: 'Sundar Pichai', relation: 'CEO', date: 'May 30', type: 'Sale', cost: 178.5, shares: 35000, value: 6247500 },
];

export const EARNINGS_CALENDAR = [
  { symbol: 'ORCL', date: 'Today AMC', epsEst: 1.42, cap: 'Large' },
  { symbol: 'ADBE', date: 'Today AMC', epsEst: 4.18, cap: 'Large' },
  { symbol: 'COST', date: 'Tomorrow BMO', epsEst: 3.92, cap: 'Large' },
  { symbol: 'CRM', date: 'Tomorrow AMC', epsEst: 2.28, cap: 'Large' },
  { symbol: 'AVGO', date: 'Jun 10 AMC', epsEst: 1.35, cap: 'Large' },
  { symbol: 'NKE', date: 'Jun 11 AMC', epsEst: 0.72, cap: 'Large' },
];

export const ECON_CALENDAR = [
  { date: 'Mon', time: '10:00 AM', impact: 'high', event: 'ISM Services PMI', actual: '—', expected: '52.4', prior: '51.8' },
  { date: 'Tue', time: '8:30 AM', impact: 'high', event: 'Non-Farm Payrolls', actual: '—', expected: '185K', prior: '177K' },
  { date: 'Wed', time: '2:00 PM', impact: 'medium', event: 'FOMC Minutes', actual: '—', expected: '—', prior: '—' },
  { date: 'Thu', time: '8:30 AM', impact: 'medium', event: 'Initial Jobless Claims', actual: '—', expected: '220K', prior: '218K' },
  { date: 'Fri', time: '8:30 AM', impact: 'high', event: 'CPI YoY', actual: '—', expected: '2.9%', prior: '3.0%' },
];

export const SIGNAL_GROUPS = [
  { id: 'top_gainers', label: 'Top Gainers' },
  { id: 'top_losers', label: 'Top Losers' },
  { id: 'new_high', label: 'New High' },
  { id: 'new_low', label: 'New Low' },
  { id: 'overbought', label: 'Overbought' },
  { id: 'oversold', label: 'Oversold' },
  { id: 'unusual_volume', label: 'Unusual Volume' },
  { id: 'most_active', label: 'Most Active' },
  { id: 'most_volatile', label: 'Most Volatile' },
  { id: 'golden_cross', label: 'Golden Cross' },
  { id: 'death_cross', label: 'Death Cross' },
];

export const PATTERN_GROUPS = [
  { id: 'double_top', label: 'Double Top' },
  { id: 'double_bottom', label: 'Double Bottom' },
  { id: 'head_shoulders', label: 'Head & Shoulders' },
  { id: 'inv_head_shoulders', label: 'Inverse H&S' },
  { id: 'channel_up', label: 'Channel Up' },
  { id: 'channel_down', label: 'Channel Down' },
  { id: 'wedge_up', label: 'Wedge Up' },
  { id: 'wedge_down', label: 'Wedge Down' },
  { id: 'triangle_asc', label: 'Triangle Ascending' },
  { id: 'triangle_desc', label: 'Triangle Descending' },
  { id: 'horizontal_support', label: 'Horizontal Support' },
  { id: 'horizontal_resistance', label: 'Horizontal Resistance' },
  { id: 'tl_support', label: 'Trendline Support' },
  { id: 'tl_resistance', label: 'Trendline Resistance' },
];