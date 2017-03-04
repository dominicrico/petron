(function() {
	'use strict';

	angular.module('petron.modules.navigation')
		.controller('controller.navigationbox.map', ['$scope', '$rootScope',
			'leafletData', 'petron.navi',
			function($scope, $rootScope, leafletData, petronNavi) {
				$rootScope.title = 'navigation_module';

				$scope.defaults = {
					tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
					maxZoom: 18,
					path: {
						weight: 10,
						color: '#800000',
						opacity: 1
					}
				};

				$scope.center = {
					lat: 48.5584235,
					lng: 7.9687313,
					zoom: 18
				};

				var Marker = L.Icon.extend({
					options: {
						iconSize: [50, 69],
						iconAnchor: [26, 69]
					}
				});

				var markers = [new Marker({
					iconUrl: 'images/marker_start.png'
				}), new Marker({
					iconUrl: 'images/marker_dest.png'
				})];

				$scope.marker = [];

				var _setCurrentRoute = function(route) {
					$scope.distance = route.distance;
					$scope.duration = route.duration;
					$scope.steps = route.legs[0].steps;
					$scope.summary = route.legs[0].summary;

					if (route.distance > 1000) {
						$scope.overallDistance = (route.distance / 1000).toFixed(2) + 'km';
					} else {
						$scope.overallDistance = (route.distance) + 'm';
					}
				};

				if ($rootScope.navigation.route.isNew) {
					$rootScope.navigation.route.isNew = false;
					petronNavi.getRoutes($rootScope.navigation.route).then(function(data) {
						leafletData.getMap().then(function(map) {
							data.waypoints.forEach(function(wp, i) {
								$scope.marker[i] = L.marker([wp.location[1], wp.location[0]], {
									icon: markers[i]
								}).addTo(
									map);
							});

							var polyLowerLines = [];
							var polyLines = [];

							data.routes.forEach(function(route, i) {
								var opacity = 0.5;

								if (i === 0) {
									opacity = 1;
									_setCurrentRoute(route);
								}

								var lline = L.polyline(polyline.decode(route.geometry), {
									color: '#fff',
									weight: 12,
									opacity: opacity / 2,
									smoothFactor: 1
								}).addTo(map);

								var line = L.polyline(polyline.decode(route.geometry), {
									color: '#0B8386',
									weight: 4,
									opacity: opacity,
									smoothFactor: 1
								}).addTo(map);

								polyLowerLines.push(lline);
								polyLines.push(line);

								line.addEventListener('click', function(e) {
									_setCurrentRoute(route);

									polyLowerLines.forEach(function(l) {
										l.setStyle({
											opacity: 0.5 / 2
										});
									});
									polyLines.forEach(function(l) {
										l.setStyle({
											opacity: 0.5
										});
									});

									lline.setStyle({
										opacity: 0.5
									});
									line.setStyle({
										opacity: 1
									});
								});

								lline.addEventListener('click', function(e) {
									_setCurrentRoute(route);

									polyLowerLines.forEach(function(l) {
										l.setStyle({
											opacity: 0.5 / 2
										});
									});
									polyLines.forEach(function(l) {
										l.setStyle({
											opacity: 0.5
										});
									});

									lline.setStyle({
										opacity: 0.5
									});
									line.setStyle({
										opacity: 1
									});
								});
							});
						});

					});
				}

			}
		]);
})();
