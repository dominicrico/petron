(function() {
	'use strict';

	angular.module('petron.modules.navigation')
		.controller('controller.navigationbox.main', ['$scope', '$rootScope',
			'petron.navi', '$timeout', '$state',
			function($scope, $rootScope, petronNavi, $timeout, $state) {
				$rootScope.title = 'navigation_module';

				$scope.results = [];

				$scope.model = {
					country: 'DE',
					city: '',
					street: ''
				};

				$scope.ph = {
					country: 'country_dest_ph',
					city: 'city_dest_ph',
					street: 'street_dest_ph'
				};

				$scope.nav = {
					country: 'DE',
					city: null,
					street: null,
					geo: null
				};

				$scope.addressIndex = 1;
				$scope.addressParts = ['country', 'city', 'street'];
				$scope.addressPart = $scope.addressParts[$scope.addressIndex];
				$scope.showFullAddress = false;

				$scope.addToAddress = function(address) {
					if (address !== undefined) {
						$scope.nav[$scope.addressPart] = address.properties.name || address.properties
							.street + ((address.properties.housenumber) ? ' ' + address.properties
								.housenumber :
								'');
					} else {
						$scope.nav[$scope.addressPart] = $scope.model[$scope.addressPart];
					}

					if ($scope.addressIndex < $scope.addressParts.length - 1) {
						$scope.addressIndex = $scope.addressIndex + 1;
					} else {
						$scope.showFullAddress = true;
						$scope.nav.geo = {
							lat: address.geometry.coordinates[0],
							lon: address.geometry.coordinates[1]
						};
					}

					$scope.addressPart = $scope.addressParts[$scope.addressIndex];
					$scope.results = null;
				};

				$scope.stepBack = function() {
					if ($scope.addressIndex - 1 >= 0) {
						$scope.addressIndex = $scope.addressIndex - 1;
						$scope.results = null;
						$scope.showFullAddress = false;
						$scope.addressPart = $scope.addressParts[$scope.addressIndex];
					}
				};

				$scope.resetDestination = function() {
					$scope.nav = {
						country: 'DE',
						city: null,
						street: null
					};

					$scope.model = {
						country: 'DE',
						city: '',
						street: ''
					};

					$scope.addressIndex = 1;
					$scope.showFullAddress = false;
					$scope.addressPart = $scope.addressParts[$scope.addressIndex];
				};

				$scope.startRouting = function() {
					$rootScope.navigation = {
						route: {
							dest: {
								lat: $scope.nav.geo.lat,
								lon: $scope.nav.geo.lon
							},
							start: {
								lat: 7.9687313,
								lon: 48.5584235,
							},
							isNew: true
						}
					};

					return $state.go('petron.navigationbox.map');
				};

				var _lastRequest;
				var _lookUp = function(type) {
					if ($scope.model[type].length >= 3) {
						var lookUp = vsprintf('%s, %s, %s', [$scope.model.country, $scope.model
							.city,
							$scope.model.street
						]);

						var request = petronNavi.lookUpAddress(lookUp, type);

						if (!_lastRequest) {
							_lastRequest = request;
						} else {
							_lastRequest.cancel('new Request');
							_lastRequest = request;
						}

						request.promise.then(function(res) {
							var results = [];
							res.features.forEach(function(r) {
								results.push(r);
							});

							$timeout(function() {
								$scope.$apply(function() {
									$scope.results = results;
								});
							});
						});
					}
				};

				$scope.$watchCollection('model', function() {
					_lookUp($scope.addressPart, $scope.addressParts[$scope.addressIndex]);
				});
			}
		]);
})();
