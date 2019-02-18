// Base Webpack config that will be used by other configs.
const options = require('./babel.config');

module.exports = {
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
        options,
      },
    ],
  },

  // What to display when building
  stats: {
    all: false,
    colors: true,
    errors: true,
    errorDetails: true,
    performance: true,
    warnings: true,
  },

  // Overwritten in webpack.config.js
  mode: 'development',
};
