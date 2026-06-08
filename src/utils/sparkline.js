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