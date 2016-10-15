(function() {
	'use strict';

	angular.module('petron.core')
		.service('petron.fs', ['fs', 'path', 'app', '$q', '$sce', function(fs, path,
			app, $q, $sce) {
			var basePath = app.getPath('home') + '/Downloads/';

			this.getAudioFiles = function(fpath) {
				var deferred = $q.defer();
				var audioSources = [];

				if (!fpath) {
					fpath = app.getPath('home') + '/Downloads';
				}

				var files = fs.readdirSync(fpath);

				files.forEach(function(file) {
					if (file.split('.').pop().match(/mp3|aac|wma|m4a/)) {
						audioSources.push({
							name: file.replace(/\.[^/.]+$/, ""),
							path: $sce.trustAsResourceUrl(encodeURI(path.join(fpath, file))),
							type: file.split('.').pop()
						});
					} else if (fs.lstatSync(path.join(fpath, file)).isDirectory()) {
						audioSources.push({
							name: file.replace(/\.[^/.]+$/, ""),
							path: path.join(fpath, file),
							type: 'folder'
						});
					}
				});
				deferred.resolve(audioSources);
				return deferred.promise;
			};

			this.getVideoFiles = function(fpath) {
				var deferred = $q.defer();
				var videoSources = [];

				if (!fpath) {
					fpath = app.getPath('home') + '/Downloads';
				}
				var files = fs.readdirSync(fpath);

				files.forEach(function(file) {
					if (file.split('.').pop().match(/mp4|mpeg|avi/)) {
						videoSources.push({
							name: file.replace(/\.[^/.]+$/, ""),
							path: $sce.trustAsResourceUrl(encodeURI(path.join(fpath, file))),
							type: file.split('.').pop()
						});
					} else if (fs.lstatSync(path.join(fpath, file)).isDirectory()) {
						videoSources.push({
							name: file.replace(/\.[^/.]+$/, ""),
							path: path.join(fpath, file),
							type: 'folder'
						});
					}
				});

				deferred.resolve(videoSources);
				return deferred.promise;
			};

			this.getAudioFiles = function(fpath) {
				var deferred = $q.defer();
				var audioSources = [];

				if (!fpath) {
					fpath = app.getPath('home') + '/Downloads';
				}
				var files = fs.readdirSync(fpath);

				files.forEach(function(file) {
					if (file.split('.').pop().match(/mp3|acc/)) {
						audioSources.push({
							name: file.replace(/\.[^/.]+$/, ""),
							path: $sce.trustAsResourceUrl(encodeURI(path.join(fpath, file))),
							type: file.split('.').pop()
						});
					} else if (fs.lstatSync(path.join(fpath, file)).isDirectory()) {
						audioSources.push({
							name: file.replace(/\.[^/.]+$/, ""),
							path: path.join(fpath, file),
							type: 'folder'
						});
					}
				});

				deferred.resolve(audioSources);
				return deferred.promise;
			};

		}]);
})();
