import {
  fetchFmpQuote,
  fetchFmpBatchQuotes,
  fetchFmpGeneralNews,
  fetchFmpEarningsCalendar,
  fetchFmpInsiderTrades,
  fetchFmpAnalystData,
  fetchFmpShortInterest,
  fetchFmpOptionsChain,
  fetchFmpFinancials,
  fetchFmpSecFilings,
  fetchFmpDividendCalendar,
  fetchFmpExtendedQuote,
  fetchFmpSp500Constituents,
  fetchFmpRatiosTtm,
  fetchFmpSharesFloat,
} from './fmp.js';

async function probe(name, fn) {
  const start = Date.now();
  try {
    const data = await fn();
    const ok = data != null && (!(Array.isArray(data)) || data.length > 0);
    return {
      name,
      ok,
      ms: Date.now() - start,
      detail: ok ? 'Live' : 'Empty response',
    };
  } catch (e) {
    return {
      name,
      ok: false,
      ms: Date.now() - start,
      detail: e.message || 'Failed',
    };
  }
}

/** Run FMP endpoint health checks (uses ~15 API calls). */
export async function auditFmpEndpoints(apiKey) {
  const key = apiKey?.trim();
  if (!key) return { valid: false, results: [], message: 'No FMP API key' };

  const results = await Promise.all([
    probe('Stock Quote', () => fetchFmpQuote('AAPL', key)),
    probe('Batch Quotes', () => fetchFmpBatchQuotes(['AAPL', 'MSFT'], key).then((m) => [...m.values()])),
    probe('S&P 500 List', () => fetchFmpSp500Constituents(key)),
    probe('Ratios TTM', () => fetchFmpRatiosTtm('AAPL', key)),
    probe('General News', () => fetchFmpGeneralNews(key, 3)),
    probe('Earnings Calendar', () => fetchFmpEarningsCalendar(key)),
    probe('Insider Trades', () => fetchFmpInsiderTrades(key, 5)),
    probe('Analyst Grades', () => fetchFmpAnalystData('AAPL', key)),
    probe('Shares Float (shorts)', () => fetchFmpSharesFloat('AAPL', key)),
    probe('Options Chain', () => fetchFmpOptionsChain('AAPL', key)),
    probe('Financials', () => fetchFmpFinancials('AAPL', key)),
    probe('SEC Filings', () => fetchFmpSecFilings('AAPL', key)),
    probe('Dividend Calendar', () => fetchFmpDividendCalendar(key)),
    probe('After-Hours Quote', () => fetchFmpExtendedQuote('AAPL', key)),
  ]);

  const live = results.filter((r) => r.ok).length;
  return {
    valid: live > 0,
    live,
    total: results.length,
    results,
    message: `${live}/${results.length} endpoints returned live data`,
  };
}