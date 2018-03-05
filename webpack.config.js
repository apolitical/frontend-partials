const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const prod = process.env.NODE_ENV !== 'development';
const cdnEnv = prod ? 'production.min' : 'development' ;

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },
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
  devServer: {
    noInfo: true,
  }
};
