const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const { hostname } = require('os');
const path = require('path');

const extraNodeModules = {
    'app': path.resolve(`${__dirname}/../../app`),
    'route': path.resolve(`${__dirname}/../../route`),
};

const watchFolders = [
  path.resolve(`${__dirname}/../../app`),
  path.resolve(`${__dirname}/../../route`),
];

const config = {
  hostname: 'localhost',
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
        sourceMaps: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from common/ to local node_modules
        name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);