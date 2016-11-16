var electron = require('electron-connect').server.create();

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

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
				src: ['app/**/*.html', '!app/vendor'],
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
							"main": ["src/angular-range-slider.js", "angular-range-slider.css"]
						}
					}
				},
				src: [
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
				interupt: true,
				atBegin: true
			},
			dist: {
				files: ['app/**/*.*', '!app/js/_main/petron.templates.js',
					'!app/index.html', '!app/petron.css', 'src/sass/**/*.scss',
					'src/*.html'
				],
				tasks: ['compile', 'reload-electron']
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
		function() {
			electron.start();
			grunt.task.run('watch');
		});

	grunt.registerTask('reload-electron', function() {
		electron.reload();
	});
};
