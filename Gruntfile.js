"use strict";

var electron = require('electron-connect').server.create({
  stopOnClose: true,
  logLevel: 0
});

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      all: ['*.js', 'app/**/*.js', '!app/vendor/**/*.js', 'src/**/*.js'],
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: '.jshintrc'
      }
    },

    htmlbuild: {
      dist: {
        src: ['src/index.html', 'src/loader.html'],
        dest: 'app/',
        options: {
          beautify: true,
          relative: true,
          scripts: {
            petron: [
              'app/js/_main/petron.templates.js',
              'app/js/_modules/**/petron.modules*.js',
              'app/js/_modules/**/_provider/**/*.js',
              'app/js/_modules/**/_service/**/*.js',
              'app/js/_modules/**/_factory/**/*.js',
              'app/js/_modules/**/_directive/**/*.js',
              'app/js/_modules/**/_controller/**/*.js',
              '!app/js/_modules/petron.modules.js',
              'app/js/_modules/petron.modules.js',
              'app/js/_main/petron.core.js',
              'app/js/_main/**/petron.*.js',
              'app/js/_main/**/petron.js',
            ]
          }
        }
      }
    },

    html2js: {
      options: {
        module: 'petron.core.templates',
        useStrict: true,
        base: 'app'
      },
      main: {
        src: ['app/**/*.html', '!app/vendor/**/*.html'],
        dest: 'app/js/_main/petron.templates.js'
      },
    },

    wiredep: {
      dist: {
        options: {
          "overrides": {
            "electangular": {
              "main": "electangular.js",
              "dependencies": {
                "angular": "^1.0.8"
              }
            },
            "angular-rangeslider-directive": {
              "main": ["src/angular-range-slider.js",
                "angular-range-slider.css"
              ]
            }
          }
        },
        src: [
          'karam.conf.js',
          'src/index.html',
          'src/loader.html'
        ]
      }
    },

    sass: {
      dist: {
        files: {
          'app/css/petron.css': 'src/sass/petron.scss'
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        nospawn: true,
        interupt: true,
        atBegin: true
      },
      js: {
        files: ['index.js', 'src/**/*.js', 'app/**/*.js',
          '!app/vendor/**/*.js'
        ],
        tasks: ['jshint', 'reload-electron']
      },
      sass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass', 'reload-electron']
      },
      html: {
        files: ['app/**/*.html', '!app/vendor/**/*.html',
          '!app/js/_main/petron.templates.js',
          '!app/index.html', 'src/*.html'
        ],
        tasks: ['html2js', 'htmlbuild', 'reload-electron']
      }
    }

  });

  grunt.registerTask('compile', [
    'wiredep',
    'html2js',
    'htmlbuild',
    'sass'
  ]);

  grunt.registerTask('default', 'start electron app and watch for changes',
    grunt.task.run('compile'),
    function() {
      grunt.log.ok('Starting Petron...');
      electron.start(function() {
        grunt.log.ok('Petron started!');
      });
      grunt.task.run('watch');
    });

  grunt.registerTask('reload-electron', function() {
    grunt.log.ok('Reloading Petron...');
    electron.reload();
    grunt.log.ok('Petron reloaded!');
  });
};
