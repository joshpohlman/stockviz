/** Cached FMP market widget data (earnings, insider, futures, etc.). */

const TTL_MS = 5 * 60 * 1000;

let cache = null;
let cacheAt = 0;

export function getCachedMarketWidgets() {
  if (cache && Date.now() - cacheAt < TTL_MS) return cache;
  return null;
}

export function setCachedMarketWidgets(data) {
  cache = data;
  cacheAt = Date.now();
}

export function clearMarketWidgetCache() {
  cache = null;
  cacheAt = 0;
}