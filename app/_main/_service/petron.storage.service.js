(function() {
	'use strict';

	angular.module('petron.core')
		.service('petron.storage', ['$window', 'electron-json-storage', '$q',
			function($window, storage,
				$q) {

				var storageSet = $window.require('electron-json-storage');

				this.get = function(key) {
					var deferred = $q.defer();

					storage.get(key, function(error, data) {
						if (error) {
							deferred.reject(error);
						} else {
							deferred.resolve(data);
						}
					});

					return deferred.promise;
				};

				this.set = function(key, data) {
					var deferred = $q.defer();
					storageSet.set(key, data, function(error) {
						if (error) {
							deferred.reject(error);
						} else {
							deferred.resolve(data);
						}
					});

					return deferred.promise;
				};

				this.keys = function() {
					var deferred = $q.defer();

					storage.keys(function(error, keys) {
						if (error) {
							deferred.reject(error);
						} else {
							deferred.resolve(keys);
						}
					});

					return deferred.promise;
				};

				this.remove = function(key) {
					var deferred = $q.defer();

					storage.remove(key, function(error) {
						if (error) {
							deferred.reject(error);
						} else {
							deferred.resolve();
						}
					});

					return deferred.promise;
				};

				this.clear = function() {
					var deferred = $q.defer();

					storage.clear(function(error) {
						if (error) {
							deferred.reject(error);
						} else {
							deferred.resolve();
						}
					});

					return deferred.promise;
				};
			}
		]);
})();
