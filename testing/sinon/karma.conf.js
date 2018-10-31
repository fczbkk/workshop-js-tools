module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './*.spec.js'
    ],
    preprocessors: {
      './*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [
      'ChromeHeadless'
    ],
    singleRun: true,
  })
};
