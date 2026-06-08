import { fmtPrice } from './format.js';

const FULL_HEADERS = [
  'Symbol', 'Company', 'Sector', 'Industry', 'Price', 'Change', 'Change %',
  'Volume', 'Market Cap', 'RSI', 'SMA20', 'SMA50', 'SMA200',
  'P/E', 'Forward P/E', 'PEG', 'P/S', 'P/B', 'EV/EBITDA', 'EPS', 'EPS Fwd', 'EPS Growth',
  'Div Yield', 'Beta', '52W High', '52W Low', 'ROE', 'Net Margin', 'Short %',
  'Primary Signal', 'Pattern', 'Prediction', 'Confidence', 'Target', 'Target %',
];

function csvEsc(s) {
  const v = String(s ?? '');
  return v.includes(',') || v.includes('"') ? `"${v.replace(/"/g, '""')}"` : v;
}

function rowToCsv(q) {
  return [
    q.symbol,
    csvEsc(q.name),
    csvEsc(q.sector),
    csvEsc(q.industry),
    fmtPrice(q.price),
    q.change?.toFixed(2) ?? '',
    q.changePct?.toFixed(2) ?? '',
    q.volume ?? '',
    q.marketCap ?? '',
    q.ta?.rsi?.toFixed(1) ?? '',
    q.ta?.sma20?.toFixed(2) ?? '',
    q.ta?.sma50?.toFixed(2) ?? '',
    q.ta?.sma200?.toFixed(2) ?? '',
    q.fundamentals?.pe ?? '',
    q.fundamentals?.peFwd ?? '',
    q.fundamentals?.peg ?? '',
    q.fundamentals?.ps ?? '',
    q.fundamentals?.pb ?? '',
    q.fundamentals?.evEbitda ?? '',
    q.fundamentals?.eps ?? '',
    q.fundamentals?.epsFwd ?? '',
    q.fundamentals?.epsGrowth ?? '',
    q.fundamentals?.dividendYield ?? '',
    q.fundamentals?.beta ?? '',
    q.fundamentals?.high52 ?? '',
    q.fundamentals?.low52 ?? '',
    q.fundamentals?.roe ?? '',
    q.fundamentals?.netMargin ?? '',
    q.fundamentals?.shortPct ?? '',
    csvEsc(q.primarySignal),
    csvEsc(q.patternLabels?.join('; ')),
    q.prediction?.direction ?? '',
    q.prediction?.confidence ?? '',
    q.prediction?.priceTarget ?? '',
    q.prediction?.targetPct ?? '',
  ].join(',');
}

function rowToJson(q) {
  return {
    symbol: q.symbol,
    name: q.name,
    sector: q.sector,
    industry: q.industry,
    price: q.price,
    change: q.change,
    changePct: q.changePct,
    volume: q.volume,
    marketCap: q.marketCap,
    ta: q.ta,
    fundamentals: q.fundamentals,
    signals: q.signals?.map((s) => s.label),
    patterns: q.patterns,
    prediction: q.prediction,
    timestamp: q.timestamp,
  };
}

export function exportToCsv(rows, filename = 'stockviz-export.csv', full = false) {
  const headers = full ? FULL_HEADERS : ['Symbol', 'Company', 'Sector', 'Price', 'Change', 'Change %', 'Volume', 'Market Cap'];
  const lines = [
    headers.join(','),
    ...rows.map((q) => full ? rowToCsv(q) : [
      q.symbol, csvEsc(q.name), csvEsc(q.sector), fmtPrice(q.price),
      q.change?.toFixed(2) ?? '', q.changePct?.toFixed(2) ?? '', q.volume ?? '', q.marketCap ?? '',
    ].join(',')),
  ];
  downloadBlob(lines.join('\n'), filename, 'text/csv;charset=utf-8');
}

export function exportToJson(rows, filename = 'stockviz-export.json') {
  const data = {
    exportedAt: new Date().toISOString(),
    count: rows.length,
    stocks: rows.map(rowToJson),
  };
  downloadBlob(JSON.stringify(data, null, 2), filename, 'application/json');
}

export function exportApiPayload(rows) {
  return {
    api: 'StockViz Export API v1',
    version: '1.0',
    exportedAt: new Date().toISOString(),
    count: rows.length,
    endpoints: {
      screener: 'GET /api/v1/screener — full universe with TA',
      quote: 'GET /api/v1/quote?symbol=AAPL — single stock',
      signals: 'GET /api/v1/signals — stocks by signal',
      patterns: 'GET /api/v1/patterns — pattern scanner results',
    },
    data: rows.map(rowToJson),
  };
}

export async function copyJsonToClipboard(rows) {
  const payload = exportApiPayload(rows);
  await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
  return payload.count;
}

function downloadBlob(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}