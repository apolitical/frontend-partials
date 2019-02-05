// Base Webpack config that will be used by other configs.
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
        options: {
          presets: [
            ['@babel/env', { targets: ['last 2 versions', 'ie 9'] }],
            '@babel/flow',
            '@babel/react',
          ],
          plugins: [
            ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
            'transform-class-properties',
          ],
        },
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
