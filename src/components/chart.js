/** Canvas price chart — line or candlestick from OHLC series. */
export function renderPriceChart(container, candles, { height = 160 } = {}) {
  if (!candles?.length) {
    container.innerHTML = '<p class="chart-empty">No chart data</p>';
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.className = 'price-chart-canvas';
  canvas.height = height;
  container.innerHTML = '';
  container.appendChild(canvas);

  const dpr = window.devicePixelRatio || 1;
  const w = container.clientWidth || 320;
  canvas.width = w * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const lows = candles.map((c) => c.l);
  const highs = candles.map((c) => c.h);
  const min = Math.min(...lows);
  const max = Math.max(...highs);
  const pad = (max - min) * 0.08 || 1;
  const yMin = min - pad;
  const yMax = max + pad;
  const range = yMax - yMin;

  const padX = 8;
  const padY = 8;
  const chartW = w - padX * 2;
  const chartH = height - padY * 2;
  const step = chartW / candles.length;

  const y = (v) => padY + chartH - ((v - yMin) / range) * chartH;

  // Grid
  ctx.strokeStyle = 'rgba(48,54,61,0.6)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const gy = padY + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padX, gy);
    ctx.lineTo(w - padX, gy);
    ctx.stroke();
  }

  // Candles or line
  const useCandles = candles.length <= 80;
  if (useCandles) {
    const barW = Math.max(2, step * 0.6);
    candles.forEach((c, i) => {
      const cx = padX + i * step + step / 2;
      const up = c.c >= c.o;
      const color = up ? '#3fb950' : '#f85149';
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
  } else {
    ctx.strokeStyle = '#58a6ff';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    candles.forEach((c, i) => {
      const px = padX + i * step + step / 2;
      const py = y(c.c);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.stroke();
    const last = candles[candles.length - 1];
    const grad = ctx.createLinearGradient(0, padY, 0, height - padY);
    grad.addColorStop(0, 'rgba(88,166,255,0.25)');
    grad.addColorStop(1, 'rgba(88,166,255,0)');
    ctx.lineTo(padX + (candles.length - 1) * step + step / 2, height - padY);
    ctx.lineTo(padX + step / 2, height - padY);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
  }

  // Price labels
  ctx.fillStyle = '#8b949e';
  ctx.font = '10px IBM Plex Mono, monospace';
  ctx.textAlign = 'right';
  ctx.fillText(max.toFixed(2), w - 2, padY + 10);
  ctx.fillText(min.toFixed(2), w - 2, height - padY - 2);
}