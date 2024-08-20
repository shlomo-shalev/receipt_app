(async () => {
  const fs = require("node:fs").promises;
  const { build } = require("vite");
  const path = require('node:path');
  const alias = require('@rollup/plugin-alias');
  const resolve = require('@rollup/plugin-node-resolve');
  const react = require('@vitejs/plugin-react');

  const outDir = path.resolve('./dist/web/client');

  const entries = [
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
    { 
      find: '% script_uri %',
      replacement: '/sources/vite/ssr/entry-client.tsx',
    },
  ];

  await build({
    base: '/show-receipt-app/',
    root: path.resolve('./'), 
    define: {
      'process.env.BASE': JSON.stringify('/show-receipt-app'),
    },
    css: {
      postcss: {
        plugins: [
          require('tailwindcss')(),
          require('autoprefixer')(),
        ],
      },
    },
    minify: false,
    sourcemap: true,
    build: {
      minify: false,
      sourcemap: true,
      outDir,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].[hash].js`,
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
        input: {
          main: path.resolve('./sources/vite/index.html'),
        },
      },
      emptyOutDir: true,
    },
    resolve: {
      alias: entries,
    },
    plugins: [
      react(),
      alias({
        entries,
      }),
      resolve(),
    ],
    appType: 'custom',
  });
  const indexHtmlPath = `${outDir}/sources/vite/index.html`;
  const newIndexHtmlPath = `${outDir}/index.html`;
  // const assetsPath = path.resolve('./dist/web/client/assets');

  // let assetsFiles = await fs.readdir(assetsPath, 'utf8');
  // const jsFiles = assetsFiles.filter(file => file.endsWith('.js'));

  
  let data = await fs.readFile(indexHtmlPath, 'utf8');

  const scriptsData = data.match(/\<script.+\<\/script\>/g);

  let scripts = scriptsData.join('\n');

  data = data.replace(/<script[^>]*><\/script>/g, '');
  data = data.replace('</body>', `${scripts}\n</body>`);
  data = data.replace(`<!--app-html-->`, '')

  await fs.writeFile(newIndexHtmlPath, data);
  await fs.rm(`${outDir}/sources`, { recursive: true, force: true });
})();