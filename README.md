# StockViz

A Finviz-inspired stock screener you can customize and extend — with heat maps, portfolio tracking, live sparklines, and buttery-smooth price updates.

**Live:** https://joshpohlman.github.io/stockviz/

## Highlights

- **240+ US stocks** across all 11 sectors
- **Live price patching** — updates tick without full page re-render
- **Sparklines** on watchlist, screener, and compare views
- **Command palette** — press `/` or `Ctrl+K` to jump to any ticker
- **Portfolio** — track shares, cost basis, live P&L
- **Compare** — side-by-side up to 4 stocks
- **Screener** — 11 presets, favorites (★), CSV export, shareable filter URLs
- **Heat map** — live-updating sector treemap
- **News** — market headlines + per-stock news in quote panel
- **Dark / light theme** — toggle with ◐ in the header
- **Quote panel** — 60-day chart, news, favorite & compare actions

## Quick Start

```bash
cd stockviz
npm install
npm run dev
```

## Real-Time Data

1. Free API key: [finnhub.io/register](https://finnhub.io/register)
2. **Settings** → paste key → Test → Save
3. Auto-refresh every 30s (configurable)

Without a key, **simulated live data** runs out of the box.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` or `Ctrl+K` | Open stock search |
| `Esc` | Close quote panel / search |

## Customize

| What | File |
|------|------|
| Stock universe | `src/data/universe.js` |
| Screener presets | `src/data/presets.js` |
| Theme & colors | `src/style.css` |
| API layer | `src/api.js` |

## Deploy

```bash
npm run deploy:pages
```

Or push to `main` — GitHub Actions deploys automatically.

## Stack

Vite · Vanilla JS · Finnhub API · Canvas charts · Zero frameworks

MIT