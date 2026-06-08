import { rsi, sma } from './indicators.js';

const STRATEGIES = {
  rsi_oversold: {
    label: 'RSI Oversold Bounce',
    desc: 'Buy when RSI < 30, sell when RSI > 70',
    entry: (ctx) => ctx.rsi < 30,
    exit: (ctx) => ctx.rsi > 70,
  },
  rsi_overbought_short: {
    label: 'RSI Overbought Fade',
    desc: 'Short when RSI > 70, cover when RSI < 40',
    entry: (ctx) => ctx.rsi > 70,
    exit: (ctx) => ctx.rsi < 40,
    short: true,
  },
  sma_cross: {
    label: 'SMA 20/50 Cross',
    desc: 'Buy golden cross, sell death cross',
    entry: (ctx) => ctx.sma20 > ctx.sma50 && ctx.prevSma20 <= ctx.prevSma50,
    exit: (ctx) => ctx.sma20 < ctx.sma50 && ctx.prevSma20 >= ctx.prevSma50,
  },
  momentum_breakout: {
    label: '5-Day Momentum',
    desc: 'Buy 3%+ 5-day move, exit on reversal',
    entry: (ctx) => ctx.mom5 > 3,
    exit: (ctx) => ctx.mom5 < 0,
  },
  macd_trend: {
    label: 'MACD Histogram Trend',
    desc: 'Buy positive histogram, sell negative',
    entry: (ctx) => ctx.hist > 0 && ctx.prevHist <= 0,
    exit: (ctx) => ctx.hist < 0 && ctx.prevHist >= 0,
  },
};

export function getStrategies() {
  return Object.entries(STRATEGIES).map(([id, s]) => ({ id, label: s.label, desc: s.desc }));
}

function buildContext(candles, i) {
  const slice = candles.slice(0, i + 1);
  const closes = slice.map((c) => c.c);
  const prevSlice = candles.slice(0, i);
  const prevCloses = prevSlice.map((c) => c.c);
  const rsiVal = rsi(closes);
  const sma20 = sma(closes, 20);
  const sma50 = sma(closes, 50);
  const prevSma20 = sma(prevCloses, 20);
  const prevSma50 = sma(prevCloses, 50);
  const mom5 = closes.length >= 6
    ? ((closes[closes.length - 1] - closes[closes.length - 6]) / closes[closes.length - 6]) * 100
    : 0;
  const ema12 = emaSimple(closes, 12);
  const ema26 = emaSimple(closes, 26);
  const hist = (ema12 ?? 0) - (ema26 ?? 0);
  const prevEma12 = emaSimple(prevCloses, 12);
  const prevEma26 = emaSimple(prevCloses, 26);
  const prevHist = (prevEma12 ?? 0) - (prevEma26 ?? 0);

  return {
    price: closes[closes.length - 1],
    rsi: rsiVal,
    sma20, sma50, prevSma20, prevSma50,
    mom5, hist, prevHist,
  };
}

function emaSimple(closes, period) {
  if (closes.length < period) return null;
  const k = 2 / (period + 1);
  let val = closes.slice(0, period).reduce((a, b) => a + b, 0) / period;
  for (let i = period; i < closes.length; i++) val = closes[i] * k + val * (1 - k);
  return val;
}

export function runBacktest(candles, strategyId, { initialCapital = 10000 } = {}) {
  const strategy = STRATEGIES[strategyId];
  if (!strategy || !candles?.length) {
    return { trades: [], equity: [], stats: emptyStats(initialCapital) };
  }

  const trades = [];
  const equity = [];
  let cash = initialCapital;
  let shares = 0;
  let entryPrice = 0;
  let entryIdx = 0;
  const isShort = strategy.short;

  for (let i = 20; i < candles.length; i++) {
    const ctx = buildContext(candles, i);
    const price = ctx.price;

    if (!shares && strategy.entry(ctx)) {
      shares = cash / price;
      entryPrice = price;
      entryIdx = i;
      if (isShort) cash = 0;
      else cash = 0;
    } else if (shares && strategy.exit(ctx)) {
      const pl = isShort
        ? (entryPrice - price) * shares
        : (price - entryPrice) * shares;
      const plPct = ((price - entryPrice) / entryPrice) * 100 * (isShort ? -1 : 1);
      trades.push({
        entryIdx, exitIdx: i,
        entryPrice, exitPrice: price,
        pl, plPct,
        days: i - entryIdx,
      });
      cash = initialCapital + trades.reduce((s, t) => s + t.pl, 0);
      shares = 0;
    }

    const portVal = shares
      ? (isShort ? cash + (entryPrice - price) * shares : shares * price)
      : cash;
    equity.push({ i, value: portVal, date: candles[i].t });
  }

  if (shares) {
    const price = candles[candles.length - 1].c;
    const pl = isShort
      ? (entryPrice - price) * shares
      : (price - entryPrice) * shares;
    trades.push({
      entryIdx, exitIdx: candles.length - 1,
      entryPrice, exitPrice: price,
      pl, plPct: ((price - entryPrice) / entryPrice) * 100 * (isShort ? -1 : 1),
      days: candles.length - 1 - entryIdx, open: true,
    });
  }

  const finalValue = equity.length ? equity[equity.length - 1].value : initialCapital;
  const stats = computeStats(trades, initialCapital, finalValue, equity);

  return { trades, equity, stats, strategy: strategy.label };
}

function computeStats(trades, initial, final, equity) {
  const closed = trades.filter((t) => !t.open);
  const wins = closed.filter((t) => t.pl > 0);
  const totalPl = final - initial;
  const totalReturn = (totalPl / initial) * 100;

  let peak = initial;
  let maxDd = 0;
  for (const e of equity) {
    if (e.value > peak) peak = e.value;
    const dd = ((peak - e.value) / peak) * 100;
    if (dd > maxDd) maxDd = dd;
  }

  const returns = equity.slice(1).map((e, i) => (e.value - equity[i].value) / equity[i].value);
  const avgRet = returns.length ? returns.reduce((a, b) => a + b, 0) / returns.length : 0;
  const std = returns.length > 1
    ? Math.sqrt(returns.reduce((s, r) => s + (r - avgRet) ** 2, 0) / returns.length)
    : 0;
  const sharpe = std ? (avgRet / std) * Math.sqrt(252) : 0;

  return {
    totalReturn,
    totalPl,
    finalValue: final,
    tradeCount: closed.length,
    winRate: closed.length ? (wins.length / closed.length) * 100 : 0,
    avgWin: wins.length ? wins.reduce((s, t) => s + t.plPct, 0) / wins.length : 0,
    avgLoss: closed.filter((t) => t.pl <= 0).length
      ? closed.filter((t) => t.pl <= 0).reduce((s, t) => s + t.plPct, 0) / closed.filter((t) => t.pl <= 0).length
      : 0,
    maxDrawdown: maxDd,
    sharpe,
    profitFactor: closed.filter((t) => t.pl < 0).length
      ? Math.abs(wins.reduce((s, t) => s + t.pl, 0) / closed.filter((t) => t.pl < 0).reduce((s, t) => s + t.pl, 0))
      : wins.length ? 999 : 0,
  };
}

function emptyStats(initial) {
  return {
    totalReturn: 0, totalPl: 0, finalValue: initial,
    tradeCount: 0, winRate: 0, avgWin: 0, avgLoss: 0,
    maxDrawdown: 0, sharpe: 0, profitFactor: 0,
  };
}

export function monteCarloProjection(candles, { simulations = 500, days = 20 } = {}) {
  if (!candles?.length) return null;
  const closes = candles.map((c) => c.c);
  const rets = [];
  for (let i = 1; i < closes.length; i++) rets.push((closes[i] - closes[i - 1]) / closes[i - 1]);
  const mean = rets.reduce((a, b) => a + b, 0) / rets.length;
  const std = Math.sqrt(rets.reduce((s, r) => s + (r - mean) ** 2, 0) / rets.length);
  const start = closes[closes.length - 1];
  const paths = [];

  for (let s = 0; s < simulations; s++) {
    let price = start;
    const path = [price];
    for (let d = 0; d < days; d++) {
      const z = boxMuller();
      price = Math.max(1, price * (1 + mean + std * z));
      path.push(price);
    }
    paths.push(path);
  }

  const finals = paths.map((p) => p[p.length - 1]).sort((a, b) => a - b);
  const pct = (p) => finals[Math.floor(simulations * p)];

  return {
    start,
    days,
    simulations,
    median: pct(0.5),
    p10: pct(0.1),
    p90: pct(0.9),
    bullishPct: (finals.filter((f) => f > start).length / simulations) * 100,
    paths: paths.slice(0, 50),
  };
}

function boxMuller() {
  const u = 1 - Math.random();
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}