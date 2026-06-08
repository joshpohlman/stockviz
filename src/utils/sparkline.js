/** Tiny canvas sparkline — pass array of close prices or {c} candles. */
export function drawSparkline(canvas, series, { width = 72, height = 24, color = null } = {}) {
  const values = series.map((v) => (typeof v === 'number' ? v : v.c ?? v.price ?? 0));
  if (!values.length) return;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const up = values[values.length - 1] >= values[0];
  const stroke = color || (up ? '#3fb950' : '#f85149');

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  values.forEach((v, i) => {
    const x = (i / (values.length - 1 || 1)) * (width - 2) + 1;
    const y = height - 2 - ((v - min) / range) * (height - 4);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = 'round';
  ctx.stroke();

  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, up ? 'rgba(63,185,80,0.2)' : 'rgba(248,81,73,0.2)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.lineTo(width - 1, height);
  ctx.lineTo(1, height);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
}

export function sparklineHtml(symbol) {
  return `<canvas class="sparkline" data-spark="${symbol}" width="72" height="24" aria-hidden="true"></canvas>`;
}

/** Larger area chart for home index cards (TradingView-style). */
export function drawAreaChart(canvas, series, { width = 180, height = 72, positive = true } = {}) {
  const values = series.map((v) => (typeof v === 'number' ? v : v.c ?? v.price ?? 0));
  if (!values.length) return;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, width, height);

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const padX = 2;
  const padY = 4;
  const chartW = width - padX * 2;
  const chartH = height - padY * 2;
  const up = positive ?? values[values.length - 1] >= values[0];
  const stroke = up ? '#3fb950' : '#f85149';
  const fillTop = up ? 'rgba(63,185,80,0.22)' : 'rgba(248,81,73,0.22)';

  const points = values.map((v, i) => ({
    x: padX + (i / (values.length - 1 || 1)) * chartW,
    y: padY + chartH - ((v - min) / range) * chartH,
  }));

  ctx.beginPath();
  points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
  ctx.lineTo(points[points.length - 1].x, height);
  ctx.lineTo(points[0].x, height);
  ctx.closePath();
  ctx.fillStyle = fillTop;
  ctx.fill();

  ctx.beginPath();
  points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.75;
  ctx.lineJoin = 'round';
  ctx.stroke();
}

/** Mini OHLC / candlestick bars for home index cards. */
export function drawMiniCandles(canvas, candles, { width = 180, height = 72 } = {}) {
  if (!candles?.length) return;

  const bars = candles.map((c) => {
    if (typeof c === 'number') {
      return { o: c, h: c, l: c, c };
    }
    const close = c.c ?? c.price ?? 0;
    const open = c.o ?? close;
    return {
      o: open,
      h: c.h ?? Math.max(open, close),
      l: c.l ?? Math.min(open, close),
      c: close,
    };
  });

  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, width, height);

  const lows = bars.map((b) => b.l);
  const highs = bars.map((b) => b.h);
  const min = Math.min(...lows);
  const max = Math.max(...highs);
  const range = max - min || 1;
  const padX = 3;
  const padY = 4;
  const chartW = width - padX * 2;
  const chartH = height - padY * 2;
  const slot = chartW / bars.length;
  const barW = Math.max(1.5, Math.min(5, slot * 0.65));

  const y = (v) => padY + chartH - ((v - min) / range) * chartH;

  bars.forEach((b, i) => {
    const cx = padX + i * slot + slot / 2;
    const up = b.c >= b.o;
    const color = up ? '#3fb950' : '#f85149';
    const bodyTop = y(Math.max(b.o, b.c));
    const bodyBot = y(Math.min(b.o, b.c));
    const bodyH = Math.max(1, bodyBot - bodyTop);

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(cx, y(b.h));
    ctx.lineTo(cx, y(b.l));
    ctx.stroke();

    ctx.fillRect(cx - barW / 2, bodyTop, barW, bodyH);
  });
}

/** Vertical sector performance bar chart (diverging from zero). */
export function drawSectorBarChart(canvas, sectors, { width = 600, height = 160 } = {}) {
  if (!sectors?.length) return;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, width, height);

  const padL = 8;
  const padR = 8;
  const padT = 12;
  const padB = 42;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;
  const maxAbs = Math.max(0.5, ...sectors.map((s) => Math.abs(s.value)));
  const zeroY = padT + chartH / 2;
  const slot = chartW / sectors.length;
  const barW = Math.max(12, Math.min(36, slot * 0.7));

  ctx.strokeStyle = 'rgba(139,148,158,0.35)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padL, zeroY);
  ctx.lineTo(width - padR, zeroY);
  ctx.stroke();

  sectors.forEach((s, i) => {
    const cx = padL + i * slot + slot / 2;
    const h = (Math.abs(s.value) / maxAbs) * (chartH / 2 - 4);
    const up = s.value >= 0;
    const color = up ? '#3fb950' : '#f85149';
    const top = up ? zeroY - h : zeroY;
    ctx.fillStyle = color;
    ctx.fillRect(cx - barW / 2, top, barW, h || 1);

    ctx.fillStyle = '#8b949e';
    ctx.font = '9px IBM Plex Sans, sans-serif';
    ctx.textAlign = 'center';
    const label = s.label.length > 10 ? `${s.label.slice(0, 9)}…` : s.label;
    ctx.save();
    ctx.translate(cx, height - padB + 10);
    ctx.rotate(-0.55);
    ctx.fillText(label, 0, 0);
    ctx.restore();

    ctx.fillStyle = up ? '#3fb950' : '#f85149';
    ctx.font = '500 9px IBM Plex Mono, monospace';
    ctx.textAlign = 'center';
    const pctLabel = `${s.value >= 0 ? '+' : ''}${s.value.toFixed(2)}%`;
    ctx.fillText(pctLabel, cx, up ? top - 3 : top + h + 10);
  });
}