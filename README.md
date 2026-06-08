# StockViz

Finviz-style stock screener with **pattern prediction**, technical signals, heat maps, and real-time data.

**Live:** https://joshpohlman.github.io/stockviz/

## Finviz-Style Features

| Page | What it does |
|------|----------------|
| **Home** | Market breadth, gainers/losers, heat map preview, headlines, top predictions |
| **Screener** | Tabbed filters (Descriptive, Fundamental, Technical, Signals) + 15 presets |
| **Signals** | Top Gainers, Overbought, Golden Cross, Unusual Volume, etc. |
| **Patterns** | Double Top/Bottom, H&S, Wedges, Channels — with confidence % |
| **Charts** | Full-screen candlestick charts + prediction overlay |
| **Map** | Sector heat map (live-updating) |
| **Groups** | Sector performance rankings |
| **Portfolio** | Holdings + live P&L |
| **Compare** | Side-by-side up to 4 stocks |
| **Insider** | Insider trading feed |
| **Futures** | Futures, forex, bonds |
| **Calendar** | Earnings + economic events |
| **News** | Market headlines |

## Pattern Prediction Engine

Every stock is analyzed with:
- **RSI, SMA20/50/200, MACD, ATR, Bollinger Bands**
- **14 chart patterns** (Double Top, Head & Shoulders, Wedges, Channels…)
- **11 technical signals** (Overbought, Golden Cross, New High…)
- **Multi-factor prediction** — bullish/bearish/neutral with confidence % and price target

Click any ticker → **AI Pattern Prediction** panel with factor breakdown.

## Quick Start

```bash
npm install && npm run dev
```

Add a free [Finnhub API key](https://finnhub.io/register) in Settings for live quotes.

## Deploy

```bash
npm run deploy:pages
```

MIT