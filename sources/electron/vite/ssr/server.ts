const fs = require('node:fs');
const nodePath = require('node:path');
const express = require('express');
const { createServer: createViteServer } = require('vite');
const alias = require('@rollup/plugin-alias');
const resolve = require('@rollup/plugin-node-resolve');

module.exports = async () => {
  // const __dirname = nodePath.dirname(fileURLToPath(import.meta.url));
  const expressApp = express();
  const DEV_ENV = 'developer';
  // const resolve = (p) => nodePath.resolve(__dirname, p);
  let vite;

  if (process.env.NODE_ENV === DEV_ENV) {    
    vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: {
          port: 9844,
        },
      },
      plugins: [
        alias({
          entries: [
            {
              find: 'app',
              replacement: nodePath.resolve('./app'),
            },
            {
              find: 'route',
              replacement: nodePath.resolve('./route'),
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

    expressApp.use(vite.middlewares);
    expressApp.use(
      (await import('serve-static')).default(nodePath.resolve('./public'), {
        index: false,
      }),
    );
  } else {
    expressApp.use((await import('compression')).default());
    expressApp.use(
      (await import('serve-static')).default(nodePath.resolve('./dist/vite/client'), {
        index: false,
      }),
    );
  }

  expressApp.use('*', async (req, res) => {
    const requestPath = req.originalUrl;
    let render, template;
    
    if (process.env.NODE_ENV === DEV_ENV) {
      template = fs.readFileSync(nodePath.resolve("./sources/electron/vite/index.html"), "utf-8");
      template = await vite.transformIndexHtml(requestPath, template);
      render = (await vite.ssrLoadModule("./sources/vite/ssr/entry-server.tsx")).SSRRender;    
    } else {
      template = fs.readFileSync(nodePath.resolve('./dist/electron/vite/client/index.html'), 'utf-8');
      render = (await import(nodePath.resolve('./dist/vite/server/entry-server.js'))).SSRRender;
    }

    const appHtml = render({ path: requestPath }); //Rendering component without any client side logic de-hydrated like a dry sponge
    let html = template.replace(`<!--app-html-->`, appHtml); //Replacing placeholder with SSR rendered components
    html = html.replace(
      '% script_uri %', 
      './sources/vite/ssr/entry-client.tsx',
    );

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html); //Outputing final html
  });

  expressApp.listen(3034, () => {
    console.log('http://localhost:3033');
  });
  return expressApp;
};