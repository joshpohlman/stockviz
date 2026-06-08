/** Safe custom formula evaluator for screener — no eval(). */

const ALLOWED_FIELDS = new Set([
  'price', 'changePct', 'volume', 'marketCap', 'rsi', 'pe', 'eps', 'beta',
  'relVolume', 'sma20', 'sma50', 'sma200', 'predConf', 'atr',
]);

const FIELD_MAP = {
  rsi: (q) => q.ta?.rsi ?? 50,
  pe: (q) => q.fundamentals?.pe ?? 0,
  eps: (q) => q.fundamentals?.eps ?? 0,
  beta: (q) => q.fundamentals?.beta ?? 1,
  relVolume: (q) => q.ta?.relVolume ?? 1,
  sma20: (q) => q.ta?.sma20 ?? q.price,
  sma50: (q) => q.ta?.sma50 ?? q.price,
  sma200: (q) => q.ta?.sma200 ?? q.price,
  predConf: (q) => q.prediction?.confidence ?? 50,
  atr: (q) => q.ta?.atr ?? 0,
  price: (q) => q.price ?? 0,
  changePct: (q) => q.changePct ?? 0,
  volume: (q) => q.volume ?? 0,
  marketCap: (q) => q.marketCap ?? 0,
};

export function getFormulaContext(quote) {
  const ctx = {};
  for (const [field, fn] of Object.entries(FIELD_MAP)) {
    ctx[field] = fn(quote);
  }
  return ctx;
}

export function validateFormula(formula) {
  if (!formula?.trim()) return { valid: true, error: null };
  try {
    const tokens = tokenize(formula);
    parseExpr(tokens, 0);
    return { valid: true, error: null };
  } catch (e) {
    return { valid: false, error: e.message };
  }
}

export function evaluateFormula(formula, quote) {
  if (!formula?.trim()) return true;
  const ctx = getFormulaContext(quote);
  const tokens = tokenize(formula);
  const result = parseExpr(tokens, 0, ctx);
  return Boolean(result.value);
}

function tokenize(src) {
  const tokens = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (/\s/.test(ch)) { i++; continue; }
    if (/[0-9.]/.test(ch)) {
      let num = '';
      while (i < src.length && /[0-9.]/.test(src[i])) num += src[i++];
      tokens.push({ type: 'num', value: parseFloat(num) });
      continue;
    }
    if (/[a-zA-Z_]/.test(ch)) {
      let id = '';
      while (i < src.length && /[a-zA-Z0-9_]/.test(src[i])) id += src[i++];
      const lower = id.toLowerCase();
      if (lower === 'and') tokens.push({ type: 'op', value: '&&' });
      else if (lower === 'or') tokens.push({ type: 'op', value: '||' });
      else if (lower === 'not') tokens.push({ type: 'op', value: '!' });
      else if (!ALLOWED_FIELDS.has(id)) throw new Error(`Unknown field: ${id}`);
      else tokens.push({ type: 'id', value: id });
      continue;
    }
    if ('+-*/<>=!&|()'.includes(ch)) {
      let two = ch + (src[i + 1] || '');
      if (['>=', '<=', '==', '!=', '&&', '||'].includes(two)) {
        tokens.push({ type: 'op', value: two });
        i += 2;
      } else {
        tokens.push({ type: 'op', value: ch });
        i++;
      }
      continue;
    }
    throw new Error(`Invalid character: ${ch}`);
  }
  return tokens;
}

function parseExpr(tokens, pos, ctx = null) {
  return parseOr(tokens, pos, ctx);
}

function parseOr(tokens, pos, ctx) {
  let left = parseAnd(tokens, pos, ctx);
  pos = left.pos;
  while (tokens[pos]?.value === '||') {
    const right = parseAnd(tokens, pos + 1, ctx);
    left = { value: left.value || right.value, pos: right.pos };
    pos = right.pos;
  }
  return left;
}

function parseAnd(tokens, pos, ctx) {
  let left = parseCompare(tokens, pos, ctx);
  pos = left.pos;
  while (tokens[pos]?.value === '&&') {
    const right = parseCompare(tokens, pos + 1, ctx);
    left = { value: left.value && right.value, pos: right.pos };
    pos = right.pos;
  }
  return left;
}

function parseCompare(tokens, pos, ctx) {
  let left = parseAdd(tokens, pos, ctx);
  pos = left.pos;
  const ops = ['>=', '<=', '==', '!=', '>', '<'];
  if (ops.includes(tokens[pos]?.value)) {
    const op = tokens[pos].value;
    const right = parseAdd(tokens, pos + 1, ctx);
    const lv = left.value;
    const rv = right.value;
    let val = false;
    if (op === '>') val = lv > rv;
    else if (op === '<') val = lv < rv;
    else if (op === '>=') val = lv >= rv;
    else if (op === '<=') val = lv <= rv;
    else if (op === '==') val = lv === rv;
    else if (op === '!=') val = lv !== rv;
    return { value: val, pos: right.pos };
  }
  return left;
}

function parseAdd(tokens, pos, ctx) {
  let left = parseMul(tokens, pos, ctx);
  pos = left.pos;
  while (tokens[pos]?.value === '+' || tokens[pos]?.value === '-') {
    const op = tokens[pos].value;
    const right = parseMul(tokens, pos + 1, ctx);
    left = { value: op === '+' ? left.value + right.value : left.value - right.value, pos: right.pos };
    pos = right.pos;
  }
  return left;
}

function parseMul(tokens, pos, ctx) {
  let left = parseUnary(tokens, pos, ctx);
  pos = left.pos;
  while (tokens[pos]?.value === '*' || tokens[pos]?.value === '/') {
    const op = tokens[pos].value;
    const right = parseUnary(tokens, pos + 1, ctx);
    left = {
      value: op === '*' ? left.value * right.value : left.value / right.value,
      pos: right.pos,
    };
    pos = right.pos;
  }
  return left;
}

function parseUnary(tokens, pos, ctx) {
  if (tokens[pos]?.value === '!') {
    const inner = parseUnary(tokens, pos + 1, ctx);
    return { value: !inner.value, pos: inner.pos };
  }
  if (tokens[pos]?.value === '-') {
    const inner = parseUnary(tokens, pos + 1, ctx);
    return { value: -inner.value, pos: inner.pos };
  }
  return parsePrimary(tokens, pos, ctx);
}

function parsePrimary(tokens, pos, ctx) {
  const t = tokens[pos];
  if (!t) throw new Error('Unexpected end of formula');
  if (t.type === 'num') return { value: t.value, pos: pos + 1 };
  if (t.type === 'id') {
    if (!ctx) return { value: 0, pos: pos + 1 };
    return { value: ctx[t.value] ?? 0, pos: pos + 1 };
  }
  if (t.value === '(') {
    const inner = parseExpr(tokens, pos + 1, ctx);
    if (tokens[inner.pos]?.value !== ')') throw new Error('Missing )');
    return { value: inner.value, pos: inner.pos + 1 };
  }
  throw new Error(`Unexpected token: ${t.value}`);
}

export const FORMULA_EXAMPLES = [
  { label: 'Oversold bounce', formula: 'rsi < 35 and changePct > 0' },
  { label: 'High volume breakout', formula: 'relVolume > 1.5 and changePct > 2' },
  { label: 'Value + momentum', formula: 'pe < 25 and changePct > 1 and rsi > 45' },
  { label: 'Strong prediction', formula: 'predConf > 70 and changePct > 0' },
];