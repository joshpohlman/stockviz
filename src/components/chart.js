import { sma, bollinger, rsi as calcRsi } from '../analysis/indicators.js';

const DEFAULT_OPTS = {
  height: 160,
  overlays: { sma20: true, sma50: false, sma200: false, bollinger: false },
  showVolume: true,
  showRsi: false,
  theme: 'dark',
};

const THEMES = {
  dark: { grid: 'rgba(48,54,61,0.5)', label: '#8b949e', up: '#3fb950', down: '#f85149' },
  light: { grid: 'rgba(0,0,0,0.08)', label: '#57606a', up: '#1a7f37', down: '#cf222e' },
};

/** Advanced canvas chart — candles, SMA overlays, Bollinger, volume, RSI panel. */
export function renderPriceChart(container, candles, opts = {}) {
  const options = { ...DEFAULT_OPTS, ...opts, overlays: { ...DEFAULT_OPTS.overlays, ...opts.overlays } };
  if (!candles?.length) {
    container.innerHTML = '<p class="chart-empty">No chart data</p>';
    return;
  }

  const hasRsi = options.showRsi;
  const hasVol = options.showVolume;
  const mainH = options.height;
  const volH = hasVol ? 50 : 0;
  const rsiH = hasRsi ? 60 : 0;
  const totalH = mainH + volH + rsiH;

  const canvas = document.createElement('canvas');
  canvas.className = 'price-chart-canvas';
  container.innerHTML = '';
  container.appendChild(canvas);

  const dpr = window.devicePixelRatio || 1;
  const w = container.clientWidth || 320;
  canvas.width = w * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${totalH}px`;
  canvas.height = totalH * dpr;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const closes = candles.map((c) => c.c);
  const lows = candles.map((c) => c.l);
  const highs = candles.map((c) => c.h);
  let min = Math.min(...lows);
  let max = Math.max(...highs);

  if (options.overlays.bollinger) {
    const bb = bollinger(closes);
    if (bb.upper) { min = Math.min(min, bb.lower); max = Math.max(max, bb.upper); }
  }
  if (options.overlays.sma20 || options.overlays.sma50 || options.overlays.sma200) {
    [20, 50, 200].forEach((p) => {
      const key = `sma${p}`;
      if (options.overlays[key]) {
        const v = sma(closes, p);
        if (v) { min = Math.min(min, v); max = Math.max(max, v); }
      }
    });
  }

  const pad = (max - min) * 0.08 || 1;
  const yMin = min - pad;
  const yMax = max + pad;
  const range = yMax - yMin;
  const padX = 8;
  const padY = 8;
  const chartW = w - padX * 2;
  const chartH = mainH - padY * 2;
  const step = chartW / candles.length;
  const y = (v) => padY + chartH - ((v - yMin) / range) * chartH;
  const xAt = (i) => padX + i * step + step / 2;

  const pal = THEMES[options.theme] || THEMES.dark;
  drawGrid(ctx, w, padX, padY, chartH, mainH, pal.grid);

  if (options.overlays.bollinger) {
    const bb = bollinger(closes);
    if (bb.upper) {
      ctx.fillStyle = 'rgba(88,166,255,0.08)';
      ctx.fillRect(padX, y(bb.upper), chartW, y(bb.lower) - y(bb.upper));
      drawLine(ctx, candles, (i) => bb.upper, xAt, y, '#58a6ff', 0.5, 1);
      drawLine(ctx, candles, (i) => bb.lower, xAt, y, '#58a6ff', 0.5, 1);
    }
  }

  [200, 50, 20].forEach((p) => {
    const key = `sma${p}`;
    if (!options.overlays[key]) return;
    const colors = { 20: '#d29922', 50: '#a371f7', 200: '#f85149' };
    drawSmaLine(ctx, closes, p, xAt, y, colors[p]);
  });

  const barW = Math.max(2, step * 0.6);
  candles.forEach((c, i) => {
    const cx = xAt(i);
    const up = c.c >= c.o;
    const color = up ? pal.up : pal.down;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx, y(c.h));
    ctx.lineTo(cx, y(c.l));
    ctx.stroke();
    const top = y(Math.max(c.o, c.c));
    const bot = y(Math.min(c.o, c.c));
    ctx.fillRect(cx - barW / 2, top, barW, Math.max(1, bot - top));
  });

  ctx.fillStyle = pal.label;
  ctx.font = '10px IBM Plex Mono, monospace';
  ctx.textAlign = 'right';
  ctx.fillText(max.toFixed(2), w - 2, padY + 10);
  ctx.fillText(min.toFixed(2), w - 2, mainH - padY - 2);

  if (hasVol) drawVolumePanel(ctx, candles, w, mainH, volH, padX, chartW, step);

  if (hasRsi) drawRsiPanel(ctx, closes, w, mainH + volH, rsiH, padX, chartW, step);
}

function drawGrid(ctx, w, padX, padY, chartH, height, gridColor = 'rgba(48,54,61,0.6)') {
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const gy = padY + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padX, gy);
    ctx.lineTo(w - padX, gy);
    ctx.stroke();
  }
}

function drawSmaLine(ctx, closes, period, xAt, y, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.setLineDash([]);
  ctx.beginPath();
  let started = false;
  for (let i = period - 1; i < closes.length; i++) {
    const v = sma(closes.slice(0, i + 1), period);
    if (v == null) continue;
    const px = xAt(i);
    const py = y(v);
    if (!started) { ctx.moveTo(px, py); started = true; }
    else ctx.lineTo(px, py);
  }
  ctx.stroke();
}

function drawLine(ctx, candles, valFn, xAt, y, color, alpha, width) {
  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = width;
  ctx.beginPath();
  candles.forEach((c, i) => {
    const px = xAt(i);
    const py = y(valFn(i));
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  });
  ctx.stroke();
  ctx.globalAlpha = 1;
}

function drawVolumePanel(ctx, candles, w, top, height, padX, chartW, step) {
  const maxV = Math.max(...candles.map((c) => c.v || 0), 1);
  ctx.fillStyle = 'rgba(48,54,61,0.3)';
  ctx.fillRect(0, top, w, height);
  ctx.fillStyle = '#8b949e';
  ctx.font = '9px IBM Plex Mono, monospace';
  ctx.textAlign = 'left';
  ctx.fillText('VOL', padX, top + 12);

  const barW = Math.max(1, step * 0.7);
  candles.forEach((c, i) => {
    const cx = padX + i * step + step / 2;
    const vh = ((c.v || 0) / maxV) * (height - 16);
    const up = c.c >= c.o;
    ctx.fillStyle = up ? 'rgba(63,185,80,0.5)' : 'rgba(248,81,73,0.5)';
    ctx.fillRect(cx - barW / 2, top + height - vh, barW, vh);
  });
}

function drawRsiPanel(ctx, closes, w, top, height, padX, chartW, step) {
  ctx.fillStyle = 'rgba(48,54,61,0.3)';
  ctx.fillRect(0, top, w, height);
  ctx.fillStyle = '#8b949e';
  ctx.font = '9px IBM Plex Mono, monospace';
  ctx.textAlign = 'left';
  ctx.fillText('RSI', padX, top + 12);

  const rsiVals = closes.map((_, i) => calcRsi(closes.slice(0, i + 1)));
  const yRsi = (v) => top + 14 + (height - 20) * (1 - v / 100);

  [30, 70].forEach((level) => {
    ctx.strokeStyle = level === 30 ? 'rgba(63,185,80,0.4)' : 'rgba(248,81,73,0.4)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(padX, yRsi(level));
    ctx.lineTo(padX + chartW, yRsi(level));
    ctx.stroke();
    ctx.setLineDash([]);
  });

  ctx.strokeStyle = '#d29922';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  rsiVals.forEach((v, i) => {
    const px = padX + i * (chartW / closes.length) + (chartW / closes.length) / 2;
    const py = yRsi(v);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  });
  ctx.stroke();
}