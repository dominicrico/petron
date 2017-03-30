(function() {
	"use strict";

	angular.module('petron.modules.fm')
		.factory('petron.tuner', ['petron.storage', '$q', function(petronStorage,
			$q) {
			var _channels = [];
			var _favourites = [];
			var _tuner;
			return {

				turnOn: function() {
					var deferred = $q.defer();

					_tuner = angular.noop(); // TODO: add "node-rpi-si4703" when on raspberry
					_tuner.powerOn(function(err) {
						if (err) {
							deferred.reject(err);
						} else {
							deferred.resolve(_tuner);
						}
					});

					return deferred.promise;
				},

				turnOff: function() {
					var deferred = $q.defer();

					_tuner.powerOff(function(err) {
						if (err) {
							deferred.reject(err);
						} else {
							deferred.resolve(_tuner);
						}
					});

					return deferred.promise;
				},

				seekUp: function() {
					var deferred = $q.defer();

					_tuner.seekUp(function(channel, err) {
						if (err) {
							deferred.reject(err);
						} else {
							deferred.resolve(channel);
						}
					});

					return deferred.promise;
				},

				seekDown: function() {
					var deferred = $q.defer();

					_tuner.seekDown(function(channel, err) {
						if (err) {
							deferred.reject(err);
						} else {
							deferred.resolve(channel);
						}
					});

					return deferred.promise;
				},

				readRDS: function() {
					var deferred = $q.defer();

					_tuner.readRDS(function(rds, err) {
						if (err) {
							deferred.reject(err);
						} else {
							deferred.resolve(rds);
						}
					});

					return deferred.promise;
				},

				getChannels: function() {
					var deferred = $q.defer();

					deferred.resolve(_channels);

					return deferred.promise;
				},

				getFavourites: function() {
					var deferred = $q.defer();

					petronStorage.get('petron.fm.favourites').then(function(favs) {
						_favourites = favs;
						deferred.resolve(_favourites);
					});

					return deferred.promies;
				},

				setFavourite: function(channel) {
					var deferred = $q.defer();

					_favourites.push(channel);

					petronStorage.set('petron.fm.favourites', _favourites).then(function(
						favs) {
						_favourites = favs;
						deferred.resolve(_favourites);
					});

					return deferred.promies;
				},

				setChannels: function(channels) {
					var deferred = $q.defer();

					_channels = channels;

					deferred.resolve(_channels);

					return deferred.promise;
				},

				removeFavourite: function(channel) {
					var deferred = $q.defer();

					_favourites.splice(channel, 1);

					petronStorage.set('petron.fm.favourites', _favourites).then(function(
						favs) {
						_favourites = favs;
						deferred.resolve(_favourites);
					});

					return deferred.promies;
				}

			};

		}]);
})();
