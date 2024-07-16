import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('../../../dist/vite/static/index.html'), 'utf-8');
const render = (await import('../../../dist/vite/server/entry-server.js')).SSRRender;

// determine routes to pre-render from src/pages
const routesToPrerender = fs.readdirSync(toAbsolute('../../../app/View/Components/Pages')).map((file) => {
  const name = file.replace(/\.tsx$/, '').toLowerCase();
  return name === 'home' ? `/` : `/${name}`;
});

(async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    const appHtml = render(url);

    let html = template.replace(`<!--app-html-->`, appHtml);
    html = html.replace(
      '% script_uri %', 
      '../../../sources/vite/ssr/entry-client.tsx',
    );

    const filePath = `../../../dist/vite/static${url === '/' ? '/index' : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
  }
})();