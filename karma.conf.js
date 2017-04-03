"use strict";

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['wiredep', 'jasmine'],

    wiredep: {
      dependencies: true, // default: true
      devDependencies: true, // default: false
      overrides: {
        "mapbox-gl-leaflet": {
          "main": "leaflet-mapbox-gl.js"
        },
        "mapbox-gl-js": {
          "main": [
            "mapbox-gl.js",
            "mapbox-gl.css"
          ]
        },
        "polyline": {
          "main": [
            "src/polyline.js"
          ]
        }
      }
    },

    // list of files / patterns to load in the browser
    files: [
      'app/vendor/angular-i18n/angular-locale_de.js',
      'app/vendor/angular-i18n/angular-locale_en.js',
      'app/js/_main/petron.templates.js',
      'app/js/_modules/**/petron.modules*.js',
      'app/js/_modules/**/_provider/**/*.js',
      'app/js/_modules/**/_factory/**/*.js',
      'app/js/_modules/**/_directive/**/*.js',
      'app/js/_modules/**/_controller/**/*.js',
      'app/js/_modules/petron.modules.js',
      'app/js/_main/petron.core.js',
      'app/js/_main/**/petron.*.js',
      'app/js/_main/**/petron.js',
      'app/js/**/_tests_/**/*.spec.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/js/**/!(*spec).js': ['coverage'],
      '**/*.js': ['electron']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-spec-reporter',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-wiredep',
      'karma-electron'
    ],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Electron'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    client: {
      useIframe: false
    }
  });
};
