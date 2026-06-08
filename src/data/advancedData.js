import { UNIVERSE } from './universe.js';

function seededRand(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

const OPTIONS_TYPES = ['Call Sweep', 'Put Sweep', 'Block Call', 'Block Put', 'Unusual OI', 'Golden Sweep'];
const SENTIMENTS = ['bullish', 'bearish', 'neutral'];

export function generateOptionsFlow(quotes, limit = 40) {
  const rows = [...quotes.values()]
    .filter((q) => q.volume > 1_000_000)
    .sort((a, b) => (b.ta?.relVolume ?? 1) - (a.ta?.relVolume ?? 1))
    .slice(0, limit);

  return rows.map((q) => {
    const r = seededRand(q.symbol + 'opt');
    const strike = Math.round(q.price * (0.9 + r() * 0.2) * 2) / 2;
    const premium = Math.round((0.5 + r() * 8) * 100) / 100;
    const contracts = Math.floor(500 + r() * 15000);
    const type = OPTIONS_TYPES[Math.floor(r() * OPTIONS_TYPES.length)];
    const dte = [1, 3, 7, 14, 30, 45, 60][Math.floor(r() * 7)];
    const sentiment = type.includes('Call') || type.includes('Golden') ? 'bullish' : type.includes('Put') ? 'bearish' : SENTIMENTS[Math.floor(r() * 3)];
    const notional = contracts * premium * 100;

    return {
      symbol: q.symbol,
      type,
      strike,
      expiry: `+${dte}d`,
      premium,
      contracts,
      notional,
      sentiment,
      relVolume: q.ta?.relVolume ?? 1,
      price: q.price,
      changePct: q.changePct,
      unusual: (q.ta?.relVolume ?? 1) > 1.3 || contracts > 5000,
    };
  }).sort((a, b) => b.notional - a.notional);
}

const RATINGS = ['Strong Buy', 'Buy', 'Hold', 'Sell', 'Strong Sell'];

export function generateAnalystRatings(quotes) {
  return [...quotes.values()].map((q) => {
    const r = seededRand(q.symbol + 'analyst');
    const numAnalysts = Math.floor(3 + r() * 18);
    const consensus = RATINGS[Math.floor(r() * RATINGS.length)];
    const target = Math.round(q.price * (0.85 + r() * 0.35) * 100) / 100;
    const upside = ((target - q.price) / q.price) * 100;
    const revisions = Math.floor(r() * 5) - 2;

    return {
      symbol: q.symbol,
      name: q.name,
      price: q.price,
      consensus,
      target,
      upside,
      numAnalysts,
      strongBuy: Math.floor(r() * numAnalysts * 0.4),
      buy: Math.floor(r() * numAnalysts * 0.3),
      hold: Math.floor(r() * numAnalysts * 0.4),
      sell: Math.floor(r() * 3),
      strongSell: Math.floor(r() * 2),
      revisions,
      lastUpdate: `${Math.floor(1 + r() * 30)}d ago`,
    };
  }).sort((a, b) => b.upside - a.upside);
}

export function generateShortInterest(quotes) {
  return [...quotes.values()].map((q) => {
    const r = seededRand(q.symbol + 'short');
    const shortPct = Math.round((0.5 + r() * 25) * 100) / 100;
    const daysToCover = Math.round((0.5 + r() * 12) * 10) / 10;
    const change = Math.round((r() * 6 - 3) * 100) / 100;
    const squeezeScore = Math.min(100, Math.round(shortPct * 2 + (q.ta?.relVolume ?? 1) * 10 + Math.abs(q.changePct) * 2));

    return {
      symbol: q.symbol,
      name: q.name,
      price: q.price,
      changePct: q.changePct,
      shortPct,
      daysToCover,
      change,
      squeezeScore,
      sector: q.sector,
    };
  }).sort((a, b) => b.squeezeScore - a.squeezeScore);
}

export function getSectorInternals(quotes) {
  const sectors = new Map();
  for (const q of quotes.values()) {
    if (!q.sector) continue;
    if (!sectors.has(q.sector)) sectors.set(q.sector, { adv: 0, dec: 0, vol: 0, count: 0 });
    const s = sectors.get(q.sector);
    s.count++;
    if (q.changePct > 0) s.adv++;
    else if (q.changePct < 0) s.dec++;
    s.vol += q.volume || 0;
  }
  return [...sectors.entries()].map(([sector, d]) => ({
    sector,
    ...d,
    advPct: (d.adv / d.count) * 100,
    avgVol: d.vol / d.count,
  })).sort((a, b) => b.advPct - a.advPct);
}