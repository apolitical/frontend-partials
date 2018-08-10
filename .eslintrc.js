module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: [ "flowtype" ],
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  globals: {
    expect: true,
    should: true,
  },
  rules: {
    "arrow-parens": ["error", "always"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*Test.jsx"]}],
    "react/jsx-one-expression-per-line": "off",
  }
};
