import { fetchMarketNews } from '../api.js';
import { getSettings } from '../store.js';

export async function renderNews(container) {
  container.innerHTML = `
    <div class="page-header">
      <h1>Market News</h1>
      <p class="page-sub">Latest headlines from your data feed.</p>
    </div>
    <div class="news-loading panel">Loading news…</div>
  `;

  const news = await fetchMarketNews(getSettings());
  const list = container.querySelector('.news-loading');
  if (!list) return;

  list.className = 'news-list panel';
  list.innerHTML = news.length
    ? news.map(renderArticle).join('')
    : '<p class="muted">No news available.</p>';

  list.querySelectorAll('[data-symbol]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('stockviz:select', { detail: el.dataset.symbol }));
    });
  });
}

function renderArticle(n) {
  const date = n.datetime
    ? new Date(n.datetime * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    : '';
  const sym = n.related?.split(',')[0] || n.symbol;
  return `
    <article class="news-item">
      <div class="news-meta">
        <span class="news-source">${n.source || 'News'}</span>
        <span class="news-date">${date}</span>
        ${sym ? `<button class="news-symbol" data-symbol="${sym}">${sym}</button>` : ''}
      </div>
      <a class="news-headline" href="${n.url || '#'}" target="_blank" rel="noopener">${n.headline || n.title || 'Untitled'}</a>
      ${n.summary ? `<p class="news-summary">${n.summary}</p>` : ''}
    </article>
  `;
}