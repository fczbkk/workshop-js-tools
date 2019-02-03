module.exports = function (config) {
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
      mode: 'development',
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /\.spec\.js$/,
          }
        ]
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'PhantomJS',
      'ChromeHeadless'
    ],
    singleRun: false
  })
}
