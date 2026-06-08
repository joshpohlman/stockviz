/** Visual formula builder for screener. */

const FIELDS = [
  { id: 'rsi', label: 'RSI', type: 'number' },
  { id: 'changePct', label: 'Change %', type: 'number' },
  { id: 'pe', label: 'P/E', type: 'number' },
  { id: 'peg', label: 'PEG', type: 'number' },
  { id: 'relVolume', label: 'Rel Volume', type: 'number' },
  { id: 'predConf', label: 'Pred Confidence', type: 'number' },
  { id: 'volume', label: 'Volume', type: 'number' },
  { id: 'marketCap', label: 'Market Cap', type: 'number' },
];

const OPS = ['<', '>', '<=', '>=', '==', '!='];

export function renderFormulaBuilder(container, { current = '', onApply }) {
  let field = 'rsi';
  let op = '<';
  let value = '35';
  let connector = 'and';

  function build() {
    return `${field} ${op} ${value}`;
  }

  function render() {
    container.innerHTML = `
      <div class="formula-builder panel">
        <h4 class="panel-title">Visual Formula Builder</h4>
        <div class="fb-row">
          <select id="fb-field">${FIELDS.map((f) => `<option value="${f.id}">${f.label}</option>`).join('')}</select>
          <select id="fb-op">${OPS.map((o) => `<option value="${o}">${o}</option>`).join('')}</select>
          <input type="text" id="fb-val" value="${value}" />
          <select id="fb-conn"><option value="and">AND</option><option value="or">OR</option></select>
        </div>
        <div class="fb-preview">
          <code id="fb-out">${current || build()}</code>
        </div>
        <div class="fb-actions">
          <button type="button" class="btn-secondary" id="fb-append">Append</button>
          <button type="button" class="btn-primary" id="fb-apply">Apply Formula</button>
        </div>
      </div>
    `;

    container.querySelector('#fb-field').value = field;
    container.querySelector('#fb-op').value = op;

    const out = container.querySelector('#fb-out');
    const update = () => {
      field = container.querySelector('#fb-field').value;
      op = container.querySelector('#fb-op').value;
      value = container.querySelector('#fb-val').value;
      connector = container.querySelector('#fb-conn').value;
      out.textContent = build();
    };

    container.querySelectorAll('select, input').forEach((el) => el.addEventListener('change', update));
    container.querySelector('#fb-val')?.addEventListener('input', update);

    container.querySelector('#fb-append')?.addEventListener('click', () => {
      const clause = build();
      const base = out.textContent && out.textContent !== build() ? out.textContent : (current || '');
      out.textContent = base ? `${base} ${connector} ${clause}` : clause;
    });

    container.querySelector('#fb-apply')?.addEventListener('click', () => {
      onApply?.(out.textContent);
    });
  }

  render();
}