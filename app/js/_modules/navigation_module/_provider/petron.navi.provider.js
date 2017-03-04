(function() {
	'use strict';

	angular.module('petron.modules.navigation')
		.provider('petron.navi', [function() {
			var _geocoder, _tileserver, _routingmachine;
			return {
				setGeocoder: function(url, opts) {
					if (url.lastIndexOf('/') === url.length - 1) {
						_geocoder = url;
					} else {
						_geocoder = url + '/';
					}

					var params = '';
					params += '?q=%s';
					Object.keys(opts).forEach(function(p, i) {
						if (p !== 'q') {
							params += '&' + p + '=' + opts[p];
						}
					});

					_geocoder = _geocoder + params;
				},

				setTileServer: function(url, opts) {
					if (url.lastIndexOf('/') === url.length - 1) {
						_tileserver = url;
					} else {
						_tileserver = url + '/';
					}

					var params = '';
					Object.keys(opts).forEach(function(p, i) {
						if (i < 1) {
							params += '?' + p + '=' + opts[p];
						} else {
							params += '&' + p + '=' + opts[p];
						}
					});

					_tileserver = _tileserver + params;
				},

				setRoutingServer: function(url, opts) {
					if (url.lastIndexOf('/') === url.length - 1) {
						_routingmachine = url;
					} else {
						_routingmachine = url + '/';
					}

					var params = '';
					Object.keys(opts).forEach(function(p, i) {
						if (i < 1) {
							params += '?' + p + '=' + opts[p];
						} else {
							params += '&' + p + '=' + opts[p];
						}
					});

					_routingmachine = _routingmachine + '%s' + params;
				},

				$get: ['$http', '$q', function($http, $q) {
					return {

						lookUpAddress: function(address, type) {
							var canceller = $q.defer();
							var params;
							var cancel = function(reason) {
								canceller.resolve(reason);
							};

							if (type == 'country') {
								params = '';
							} else if (type === 'city') {
								params = '&osm_tag=:city&osm_tag=:village&osm_tag=:town';
							} else if (type === 'street') {
								params =
									'&osm_tag=building&osm_tag=residential&osm_tag=tertiary&osm_tagplace&osm_tag=tourism&osm_tag=amenity&osm_tag=emergency&osm_tag=cuisine';
							}

							address = encodeURI(address);
							var promise = $http.get(sprintf(_geocoder, address) + params, {
								timeout: canceller.promise
							}).then(
								function(data) {
									if (data.data && data.status === 200) {
										return data.data;
									}
								});

							return {
								promise: promise,
								cancel: cancel
							};
						},

						getRoutes: function(route) {
							var route = route.start.lat + ',' + route.start.lon + ';' + route.dest
								.lat + ',' + route.dest.lon;
							return $http.get(sprintf(_routingmachine, route)).then(function(
								data) {
								if (data.data && data.status === 200) {
									return data.data;
								}
							});
						}

					};
				}]
			};
		}]);
})();
