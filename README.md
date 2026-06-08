# StockViz

A Finviz-inspired stock screener and heat map you can customize and extend. Built with Vite and vanilla JavaScript.

**Live demo:** https://joshpohlman.github.io/stockviz/

## Features

- **Home** — watchlist, top gainers/losers, most active, sector performance
- **Screener** — 11 one-click presets, custom filters, sortable columns, CSV export, shareable links, saved presets
- **Heat Map** — sector treemap sized by market cap, colored by daily change
- **News** — market headlines (Finnhub or simulated)
- **Quote Panel** — 60-day price chart, company news, full stats
- **Live data** — Finnhub API with polling, or simulated data without a key

## Quick Start

```bash
cd stockviz
npm install
npm run dev
```

Open http://localhost:5173

## Real-Time Data (Finnhub)

1. Register at [finnhub.io/register](https://finnhub.io/register) (free, 60 calls/min)
2. Open **Settings** → paste API key → **Test Connection** → **Save**
3. Quotes refresh every 30 seconds (configurable)

Without an API key, simulated live data updates on each refresh.

## Customize

| What | File |
|------|------|
| Stock universe (~160 tickers) | `src/data/universe.js` |
| Screener presets | `src/data/presets.js` |
| Colors / layout | `src/style.css` |
| API / mock logic | `src/api.js` |

## Deploy to GitHub Pages

```bash
npm run deploy:pages
```

Requires the `stockviz` repo on GitHub under your account. Publishes to `https://<username>.github.io/stockviz/`.

## Project Structure

```
src/
  api.js              Finnhub + mock data
  store.js            Settings, filters, cache
  data/universe.js    Stock list
  data/presets.js     Screener presets
  pages/              Home, Screener, Map, News, Settings
  components/         Chart, heatmap, quote panel
  utils/              Formatting, CSV export, URL state
```

MIT — use and modify freely.