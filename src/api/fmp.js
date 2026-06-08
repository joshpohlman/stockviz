/** Financial Modeling Prep REST API client (stable endpoints). */

const FMP_BASE = 'https://financialmodelingprep.com/stable';
const QUOTE_CHUNK = 40;
const CHUNK_DELAY_MS = 250;

function fmpUrl(path, apiKey, params = {}) {
  const u = new URL(`${FMP_BASE}${path}`);
  u.searchParams.set('apikey', apiKey);
  for (const [k, v] of Object.entries(params)) {
    if (v != null && v !== '') u.searchParams.set(k, v);
  }
  return u.toString();
}

const FETCH_TIMEOUT_MS = 20000;

async function fmpFetch(path, apiKey, params = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(fmpUrl(path, apiKey, params), { signal: controller.signal });
    if (!res.ok) throw new Error(`FMP ${res.status}`);
    const data = await res.json();
    if (data?.['Error Message']) throw new Error(data['Error Message']);
    return data;
  } catch (err) {
    if (err.name === 'AbortError') throw new Error('FMP request timed out');
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/** Normalize symbols for FMP (BRK.B → BRK-B). */
export function toFmpSymbol(symbol) {
  return symbol.replace('.', '-');
}

export function fromFmpSymbol(symbol) {
  return symbol.replace(/-/g, '.');
}

function mapFmpQuote(row) {
  if (row?.price == null) return null;
  const sym = fromFmpSymbol(row.symbol);
  const price = row.price;
  const prevClose = row.previousClose ?? price;
  const change = row.change ?? price - prevClose;
  const changePct = row.changesPercentage ?? row.changePercentage ?? (prevClose ? (change / prevClose) * 100 : 0);
  return {
    symbol: sym,
    price,
    open: row.open ?? price,
    high: row.dayHigh ?? row.high ?? price,
    low: row.dayLow ?? row.low ?? price,
    prevClose,
    change,
    changePct,
    volume: row.volume ?? 0,
    timestamp: row.timestamp ? row.timestamp * 1000 : Date.now(),
    name: row.name,
    marketCap: row.marketCap,
  };
}

export async function fetchFmpBatchQuotes(symbols, apiKey, { onChunk } = {}) {
  const results = new Map();
  for (let i = 0; i < symbols.length; i += QUOTE_CHUNK) {
    const chunk = symbols.slice(i, i + QUOTE_CHUNK).map(toFmpSymbol);
    try {
      const data = await fmpFetch('/batch-quote', apiKey, { symbols: chunk.join(',') });
      const rows = Array.isArray(data) ? data : [data];
      for (const row of rows) {
        if (!row?.symbol) continue;
        const mapped = mapFmpQuote(row);
        if (mapped) results.set(mapped.symbol, mapped);
      }
      if (onChunk) onChunk(new Map(results));
    } catch (err) {
      console.warn(`FMP batch quote chunk ${i / QUOTE_CHUNK + 1} failed:`, err.message);
      if (onChunk && results.size) onChunk(new Map(results));
    }
    if (i + QUOTE_CHUNK < symbols.length) await delay(CHUNK_DELAY_MS);
  }
  return results;
}

export async function fetchFmpQuote(symbol, apiKey) {
  const data = await fmpFetch('/quote', apiKey, { symbol: toFmpSymbol(symbol) });
  const row = Array.isArray(data) ? data[0] : data;
  if (row?.price == null) throw new Error('No FMP quote');
  return mapFmpQuote(row);
}

export async function fetchFmpProfile(symbol, apiKey) {
  const data = await fmpFetch('/profile', apiKey, { symbol: toFmpSymbol(symbol) });
  return Array.isArray(data) ? data[0] : data;
}

export async function fetchFmpRatiosTtm(symbol, apiKey) {
  const data = await fmpFetch('/ratios-ttm', apiKey, { symbol: toFmpSymbol(symbol) });
  return Array.isArray(data) ? data[0] : data;
}

export async function fetchFmpKeyMetricsTtm(symbol, apiKey) {
  const data = await fmpFetch('/key-metrics-ttm', apiKey, { symbol: toFmpSymbol(symbol) });
  return Array.isArray(data) ? data[0] : data;
}

export async function fetchFmpFundamentals(symbol, apiKey) {
  const [ratios, metrics, profile] = await Promise.all([
    fetchFmpRatiosTtm(symbol, apiKey).catch(() => null),
    fetchFmpKeyMetricsTtm(symbol, apiKey).catch(() => null),
    fetchFmpProfile(symbol, apiKey).catch(() => null),
  ]);
  return { ratios, metrics, profile };
}

export async function fetchFmpCandles(symbol, apiKey, count = 60) {
  const data = await fmpFetch('/historical-price-eod/full', apiKey, { symbol: toFmpSymbol(symbol) });
  const rows = Array.isArray(data) ? data : data?.historical || [];
  return rows.slice(0, count).reverse().map((r) => ({
    t: new Date(r.date).getTime(),
    o: r.open,
    h: r.high,
    l: r.low,
    c: r.close,
    v: r.volume,
  }));
}

export async function fetchFmpGeneralNews(apiKey, limit = 20) {
  const data = await fmpFetch('/news/general-latest', apiKey, { page: 0, limit });
  return (Array.isArray(data) ? data : []).map(mapFmpNews);
}

export async function fetchFmpStockNews(symbol, apiKey, limit = 8) {
  const data = await fmpFetch('/news/stock', apiKey, { symbols: toFmpSymbol(symbol), limit });
  return (Array.isArray(data) ? data : []).map(mapFmpNews);
}

function mapFmpNews(n) {
  return {
    headline: n.title,
    title: n.title,
    source: n.site || n.publisher || '',
    url: n.url || '#',
    datetime: n.publishedDate ? Math.floor(new Date(n.publishedDate).getTime() / 1000) : undefined,
    symbol: n.symbol,
  };
}

export async function fetchFmpEarningsCalendar(apiKey) {
  const from = new Date().toISOString().slice(0, 10);
  const to = new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10);
  const data = await fmpFetch('/earnings-calendar', apiKey, { from, to });
  return (Array.isArray(data) ? data : []).slice(0, 30).map((e) => ({
    symbol: e.symbol,
    date: formatEarningsDate(e.date, e.time),
    epsEst: e.epsEstimated ?? e.eps ?? 0,
    cap: e.marketCap ? 'Large' : '—',
    rawDate: e.date,
    time: e.time,
  }));
}

function formatEarningsDate(date, time) {
  const today = new Date().toISOString().slice(0, 10);
  const tmr = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  const d = date?.slice(0, 10);
  let label = d || date;
  if (d === today) label = 'Today';
  else if (d === tmr) label = 'Tomorrow';
  const slot = time === 'bmo' ? ' BMO' : time === 'amc' ? ' AMC' : time ? ` ${time}` : '';
  return `${label}${slot}`;
}

export async function fetchFmpEconomicCalendar(apiKey) {
  const from = new Date().toISOString().slice(0, 10);
  const to = new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10);
  const data = await fmpFetch('/economic-calendar', apiKey, { from, to });
  return (Array.isArray(data) ? data : []).slice(0, 10).map((e) => ({
    date: e.date?.slice(5, 10) || e.date,
    time: e.time || '',
    impact: (e.impact || 'medium').toLowerCase(),
    event: e.event || e.name || '—',
    expected: e.estimate ?? e.forecast ?? '—',
    actual: e.actual ?? '—',
    prior: e.previous ?? '—',
  }));
}

function mapInsiderType(t) {
  const code = (t.transactionType || '').toUpperCase();
  const disp = (t.acquisitionOrDisposition || t.acquistionOrDisposition || '').toUpperCase();
  if (code === 'P' || disp === 'A' || /purchase|buy/i.test(t.transactionType || '')) return 'Buy';
  if (code === 'S' || disp === 'D' || /sale|sell/i.test(t.transactionType || '')) return 'Sale';
  return 'Sale';
}

export async function fetchFmpInsiderTrades(apiKey, limit = 20) {
  const data = await fmpFetch('/insider-trading/latest', apiKey, { page: 0, limit });
  return (Array.isArray(data) ? data : []).slice(0, limit).map((t) => ({
    symbol: t.symbol,
    insider: t.reportingName || t.name || '—',
    relation: t.typeOfOwner || t.ownerType || '—',
    date: t.transactionDate?.slice(5) || t.filingDate?.slice(5) || '—',
    type: mapInsiderType(t),
    cost: t.price ?? 0,
    shares: Math.abs(t.securitiesTransacted ?? t.shares ?? 0),
    value: Math.abs((t.securitiesTransacted ?? 0) * (t.price ?? 0)),
  }));
}

export async function fetchFmpCommodityQuotes(apiKey) {
  const data = await fmpFetch('/batch-commodity-quotes', apiKey);
  const map = { CL: 'Crude Oil', NG: 'Natural Gas', GC: 'Gold', SI: 'Silver' };
  return (Array.isArray(data) ? data : []).filter((q) => map[q.symbol] || q.name).slice(0, 7).map((q) => ({
    name: map[q.symbol] || q.name || q.symbol,
    symbol: q.symbol,
    last: q.price ?? 0,
    change: q.change ?? 0,
    changePct: q.changesPercentage ?? q.changePercentage ?? 0,
  }));
}

export async function fetchFmpForexQuotes(apiKey) {
  const data = await fmpFetch('/batch-forex-quotes', apiKey);
  const want = ['EURUSD', 'USDJPY', 'GBPUSD', 'BTCUSD'];
  return (Array.isArray(data) ? data : [])
    .filter((q) => want.includes(q.symbol) || want.some((w) => q.symbol?.includes(w)))
    .slice(0, 4)
    .map((q) => ({
      pair: formatForexPair(q.symbol),
      symbol: q.symbol,
      last: q.price ?? 0,
      change: q.change ?? 0,
      changePct: q.changesPercentage ?? q.changePercentage ?? 0,
    }));
}

function formatForexPair(sym) {
  if (!sym || sym.length < 6) return sym;
  return `${sym.slice(0, 3)}/${sym.slice(3, 6)}`;
}

export async function fetchFmpIndexQuotes(apiKey) {
  const data = await fmpFetch('/batch-index-quotes', apiKey);
  const map = { '^DJI': 'Dow', '^GSPC': 'S&P 500', '^IXIC': 'Nasdaq', '^RUT': 'Russell 2000', '^VIX': 'VIX' };
  return (Array.isArray(data) ? data : []).filter((q) => map[q.symbol]).map((q) => ({
    name: map[q.symbol],
    symbol: q.symbol,
    last: q.price ?? 0,
    change: q.change ?? 0,
    changePct: q.changesPercentage ?? q.changePercentage ?? 0,
  }));
}

/** End-of-day index history for mini charts (^GSPC, ^DJI, etc.). */
export async function fetchFmpIndexHistory(symbol, apiKey, count = 60) {
  const data = await fmpFetch('/historical-price-eod/light', apiKey, { symbol });
  const rows = Array.isArray(data) ? data : data?.historical || [];
  return rows.slice(0, count).reverse().map((r) => ({
    t: new Date(r.date).getTime(),
    c: r.price ?? r.close ?? 0,
    v: r.volume ?? 0,
  }));
}

function treasuryRow(name, last, prev) {
  const change = last != null && prev != null ? last - prev : 0;
  const changePct = prev ? (change / prev) * 100 : 0;
  return { name, last: last ?? 0, change, changePct };
}

export async function fetchFmpTreasuryRates(apiKey) {
  const data = await fmpFetch('/treasury-rates', apiKey);
  const rows = Array.isArray(data) ? data : [];
  const latest = rows[0];
  const prior = rows[1];
  if (!latest) return [];
  return [
    treasuryRow('5-Year Treasury', latest.year5, prior?.year5),
    treasuryRow('10-Year Treasury', latest.year10, prior?.year10),
    treasuryRow('30-Year Treasury', latest.year30, prior?.year30),
  ];
}

export async function fetchFmpMarketHours(apiKey) {
  try {
    const data = await fmpFetch('/exchange-market-hours', apiKey, { exchange: 'NYSE' });
    const row = Array.isArray(data) ? data[0] : data;
    const open = row?.isMarketOpen ?? row?.stockMarketHours?.isTheStockMarketOpen;
    return {
      isOpen: !!open,
      label: open ? 'US Market Open' : 'US Market Closed',
    };
  } catch {
    const h = new Date().getHours();
    const open = h >= 9 && h < 16;
    return { isOpen: open, label: open ? 'US Market Open' : 'US Market Closed' };
  }
}

export async function validateFmpApiKey(apiKey) {
  if (!apiKey?.trim()) return { valid: false, message: 'API key is required' };
  try {
    await fetchFmpQuote('AAPL', apiKey.trim());
    return { valid: true, message: 'Connected to Financial Modeling Prep' };
  } catch (e) {
    return { valid: false, message: e.message || 'FMP connection failed' };
  }
}

export async function fetchFmpGradesConsensus(symbol, apiKey) {
  const data = await fmpFetch('/grades-consensus', apiKey, { symbol: toFmpSymbol(symbol) });
  return Array.isArray(data) ? data[0] : data;
}

export async function fetchFmpPriceTargetConsensus(symbol, apiKey) {
  const data = await fmpFetch('/price-target-consensus', apiKey, { symbol: toFmpSymbol(symbol) });
  return Array.isArray(data) ? data[0] : data;
}

export async function fetchFmpPriceTargetSummary(symbol, apiKey) {
  const data = await fmpFetch('/price-target-summary', apiKey, { symbol: toFmpSymbol(symbol) });
  return Array.isArray(data) ? data[0] : data;
}

export async function fetchFmpAnalystData(symbol, apiKey) {
  const [grades, target, summary] = await Promise.all([
    fetchFmpGradesConsensus(symbol, apiKey).catch(() => null),
    fetchFmpPriceTargetConsensus(symbol, apiKey).catch(() => null),
    fetchFmpPriceTargetSummary(symbol, apiKey).catch(() => null),
  ]);
  return mapFmpAnalyst(symbol, grades, target, summary);
}

function mapFmpAnalyst(symbol, grades, target, summary) {
  if (!grades && !target && !summary) return null;
  const consensus = grades?.consensus || grades?.rating || summary?.consensus || 'Hold';
  const targetPrice = target?.targetConsensus
    ?? target?.targetMedian
    ?? target?.lastTarget
    ?? summary?.lastMonthAvgPriceTarget
    ?? summary?.allTimeAvgPriceTarget
    ?? null;
  return {
    symbol,
    consensus,
    target: targetPrice,
    numAnalysts: grades?.numberOfAnalysts ?? target?.numberOfAnalysts ?? summary?.numberOfAnalysts ?? 0,
    strongBuy: grades?.strongBuy ?? 0,
    buy: grades?.buy ?? 0,
    hold: grades?.hold ?? 0,
    sell: grades?.sell ?? 0,
    strongSell: grades?.strongSell ?? 0,
    revisions: (grades?.upgradesLastMonth ?? 0) - (grades?.downgradesLastMonth ?? 0),
    lastUpdate: grades?.date || target?.lastUpdated || summary?.lastUpdated || '—',
  };
}

export async function fetchFmpBatchAnalyst(symbols, apiKey) {
  const results = [];
  for (let i = 0; i < symbols.length; i += 5) {
    const chunk = symbols.slice(i, i + 5);
    const rows = await Promise.all(chunk.map((s) => fetchFmpAnalystData(s, apiKey).catch(() => null)));
    for (const r of rows) if (r) results.push(r);
    if (i + 5 < symbols.length) await delay(300);
  }
  return results;
}

export async function fetchFmpSharesFloat(symbol, apiKey) {
  const data = await fmpFetch('/shares-float', apiKey, { symbol: toFmpSymbol(symbol) });
  return Array.isArray(data) ? data[0] : data;
}

function normalizeShortPct(value) {
  if (value == null || Number.isNaN(value)) return 0;
  if (value > 0 && value < 1) return value * 100;
  return value;
}

export async function fetchFmpShortInterest(symbol, apiKey) {
  const [sharesFloat] = await Promise.all([
    fetchFmpSharesFloat(symbol, apiKey).catch(() => null),
  ]);
  if (!sharesFloat) return null;

  const shortPct = normalizeShortPct(sharesFloat.shortPercentOfFloat ?? sharesFloat.shortPercent ?? 0);
  const daysToCover = sharesFloat.daysToCover ?? sharesFloat.shortRatio ?? 0;
  if (!shortPct && !daysToCover) return null;

  return { symbol, shortPct, daysToCover, change: 0 };
}

export async function fetchFmpBatchShortInterest(symbols, apiKey) {
  const results = [];
  for (let i = 0; i < symbols.length; i += 5) {
    const chunk = symbols.slice(i, i + 5);
    const rows = await Promise.all(chunk.map((s) => fetchFmpShortInterest(s, apiKey).catch(() => null)));
    for (const r of rows) if (r) results.push(r);
    if (i + 5 < symbols.length) await delay(300);
  }
  return results;
}

export async function fetchFmpOptionsChain(symbol, apiKey) {
  const data = await fmpFetch('/options-chain', apiKey, { symbol: toFmpSymbol(symbol) });
  const rows = Array.isArray(data) ? data : data?.options || [];
  return rows.slice(0, 30).map((o) => ({
    symbol,
    type: o.type === 'call' ? 'Call' : 'Put',
    strike: o.strike ?? 0,
    expiry: o.expirationDate?.slice(5) || o.expiration || '—',
    premium: o.last ?? o.bid ?? 0,
    contracts: o.volume ?? o.openInterest ?? 0,
    notional: (o.volume ?? 0) * (o.last ?? 0) * 100,
    sentiment: o.type === 'call' ? 'bullish' : 'bearish',
    unusual: (o.volume ?? 0) > 1000,
  }));
}

export async function fetchFmpBatchOptions(symbols, apiKey, limit = 40) {
  const top = symbols.slice(0, 12);
  const all = [];
  for (const sym of top) {
    const chain = await fetchFmpOptionsChain(sym, apiKey).catch(() => []);
    const unusual = chain.filter((o) => o.unusual).sort((a, b) => b.notional - a.notional).slice(0, 4);
    all.push(...unusual);
    await delay(200);
  }
  return all.sort((a, b) => b.notional - a.notional).slice(0, limit);
}

export async function fetchFmpFinancials(symbol, apiKey) {
  const [income, balance, cash] = await Promise.all([
    fmpFetch('/income-statement', apiKey, { symbol: toFmpSymbol(symbol), period: 'annual', limit: 4 }).catch(() => []),
    fmpFetch('/balance-sheet-statement', apiKey, { symbol: toFmpSymbol(symbol), period: 'annual', limit: 4 }).catch(() => []),
    fmpFetch('/cash-flow-statement', apiKey, { symbol: toFmpSymbol(symbol), period: 'annual', limit: 4 }).catch(() => []),
  ]);
  return {
    income: (Array.isArray(income) ? income : []).slice(0, 4),
    balance: (Array.isArray(balance) ? balance : []).slice(0, 4),
    cash: (Array.isArray(cash) ? cash : []).slice(0, 4),
  };
}

function mapSecFiling(f) {
  return {
    type: f.type || f.formType || f.form || 'Filing',
    date: f.fillingDate?.slice(0, 10) || f.filingDate?.slice(0, 10) || f.date?.slice(0, 10) || '—',
    url: f.finalLink || f.link || f.url || '#',
    title: f.description || f.title || `${f.type || f.formType || 'SEC'} filing`,
  };
}

export async function fetchFmpSecFilings(symbol, apiKey) {
  const sym = toFmpSymbol(symbol);
  const to = new Date().toISOString().slice(0, 10);
  const from = new Date(Date.now() - 365 * 86400000).toISOString().slice(0, 10);

  try {
    const data = await fmpFetch('/sec-filings-search/symbol', apiKey, { symbol: sym, from, to, page: 0, limit: 10 });
    const rows = Array.isArray(data) ? data : data?.filings || [];
    return rows.map(mapSecFiling);
  } catch {
    return [];
  }
}

export async function fetchFmpSp500Constituents(apiKey) {
  const data = await fmpFetch('/sp500-constituent', apiKey);
  const rows = Array.isArray(data) ? data : [];
  return rows.map((r) => ({
    symbol: fromFmpSymbol(r.symbol),
    name: r.name || r.companyName || r.symbol,
    sector: r.sector || r.sectorName || '—',
    industry: r.subSector || r.industry || r.subIndustry || '—',
    subSector: r.subSector,
    marketCap: r.marketCap || 0,
    dateAdded: r.dateAdded || r.dateFirstAdded,
  }));
}

export async function fetchFmpDividendCalendar(apiKey) {
  const from = new Date().toISOString().slice(0, 10);
  const to = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10);
  const data = await fmpFetch('/dividends-calendar', apiKey, { from, to });
  return (Array.isArray(data) ? data : []).slice(0, 50).map((d) => ({
    symbol: d.symbol,
    date: d.date?.slice(0, 10) || d.paymentDate?.slice(0, 10) || '—',
    exDate: d.exDividendDate?.slice(0, 10) || d.date?.slice(0, 10) || '—',
    amount: d.dividend ?? d.adjDividend ?? 0,
    yield: d.yield ?? null,
  }));
}

export async function fetchFmpExtendedQuote(symbol, apiKey) {
  try {
    const data = await fmpFetch('/aftermarket-quote', apiKey, { symbol: toFmpSymbol(symbol) });
    const row = Array.isArray(data) ? data[0] : data;
    if (!row?.price) return null;
    return {
      price: row.price,
      change: row.change ?? 0,
      changePct: row.changesPercentage ?? row.changePercentage ?? 0,
      session: 'after-hours',
    };
  } catch {
    return null;
  }
}

export async function fetchFmpIndexTickerQuotes(apiKey) {
  const data = await fmpFetch('/batch-index-quotes', apiKey);
  const map = {
    '^GSPC': { label: 'S&P 500', etf: 'SPY' },
    '^IXIC': { label: 'NASDAQ', etf: 'QQQ' },
    '^DJI': { label: 'DOW', etf: 'DIA' },
    '^RUT': { label: 'RUSSELL 2K', etf: 'IWM' },
  };
  const indices = Array.isArray(data) ? data : [];
  const out = new Map();
  for (const q of indices) {
    const meta = map[q.symbol];
    if (!meta) continue;
    out.set(q.symbol, {
      symbol: q.symbol,
      etf: meta.etf,
      label: meta.label,
      price: q.price ?? 0,
      change: q.change ?? 0,
      changePct: q.changesPercentage ?? q.changePercentage ?? 0,
      isIndex: true,
    });
  }
  return out;
}

/** Fetch all home-page widget data in one parallel batch. */
export async function fetchFmpMarketWidgets(apiKey) {
  const [earnings, economic, insider, commodities, forex, indices, treasury] = await Promise.all([
    fetchFmpEarningsCalendar(apiKey).catch(() => null),
    fetchFmpEconomicCalendar(apiKey).catch(() => null),
    fetchFmpInsiderTrades(apiKey).catch(() => null),
    fetchFmpCommodityQuotes(apiKey).catch(() => null),
    fetchFmpForexQuotes(apiKey).catch(() => null),
    fetchFmpIndexQuotes(apiKey).catch(() => null),
    fetchFmpTreasuryRates(apiKey).catch(() => null),
  ]);

  const futures = [
    ...(commodities || []),
    ...(indices || []),
  ];

  return {
    earnings: earnings || [],
    economic: economic || [],
    insider: insider || [],
    futures: futures.length ? futures : null,
    forex: forex || [],
    bonds: treasury || [],
  };
}