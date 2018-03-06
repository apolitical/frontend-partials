const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const prod = process.env.NODE_ENV !== 'development';
const cdnEnv = prod ? 'production.min' : 'development' ;


const stats = {
  all: false,
  colors: true,
  errors: true,
  errorDetails: true,
  performance: true,
  warnings: true,
};

const webpackConfig   = {
  // Entry point
  entry: './src/index.jsx',

  // All options relating to where files go when they're built
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },

  // How to find files that will be loaded
  // extensions - When you import or require a file, what suffixes can be omitted
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Which files get sent to which parsers before being bundled
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  // Options for CLI output set above, used in both normal builds and devServer
  stats,
  devServer: {
    stats,
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
          { name: 'react', var: 'React', path: `umd/react.${cdnEnv}.js` },
          { name: 'react-dom', var: 'ReactDOM', path: `umd/react-dom.${cdnEnv}.js` },
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
