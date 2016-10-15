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
							'app/_main/petron.templates.js',
							'app/_modules/**/petron.modules*.js',
							'app/_modules/**/_service/**/*.js',
							'app/_modules/**/_directive/**/*.js',
							'app/_modules/**/_controller/**/*.js',
							'!app/_modules/petron.modules.js',
							'app/_modules/petron.modules.js',
							'app/_main/petron.core.js',
							'app/_main/**/petron.*.js',
							'app/_main/**/petron.js',
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
				src: ['app/**/*.html', '!app/_vendor'],
				dest: 'app/_main/petron.templates.js'
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
						"bulma": {
							"main": 'css/bulma.css'
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
					'app/petron.css': 'src/sass/petron.scss'
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
				files: ['app/**/*.*', '!app/_main/petron.templates.js',
					'!app/index.html', '!app/petron.css', 'src/sass/**/*.scss'
				],
				tasks: ['compile', 'reload-electron']
			},
		}

	});

	grunt.registerTask('compile', [
		'wiredep',
		'html2js',
		'htmlbuild',
		'sass'
	]);

	grunt.registerTask('default', 'watch for changes', function() {
		electron.start();
		grunt.task.run('watch');
	});

	grunt.registerTask('reload-electron', function() {
		electron.reload();
	});
};
