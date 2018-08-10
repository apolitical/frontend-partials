module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }],
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { useBuiltIns: true }],
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
  ],
};
