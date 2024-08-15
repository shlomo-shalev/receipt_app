(async () => {
  const fs = require('node:fs');
  const path = require('node:path');
  const express = require('express');
  const { createServer: createViteServer } = require("vite");
  const alias = require('@rollup/plugin-alias');
  const resolve = require('@rollup/plugin-node-resolve');
  const react = require('@vitejs/plugin-react');


  const app = express();
  const DEV_ENV = 'developer';
  const isDev = process.env.NODE_ENV === DEV_ENV;

  let vite = null;

  if (isDev) {
    vite = await createViteServer({
      server: { 
        middlewareMode: true,
      },
      css: {
        postcss: {
          plugins: [
            require('tailwindcss')(),
            require('autoprefixer')(),
          ],
        },
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
        resolve(),
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

    let indexPath = './dist/vite/client/index.html';
    let serverPath = './dist/vite/server/entry-server.js';

    if (isDev) {
      indexPath = './sources/vite/index.html';
      serverPath = './sources/vite/ssr/entry-server.tsx';
    }

    template = fs.readFileSync(path.resolve(indexPath), 'utf-8');
    template = await vite.transformIndexHtml(requestPath, template);
    if (isDev) {
      template = await vite.transformIndexHtml(requestPath, template);
    }
    
    let appHtml = null;

    try {
      render = isDev 
        ? (await vite.ssrLoadModule(serverPath)).SSRRender
        : (await import(path.resolve(serverPath))).SSRRender;
      appHtml = render({ path: requestPath });
      
    }
    catch (ex) {}

    let html = template.replace(`<!--app-html-->`, appHtml || '');
      
    html = html.replace(
      '% script_uri %',
      '/sources/vite/ssr/entry-client.tsx',
    );

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  });

  app.listen(3033, () => {
    console.log('http://localhost:3033');
  });
})()