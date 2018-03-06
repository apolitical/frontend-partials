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
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*Test.jsx"]}]
  }
};
