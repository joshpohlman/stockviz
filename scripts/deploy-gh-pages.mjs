import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const repo = 'https://github.com/joshpohlman/stockviz.git';
const liveUrl = 'https://joshpohlman.github.io/stockviz/';

process.chdir(root);
execSync('npm run build', { stdio: 'inherit', env: { ...process.env, BASE_PATH: '/stockviz/' } });

fs.writeFileSync(path.join(dist, '.nojekyll'), '\n');

process.chdir(dist);
if (!fs.existsSync(path.join(dist, '.git'))) {
  execSync('git init', { stdio: 'inherit' });
  execSync(`git remote add origin ${repo}`, { stdio: 'inherit' });
}
execSync('git config user.email "joshpohlman@users.noreply.github.com"', { stdio: 'inherit' });
execSync('git config user.name "joshpohlman"', { stdio: 'inherit' });
execSync('git add -A', { stdio: 'inherit' });
try {
  execSync('git commit -m "Deploy StockViz"', { stdio: 'inherit' });
} catch {
  console.log('No changes to deploy.');
  process.exit(0);
}
execSync('git branch -M gh-pages', { stdio: 'inherit' });
execSync('git push -f origin gh-pages', { stdio: 'inherit' });
console.log(`\nLive at ${liveUrl}`);