const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const webpackDefaults = require('./helpers/webpack.defaults');

const prod = process.env.NODE_ENV !== 'development';

const webpackConfig   = {
  ...webpackDefaults,

  // Entry point
  entry: './src/index.jsx',

  // All options relating to where files go when they're built
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },

  // Dev server specific
  devServer: {
    stats: webpackDefaults.stats,
  },

  // What plugins are used in the build process
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/src/index.html',
      title: 'Apolitical Profiles',
    }),
    new WebpackCdnPlugin({
      prod,
      modules: {
        'react': [
          { name: 'react', var: 'React', path: `umd/react.${prod ? 'production.min' : 'development'}.js` },
          { name: 'react-dom', var: 'ReactDOM', path: `umd/react-dom.${prod ? 'production.min' : 'development'}.js` },
          { name: 'react-redux', var: 'ReactRedux', path: `dist/react-redux${prod ? '.min' : ''}.js` },
          { name: 'redux', var: 'Redux', path: `dist/redux${prod ? '.min' : ''}.js` },
        ]
      },
      publicPath: '/node_modules'
    }),
  ],

};

if (!prod) {
  webpackConfig.devtool = 'eval';
}

module.exports = webpackConfig  ;
