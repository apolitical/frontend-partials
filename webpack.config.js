const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackDefaults = require('./helpers/webpack.defaults');

const prod = process.env.NODE_ENV !== 'development';

const webpackConfig = {
  ...webpackDefaults,

  // Entry point
  entry: './src/index.jsx',

  // All options relating to where files go when they're built
  output: {
    path: `${__dirname}/dist/frontend-skeleton`,
    filename: 'index.js',
    publicPath: '/frontend-skeleton',
  },

  // Dev server specific
  devServer: {
    stats: webpackDefaults.stats,
    historyApiFallback: {
      index: '/frontend-skeleton/index.html',
    },
    proxy: {
      '/api/members': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api/members': '' },
        secure: false,
      },
      '/api/tests': {
        target: 'http://localhost:3131',
        pathRewrite: { '^/api/tests': '' },
        secure: false,
      },
    },
  },

  // What plugins are used in the build process
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${__dirname}/src/index.html`,
      title: 'React Application',
    }),
    new WebpackCdnPlugin({
      prod,
      modules: {
        react: [
          { name: 'react', var: 'React', path: `umd/react.${prod ? 'production.min' : 'development'}.js` },
          { name: 'react-dom', var: 'ReactDOM', path: `umd/react-dom.${prod ? 'production.min' : 'development'}.js` },
          { name: 'react-redux', var: 'ReactRedux', path: `dist/react-redux${prod ? '.min' : ''}.js` },
          { name: 'react-router-dom', var: 'ReactRouterDOM', path: `umd/react-router-dom${prod ? '.min' : ''}.js` },
          { name: 'redux', var: 'Redux', path: `dist/redux${prod ? '.min' : ''}.js` },
          { name: 'styled-components', var: 'styled', path: `dist/styled-components${prod ? '.min' : ''}.js` },
        ],
      },
      publicPath: '../node_modules',
    }),
  ],

  devtool: 'source-map',
  mode: prod ? 'production' : 'development',

};

if (!prod) {
  webpackConfig.devtool = 'eval';
}
if (prod) {
  webpackConfig.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true,
          },
        },
      }),
    ],
  };
}

module.exports = webpackConfig;
