// @flow
module.exports = {
  presets: [
    ['@babel/env', { targets: ['last 2 versions', 'ie 9'] }],
    '@babel/flow',
    '@babel/react',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    'transform-class-properties',
  ],
};
