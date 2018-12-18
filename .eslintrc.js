module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'flowtype',
    'flow-header',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  globals: {
    jest: true,
    expect: true,
    should: true,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'react/no-array-index-key': 'warn',
    'flow-header/flow-header': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*Test.jsx',
          '**/*test.js*',
          'helpers/*.js',
          'webpack.config.js',
          'karma.conf.js',
        ],
      },
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'instance-variables',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
  },
};
