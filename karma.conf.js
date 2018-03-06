const karmaChai = require('karma-chai');
const karmaMocha = require('karma-mocha');
const karmaNyanReporter = require('karma-nyan-reporter');
const karmaPhantomJsLauncher = require('karma-phantomjs-launcher');
const karmaWebpack = require('karma-webpack');
const webpack = require('./helpers/webpack.defaults');

const filesToTest = [ 'karma.test.js' ];

const filesToProcess = [
  'karma.test.js',
  'helpers/*.js',
  'helpers/*.jsx',
  'src/**/*.js',
  'src/**/*.jsx'
];

const preprocessorMap = (prev, cur) => ({
  ...prev,
  [cur]: ['webpack']
});

const preprocessors = filesToProcess.reduce(preprocessorMap, {});


module.exports = (config) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'chai',
      'mocha',
    ],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'node_modules/babel-polyfill/browser.js', instrument: false},
      ...filesToTest,
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    preprocessors,

    webpack,

    webpackMiddleware: {
      stats: webpack.stats,
    },

    plugins: [
      karmaChai,
      karmaMocha,
      karmaNyanReporter,
      karmaPhantomJsLauncher,
      karmaWebpack,
    ],
  });
};
