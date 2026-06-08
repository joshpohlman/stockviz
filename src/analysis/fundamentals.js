/** TradingView-style comprehensive fundamentals — mock + Finnhub merge. */

function seededRand(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function rnd(seed, key, min, max, dec = 2) {
  const v = min + seededRand(seed + key)() * (max - min);
  const m = 10 ** dec;
  return Math.round(v * m) / m;
}

function computePerformance(candles, price) {
  if (!candles?.length) return {};
  const closes = candles.map((c) => c.c);
  const last = price ?? closes[closes.length - 1];
  const pctFrom = (days) => {
    const idx = Math.max(0, closes.length - 1 - days);
    const old = closes[idx];
    return old ? ((last - old) / old) * 100 : null;
  };
  const yearStart = new Date(new Date().getFullYear(), 0, 1).getTime();
  const ytdIdx = candles.findIndex((c) => c.t >= yearStart);
  const ytd = ytdIdx >= 0 ? ((last - candles[ytdIdx].c) / candles[ytdIdx].c) * 100 : pctFrom(60);

  return {
    perf1D: null,
    perf5D: pctFrom(5),
    perf1M: pctFrom(21),
    perf3M: pctFrom(63),
    perf6M: pctFrom(126),
    perfYTD: ytd,
    perf1Y: pctFrom(Math.min(252, closes.length - 1)),
    perf5Y: pctFrom(Math.min(252 * 5, closes.length - 1)),
  };
}

/** Build full TradingView-style fundamentals object. */
export function buildFundamentals(quote, candles, finnhubMetrics = null) {
  const sym = quote.symbol;
  const price = quote.price || 100;
  const mcap = quote.marketCap || price * rnd(sym, 'shares', 500_000_000, 15_000_000_000, 0);
  const shares = mcap / price;
  const floatPct = rnd(sym, 'float', 0.55, 0.95, 2);
  const floatShares = shares * floatPct;

  const eps = finnhubMetrics?.epsTTM ?? rnd(sym, 'eps', 0.5, 18, 2);
  const epsFwd = finnhubMetrics?.epsForward ?? eps * rnd(sym, 'epsfwd', 1.02, 1.25, 2);
  const pe = finnhubMetrics?.peTTM ?? (eps > 0 ? Math.round((price / eps) * 10) / 10 : rnd(sym, 'pe', 8, 45, 1));
  const peFwd = epsFwd > 0 ? Math.round((price / epsFwd) * 10) / 10 : pe * rnd(sym, 'pefwd', 0.8, 1.1, 1);
  const epsGrowth = finnhubMetrics?.epsGrowthTTMYoy ?? rnd(sym, 'epsg', -5, 35, 1);
  const peg = epsGrowth > 0 ? Math.round((pe / epsGrowth) * 100) / 100 : rnd(sym, 'peg', 0.8, 3.5, 2);

  const revenue = mcap * rnd(sym, 'rev', 0.15, 0.55, 2);
  const revenuePerShare = revenue / shares;
  const ps = Math.round((mcap / revenue) * 10) / 10;
  const bookValue = price * rnd(sym, 'pb', 0.3, 4, 2);
  const pb = Math.round((price / bookValue) * 10) / 10;
  const ebitda = revenue * rnd(sym, 'ebitda', 0.12, 0.35, 2);
  const ev = mcap * rnd(sym, 'ev', 1.05, 1.35, 2);
  const evEbitda = Math.round((ev / ebitda) * 10) / 10;
  const evRevenue = Math.round((ev / revenue) * 10) / 10;
  const fcf = ebitda * rnd(sym, 'fcf', 0.5, 0.85, 2);
  const pcf = Math.round((mcap / fcf) * 10) / 10;

  const grossMargin = finnhubMetrics?.grossMarginTTM ?? rnd(sym, 'gm', 25, 75, 1);
  const opMargin = finnhubMetrics?.operatingMarginTTM ?? rnd(sym, 'om', 8, 35, 1);
  const netMargin = finnhubMetrics?.netProfitMarginTTM ?? rnd(sym, 'nm', 5, 28, 1);
  const roe = finnhubMetrics?.roeTTM ?? rnd(sym, 'roe', 8, 45, 1);
  const roa = finnhubMetrics?.roaTTM ?? rnd(sym, 'roa', 3, 18, 1);
  const roic = rnd(sym, 'roic', 6, 30, 1);

  const divYield = finnhubMetrics?.dividendYield ?? rnd(sym, 'divy', 0, 4.5, 2);
  const divPerShare = price * (divYield / 100);
  const payout = rnd(sym, 'payout', 15, 65, 0);
  const exDivDays = Math.floor(rnd(sym, 'exdiv', 5, 90, 0));

  const beta = finnhubMetrics?.beta ?? rnd(sym, 'beta', 0.5, 2.2, 2);
  const high52 = finnhubMetrics?.high52 ?? price * rnd(sym, 'hi52', 1.02, 1.35, 2);
  const low52 = finnhubMetrics?.low52 ?? price * rnd(sym, 'lo52', 0.65, 0.98, 2);
  const avgVol10 = quote.volume ? quote.volume * rnd(sym, 'av10', 0.8, 1.2, 2) : rnd(sym, 'vol10', 1_000_000, 50_000_000, 0);
  const avgVol90 = avgVol10 * rnd(sym, 'av90', 0.85, 1.15, 2);

  const shortPct = rnd(sym, 'short', 0.5, 18, 2);
  const shortRatio = rnd(sym, 'shortr', 0.5, 8, 1);
  const insiderPct = rnd(sym, 'ins', 0.1, 25, 1);
  const instPct = rnd(sym, 'inst', 45, 92, 1);

  const target = price * rnd(sym, 'target', 0.9, 1.35, 2);
  const perf = computePerformance(candles, price);
  perf.perf1D = quote.changePct ?? perf.perf1D;

  const revenueGrowth = rnd(sym, 'revg', -2, 25, 1);
  const debtEquity = rnd(sym, 'de', 0.2, 2.5, 2);
  const currentRatio = rnd(sym, 'cr', 0.8, 3.5, 2);
  const quickRatio = currentRatio * rnd(sym, 'qr', 0.6, 0.95, 2);
  const employees = Math.floor(rnd(sym, 'emp', 5000, 250000, 0));

  return {
    // Valuation
    pe, peFwd, peg, ps, pb, evEbitda, evRevenue, pcf, priceToBook: pb,
    // Earnings
    eps, epsFwd, epsGrowth, revenue, revenuePerShare, revenueGrowth,
    // Margins & returns
    grossMargin, opMargin, netMargin, roe, roa, roic, ebitda,
    // Dividends
    dividend: divPerShare, dividendYield: divYield, payoutRatio: payout,
    exDividendDate: `in ${exDivDays}d`,
    // Balance sheet
    debtEquity, currentRatio, quickRatio, bookValue,
    // Share structure
    sharesOutstanding: shares, floatShares, floatPct: floatPct * 100,
    employees,
    // Technical / market
    beta, high52, low52, avgVol10, avgVol90,
    distanceFromHigh: ((price - high52) / high52) * 100,
    distanceFromLow: ((price - low52) / low52) * 100,
    // Ownership & short
    shortPct, shortRatio, insiderPct, instPct,
    // Analyst
    targetPrice: target, upside: ((target - price) / price) * 100,
    // Performance
    ...perf,
    // Legacy aliases
    peTTM: pe,
    div: divPerShare,
  };
}

/** Map FMP ratios-ttm + key-metrics-ttm + profile to our schema. */
export function mapFmpMetrics({ ratios, metrics, profile } = {}) {
  if (!ratios && !metrics) return null;
  const r = ratios || {};
  const m = metrics || {};
  return {
    peTTM: r.priceToEarningsRatioTTM ?? r.peRatioTTM,
    peFwd: r.priceToEarningsRatioTTM,
    peg: r.priceToEarningsGrowthRatioTTM ?? r.pegRatioTTM,
    ps: r.priceToSalesRatioTTM,
    pb: r.priceToBookRatioTTM,
    evEbitda: m.enterpriseValueOverEBITDATTM ?? r.enterpriseValueMultipleTTM,
    epsTTM: r.netIncomePerShareTTM ?? m.netIncomePerShareTTM,
    epsGrowthTTMYoy: r.revenueGrowthTTM ?? m.revenuePerShareTTM,
    dividendYield: r.dividendYieldTTM ?? r.dividendYielTTM,
    beta: profile?.beta ?? r.betaTTM,
    high52: profile?.range?.split('-')?.[1]?.trim() || null,
    low52: profile?.range?.split('-')?.[0]?.trim() || null,
    grossMarginTTM: r.grossProfitMarginTTM,
    operatingMarginTTM: r.operatingProfitMarginTTM,
    netProfitMarginTTM: r.netProfitMarginTTM,
    roeTTM: r.returnOnEquityTTM,
    roaTTM: r.returnOnAssetsTTM,
    sharesOutstanding: profile?.sharesOutstanding,
    floatShares: profile?.floatShares,
  };
}

/** Map Finnhub /stock/metric response to our schema. */
export function mapFinnhubMetrics(data) {
  const m = data?.metric;
  if (!m) return null;
  return {
    peTTM: m.peBasicExclExtraTTM ?? m.peTTM,
    peFwd: m.peForwardAnnual,
    peg: m.pegRatio,
    ps: m.psTTM ?? m.psAnnual,
    pb: m.pbAnnual,
    evEbitda: m.evEbitdaTTM ?? m.enterpriseValueEbitdaTTM,
    epsTTM: m.epsBasicExclExtraItemsTTM ?? m.epsTTM,
    epsForward: m.epsForwardAnnual,
    epsGrowthTTMYoy: m.epsGrowthTTMYoy ?? m.epsGrowthQuarterlyYoy,
    dividendYield: m.dividendYieldIndicatedAnnual ?? m.currentDividendYieldTTM,
    beta: m.beta,
    high52: m['52WeekHigh'],
    low52: m['52WeekLow'],
    grossMarginTTM: m.grossMarginTTM,
    operatingMarginTTM: m.operatingMarginTTM,
    netProfitMarginTTM: m.netProfitMarginTTM,
    roeTTM: m.roeTTM,
    roaTTM: m.roaRfy,
    revenueGrowth: m.revenueGrowth3Y ?? m.revenueGrowth5Y,
    sharesOutstanding: m.sharesOutstanding,
    floatShares: m.floatShares,
  };
}

/** TradingView-style sections for quote panel UI. */
export const FUNDAMENTAL_SECTIONS = [
  {
    id: 'key',
    title: 'Key Stats',
    fields: [
      { key: 'marketCap', label: 'Market cap', fmt: 'mcap', fromQuote: true },
      { key: 'sharesOutstanding', label: 'Shares outstanding', fmt: 'shares' },
      { key: 'floatShares', label: 'Float', fmt: 'shares' },
      { key: 'floatPct', label: 'Float %', fmt: 'pct' },
      { key: 'employees', label: 'Employees', fmt: 'num' },
      { key: 'beta', label: 'Beta', fmt: 'num2' },
    ],
  },
  {
    id: 'valuation',
    title: 'Valuation',
    fields: [
      { key: 'pe', label: 'P/E (TTM)', fmt: 'num2' },
      { key: 'peFwd', label: 'Forward P/E', fmt: 'num2' },
      { key: 'peg', label: 'PEG Ratio', fmt: 'num2' },
      { key: 'ps', label: 'Price/Sales', fmt: 'num2' },
      { key: 'pb', label: 'Price/Book', fmt: 'num2' },
      { key: 'evEbitda', label: 'EV/EBITDA', fmt: 'num2' },
      { key: 'evRevenue', label: 'EV/Revenue', fmt: 'num2' },
      { key: 'pcf', label: 'Price/Cash Flow', fmt: 'num2' },
    ],
  },
  {
    id: 'financials',
    title: 'Financials',
    fields: [
      { key: 'eps', label: 'EPS (TTM)', fmt: 'money' },
      { key: 'epsFwd', label: 'EPS (Forward)', fmt: 'money' },
      { key: 'epsGrowth', label: 'EPS Growth YoY', fmt: 'pct' },
      { key: 'revenue', label: 'Revenue (TTM)', fmt: 'mcap' },
      { key: 'revenuePerShare', label: 'Revenue/Share', fmt: 'money' },
      { key: 'revenueGrowth', label: 'Revenue Growth', fmt: 'pct' },
      { key: 'ebitda', label: 'EBITDA', fmt: 'mcap' },
      { key: 'grossMargin', label: 'Gross Margin', fmt: 'pct' },
      { key: 'opMargin', label: 'Operating Margin', fmt: 'pct' },
      { key: 'netMargin', label: 'Net Margin', fmt: 'pct' },
      { key: 'roe', label: 'ROE', fmt: 'pct' },
      { key: 'roa', label: 'ROA', fmt: 'pct' },
      { key: 'roic', label: 'ROIC', fmt: 'pct' },
      { key: 'debtEquity', label: 'Debt/Equity', fmt: 'num2' },
      { key: 'currentRatio', label: 'Current Ratio', fmt: 'num2' },
      { key: 'quickRatio', label: 'Quick Ratio', fmt: 'num2' },
    ],
  },
  {
    id: 'dividends',
    title: 'Dividends',
    fields: [
      { key: 'dividendYield', label: 'Dividend Yield', fmt: 'pct' },
      { key: 'dividend', label: 'Dividend/Share', fmt: 'money' },
      { key: 'payoutRatio', label: 'Payout Ratio', fmt: 'pct' },
      { key: 'exDividendDate', label: 'Ex-Dividend', fmt: 'text' },
    ],
  },
  {
    id: 'performance',
    title: 'Performance',
    fields: [
      { key: 'perf1D', label: '1 Day', fmt: 'pct' },
      { key: 'perf5D', label: '5 Days', fmt: 'pct' },
      { key: 'perf1M', label: '1 Month', fmt: 'pct' },
      { key: 'perf3M', label: '3 Months', fmt: 'pct' },
      { key: 'perf6M', label: '6 Months', fmt: 'pct' },
      { key: 'perfYTD', label: 'YTD', fmt: 'pct' },
      { key: 'perf1Y', label: '1 Year', fmt: 'pct' },
      { key: 'perf5Y', label: '5 Years', fmt: 'pct' },
    ],
  },
  {
    id: 'technicals',
    title: 'Price & Volume',
    fields: [
      { key: 'high52', label: '52W High', fmt: 'money' },
      { key: 'low52', label: '52W Low', fmt: 'money' },
      { key: 'distanceFromHigh', label: 'From 52W High', fmt: 'pct' },
      { key: 'distanceFromLow', label: 'From 52W Low', fmt: 'pct' },
      { key: 'avgVol10', label: 'Avg Vol (10D)', fmt: 'vol' },
      { key: 'avgVol90', label: 'Avg Vol (90D)', fmt: 'vol' },
      { key: 'volume', label: 'Volume', fmt: 'vol', fromQuote: true },
      { key: 'relVolume', label: 'Rel Volume', fmt: 'mult', fromTa: true },
    ],
  },
  {
    id: 'ownership',
    title: 'Ownership & Short',
    fields: [
      { key: 'insiderPct', label: 'Insider %', fmt: 'pct' },
      { key: 'instPct', label: 'Institutional %', fmt: 'pct' },
      { key: 'shortPct', label: 'Short % Float', fmt: 'pct' },
      { key: 'shortRatio', label: 'Short Ratio', fmt: 'num2' },
      { key: 'targetPrice', label: 'Analyst Target', fmt: 'money' },
      { key: 'upside', label: 'Upside to Target', fmt: 'pct' },
    ],
  },
];

export function formatFundValue(value, fmt, quote, ta) {
  if (value == null || value === '' || Number.isNaN(value)) return '—';
  switch (fmt) {
    case 'money': return `$${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    case 'mcap':
      if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
      if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
      if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
      return `$${Number(value).toLocaleString()}`;
    case 'shares':
      if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
      if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
      return Number(value).toLocaleString();
    case 'vol':
      if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
      if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
      if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
      return Number(value).toLocaleString();
    case 'pct': {
      const n = Number(value);
      const sign = n >= 0 ? '+' : '';
      return `${sign}${n.toFixed(2)}%`;
    }
    case 'mult': return `${Number(value).toFixed(2)}x`;
    case 'num2': return Number(value).toFixed(2);
    case 'num': return Number(value).toLocaleString();
    case 'text': return String(value);
    default: return String(value);
  }
}

export function getFieldValue(field, quote, fundamentals, ta) {
  if (field.fromQuote) {
    if (field.key === 'marketCap') return quote.marketCap;
    if (field.key === 'volume') return quote.volume;
    return quote[field.key];
  }
  if (field.fromTa) return ta?.[field.key === 'relVolume' ? 'relVolume' : field.key];
  return fundamentals?.[field.key];
}