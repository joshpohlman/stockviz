import { fmtPrice, fmtPct, fmtVolume, fmtMarketCap } from './format.js';

export function exportToCsv(rows, filename = 'stockviz-screener.csv') {
  const headers = ['Symbol', 'Company', 'Sector', 'Price', 'Change', 'Change %', 'Volume', 'Market Cap'];
  const lines = [
    headers.join(','),
    ...rows.map((q) =>
      [
        q.symbol,
        csvEsc(q.name),
        csvEsc(q.sector),
        fmtPrice(q.price),
        q.change?.toFixed(2) ?? '',
        q.changePct?.toFixed(2) ?? '',
        q.volume ?? '',
        q.marketCap ?? '',
      ].join(','),
    ),
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

function csvEsc(s) {
  const v = String(s ?? '');
  return v.includes(',') || v.includes('"') ? `"${v.replace(/"/g, '""')}"` : v;
}