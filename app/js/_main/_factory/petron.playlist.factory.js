(function() {
	angular.module('petron.core')
		.factory('petron.playlist', ['petron.storage', '$q', '$rootScope', function(
			petronStorage,
			$q, $rootScope) {
			var __playlist = {
				name: '',
				tracks: '',
				type: 'playlist'
			};

			var _type;
			var _data = {
				_currentQueue: {},
				_playlists: {}
			};

			var _broadcastUpdate = function(name, action) {
				console.log('> ' + _type + '.' + name + ':' + action);
				$rootScope.$broadcast(_type + '.' + name + ':' + action);
			};

			var _savePlaylists = function(pl) {
				var deferred = $q.defer();
				if (pl.tracks) {
					pl.tracks.forEach(function(track) {
						try {
							track.path = track.path.$$unwrapTrustedValue();
						} catch (e) {
							track.path = track.path;
						}
					});
				}

				petronStorage.set('petron.playlists.' + _type, _data._playlists[_type])
					.then(
						function(playlists) {
							deferred.resolve(playlists);
						},
						function(err) {
							deferred.reject(err);
						});

				return deferred.promise;
			};

			var _saveQueue = function(q) {
				var deferred = $q.defer();

				if (q && q.tracks) {
					q.tracks.forEach(function(track) {
						try {
							track.path = track.path.$$unwrapTrustedValue();
						} catch (e) {
							track.path = track.path;
						}
					});
				}

				petronStorage.set('petron.queue.' + _type, q).then(
					function(playlists) {
						deferred.resolve(playlists);
					},
					function(err) {
						deferred.reject(err);
					});

				return deferred.promise;
			};

			var _loadPlaylists = function() {
				var deferred = $q.defer();

				petronStorage.get('petron.queue.' + _type).then(function(queue) {
					_data._currentQueue[_type] = angular.copy(queue);
					petronStorage.get('petron.playlists.' + _type).then(
						function(playlists) {

							_data._playlists[_type] = angular.copy(playlists);
							deferred.resolve({
								queue: _data._currentQueue[_type],
								playlists: _data._playlists[_type]
							});
						},
						function(err) {
							deffered.reject(err);
						});
				});

				return deferred.promise;
			};

			return {
				setType: function(type) {
					_type = type;
					return true;
				},

				save: function() {
					_savePlaylists(_data._playlists[_type]);
					_saveQueue(_data._currentQueue[_type]);
				},

				getQueue: function() {
					var deferred = $q.defer();

					deferred.resolve(_data._currentQueue[_type]);

					return deferred.promise;
				},

				clearQueue: function() {
					var deferred = $q.defer();

					_data._currentQueue[_type] = {};
					deferred.resolve(_data._currentQueue[_type]);

					return deferred.promise;
				},

				playPlaylist: function(name) {
					var deferred = $q.defer();
					if (typeof name !== 'string') {
						_data._currentQueue[_type] = {};
						if (!(name instanceof Array)) {
							_data._currentQueue[_type].tracks = [name];
						} else {
							_data._currentQueue[_type].tracks = name;
						}
					} else {
						_data._currentQueue[_type] = _data._playlists[_type][name];
					}

					_broadcastUpdate('queue', 'changed');

					deferred.resolve(_data._currentQueue[_type]);
					return deferred.promise;
				},

				newPlaylist: function(pl) {
					var deferred = $q.defer();

					newPl = angular.copy(__playlist);
					newPl.name = pl.name || 'Playlist';
					newPl.tracks = pl.tracks || [];
					_data._playlists[_type][newPl.name] = newPl;
					deferred.resolve(_data._playlists[_type][newPl.name]);

					return deferred.promise;
				},

				getPlaylist: function(name) {
					var deferred = $q.defer();

					deferred.resolve(_data._playlists[_type][name]);

					return deferred.promise;
				},

				removePlaylist: function(name) {
					var deferred = $q.defer();

					_data._playlists[_type][name] = undefined;
					delete _data._playlists[_type][name];
					deferred.resolve(_data._playlists[_type]);

					_broadcastUpdate(name, 'removed');

					return deferred.promise;
				},

				updatePlaylist: function(name, update) {
					var deferred = $q.defer();
					_data._playlists[_type][update] = _data._playlists[_type][name];
					_data._playlists[_type][update].name = update;
					_data._playlists[_type][name] = undefined;
					delete _data._playlists[_type][name];
					deferred.resolve(_data._playlists[_type][update]);

					_broadcastUpdate(name, 'changed');

					return deferred.promise;
				},

				loadPlaylists: function(type) {
					var deferred = $q.defer();
					var promises = [];

					if (type) {
						_type = type;
					}

					if (_data._playlists !== undefined && _data._currentQueue[_type] !==
						undefined) {
						deferred.resolve({
							queue: _data._currentQueue[_type],
							playlists: _data._playlists[_type]
						});
						_broadcastUpdate('playlists', 'loaded');
					} else {
						_loadPlaylists(type).then(function(playlists) {
							deferred.resolve(playlists);
							_broadcastUpdate('playlists', 'loaded');
						}, function(err) {
							_broadcastUpdate('playlists', 'error');
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
						_data._playlists[_type][name].tracks = [].concat((_data._playlists[
								_type][name].tracks || []),
							tracks);

						_broadcastUpdate(name, 'update');

						deferred.resolve(_data._playlists[_type][name]);
					} else {
						var concat = [];
						if (_data._currentQueue[_type] && _data._currentQueue[_type].tracks) {
							concat = _data._currentQueue[_type].tracks;
						}

						if (!_data._currentQueue[_type]) {
							_data._currentQueue[_type] = {};
						}

						_data._currentQueue[_type].tracks = [].concat(concat,
							tracks);

						_broadcastUpdate(name, 'update');

						deferred.resolve(_data._currentQueue[_type]);
					}

					return deferred.promise;
				},

				removeFromPlaylist: function(name, track) {
					var deferred = $q.defer();

					if (name !== 'queue') {
						_data._playlists[_type][name].tracks = _data._playlists[_type][name].tracks
							.splice(
								track, 1);
						deferred.resolve(_data._playlists[name]);
					} else {
						_data._currentQueue[_type].tracks = _data._currentQueue[_type].tracks
							.splice(
								index, 1);
						deferred.resolve(_data._currentQueue[_type]);
					}

					_broadcastUpdate(name, 'changed');

					return deferred.promise;
				},

				removeAllPlaylists: function() {
					var deferred = $q.defer();

					petronStorage.remove('petron.playlists.' + _type).then(function() {
						_data._playlists[_type] = {};
						deferred.resolve(_data._playlists[_type]);
					});

					return deferred.promise;
				},
			};

		}]);
})();
