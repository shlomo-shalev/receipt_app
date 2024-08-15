import fs from 'node:fs';
import path from 'node:path';
// import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from "vite";
// import { createServerRenderer } from 'vite-plugin-ssr';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const DEV_ENV = 'developer';
// const resolve = (p) => path.resolve(__dirname, p);
let vite = null;

if (process.env.NODE_ENV === DEV_ENV) {
  vite = await createViteServer({
    server: { 
      middlewareMode: true,
      hmr: {
        overlay: false,
      }
    },
    plugins: [
      react(),
      alias({
        entries: [
          {
            find: 'app',
            replacement: path.resolve('./app'),
          },
          {
            find: 'route',
            replacement: path.resolve('./route'),
          },
          { 
            find:/__DOM_DRIVER__/, 
            replacement: 'web',
          },
        ],
      }),
      resolve()
    ],
    appType: 'custom',
  });

  app.use(vite.middlewares);
  app.use(
    (await import('serve-static')).default(path.resolve('./public'), {
      index: false,
    }),
  );
} else {
  app.use((await import('compression')).default());
  app.use(
    (await import('serve-static')).default(path.resolve('./dist/vite/client'), {
      index: false,
    }),
  );
}

app.use('*', async (req, res) => {
  const requestPath = req.originalUrl;
  let render, template;
  
  if (process.env.NODE_ENV === DEV_ENV) {
    template = fs.readFileSync(path.resolve("./sources/vite/index.html"), "utf-8");
    template = await vite.transformIndexHtml(requestPath, template);
    render = (await vite.ssrLoadModule("./sources/vite/ssr/entry-server.tsx")).SSRRender;    
  } else {
    template = fs.readFileSync(path.resolve('./dist/vite/client/index.html'), 'utf-8');
    render = (await import(path.resolve('./dist/vite/server/entry-server.js'))).SSRRender;
  }

  
  const appHtml = render({ path: requestPath }); //Rendering component without any client side logic de-hydrated like a dry sponge
  let html = template.replace(`<!--app-html-->`, appHtml); //Replacing placeholder with SSR rendered components
  html = html.replace(
    '% script_uri %', 
    '/sources/vite/ssr/entry-client.tsx',
  );

  res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
});

app.listen(3033, () => {
  console.log('http://localhost:3033');
});