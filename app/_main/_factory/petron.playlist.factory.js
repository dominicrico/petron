(function() {
	angular.module('petron.core')
		.factory('petron.playlist', ['petron.storage', '$q', function(petronStorage,
			$q) {
			var __playlist = {
				name: '',
				tracks: '',
				type: 'playlist'
			};
			var _currentQueue = {};
			var _playlists;
			var _type;

			var _savePlaylists = function(pl) {
				var deferred = $q.defer();
				petronStorage.set('petron.playlists.' + _type, pl).then(
					function(playlists) {
						deferred.resolve(playlists);
					},
					function(err) {
						console.error(err);
					});

				return deferred.promise;
			};

			var _saveQueue = function(q) {
				var deferred = $q.defer();
				petronStorage.set('petron.queue.' + _type, q).then(
					function(playlists) {
						deferred.resolve(playlists);
					},
					function(err) {
						console.error(err);
					});

				return deferred.promise;
			};

			var _loadPlaylists = function(type) {
				var deferred = $q.defer();
				_type = type;

				petronStorage.get('petron.queue.' + _type).then(function(queue) {
					_currentQueue[_type] = angular.copy(queue);

					petronStorage.get('petron.playlists.' + _type).then(
						function(playlists) {
							_playlists = angular.copy(playlists);
							deferred.resolve(true);
						},
						function(err) {
							console.log(err);
						});
				});

				return deferred.promise;
			};

			return {
				save: function() {
					_savePlaylists(_playlists);
					_saveQueue(_currentQueue[_type]);
				},

				getQueue: function() {
					var deferred = $q.defer();

					deferred.resolve(_currentQueue[_type]);

					return deferred.promise;
				},

				clearQueue: function() {
					var deferred = $q.defer();

					_currentQueue[_type] = {};
					deferred.resolve(_currentQueue[_type]);

					return deferred.promise;
				},

				playPlaylist: function(name) {
					var deferred = $q.defer();

					if (typeof name !== 'string') {
						_currentQueue[_type] = {};
						_currentQueue[_type].tracks = [name];
					} else {
						_currentQueue[_type] = _playlists[name];
					}

					deferred.resolve(_currentQueue[_type]);

					return deferred.promise;
				},

				newPlaylist: function(pl) {
					var deferred = $q.defer();

					newPl = angular.copy(__playlist);
					newPl.name = pl.name || 'Playlist';
					newPl.tracks = pl.tracks || [];
					_playlists[pl.name] = newPl;
					deferred.resolve(_playlists[pl.name]);

					return deferred.promise;
				},

				getPlaylist: function(name) {
					var deferred = $q.defer();

					deferred.resolve(_playlists[name]);

					return deferred.promise;
				},

				removePlaylist: function(name) {
					var deferred = $q.defer();

					_playlists[name] = undefined;
					delete _playlists[name];
					deferred.resolve(_playlists);

					return deferred.promise;
				},

				updatePlaylist: function(name, update) {
					var deferred = $q.defer();

					_playlists[update] = _playlists[name];
					_playlists[update].name = update;
					_playlists[name] = undefined;
					delete _playlists[name];
					deferred.resolve(_playlists[update]);

					return deferred.promise;
				},

				loadPlaylists: function(type) {
					_type = type;
					var deferred = $q.defer();
					var promises = [];

					if (_playlists !== undefined && _currentQueue[_type] !== undefined) {
						deferred.resolve([_currentQueue[_type], _playlists]);
					} else {
						_loadPlaylists(type).then(function() {
							promises.push(_currentQueue[_type]);
							promises.push(_playlists);
							$q.all(promises).then(function() {
								deferred.resolve(promises);
							});
						}, function(err) {
							throw new Error(err);
						});
					}

					return deferred.promise;
				},

				addToPlaylist: function(name, tracks) {
					var deferred = $q.defer();

					if (!(tracks instanceof Array)) {
						tracks = [tracks];
					}

					tracks.forEach(function(track, i) {
						try {
							tracks[i].path = track.path.$$unwrapTrustedValue();
						} catch (e) {
							tracks[i].path = track.path;
						}
					});

					if (name !== 'queue') {
						_playlists[name].tracks = [].concat((_playlists[name].tracks || []),
							tracks);
						deferred.resolve(_playlists[name]);
					} else {
						_currentQueue[_type].tracks = [].concat((_currentQueue[_type].tracks || []),
							tracks);
						deferred.resolve(_currentQueue[_type]);
					}

					return deferred.promise;
				},

				removeFromPlaylist: function(name, track) {
					var deferred = $q.defer();

					if (name !== 'queue') {
						_playlists[name].tracks = _playlists[name].tracks.splice(track, 1);
						deferred.resolve(_playlists[name]);
					} else {
						_currentQueue[_type].tracks = _currentQueue[_type].tracks.splice(
							index, 1);
						deferred.resolve(_currentQueue[_type]);
					}

					return deferred.promise;
				},

				removeAllPlaylists: function() {
					var deferred = $q.defer();

					petronStorage.remove('petron.playlists.' + _type).then(function() {
						_playlists = {};
						deferred.resolve(_playlists);
					});

					return deferred.promise;
				},
			};

		}]);
})();
