(function() {
	'use strict';

	angular.module('petron.modules.health')
		.controller('controller.healthbox.main', ['$scope', '$rootScope', '$state',
			'$timeout', 'node-obd', 'obd-parser-development-connection',
			function($scope, $rootScope, $state, $timeout, OBD, obdConnector) {
				$rootScope.title = 'health_module';
				$rootScope.rightMenuShow = false;
				$scope.dots = '.';
				var dotInterval = setInterval(function() {
					$scope.$apply(function() {
						if ($scope.dots.length < 3) {
							$scope.dots += '.';
						} else {
							$scope.dots = '.';
						}
					})
				}, 500);

				$scope.speed = 0;
				$scope.tacho = 0;

				$scope.battery1 = 0;
				$scope.battery2 = 0;

				$scope.lights = false;
				$scope.consumption = 0;

				var OBD = require('node-obd');
				var connector = require('obd-parser-bluetooth-connection');

				var connect = connector({
					name: 'obd'
				});

				var rpmPoller = new OBD.ECUPoller({
					pid: new OBD.PIDS.Rpm(),
					interval: 1000
				});

				var speedPoller = new OBD.ECUPoller({
					pid: new OBD.PIDS.VehicleSpeed(),
					interval: 1000
				});

				var fuelPoller = new OBD.ECUPoller({
					pid: new OBD.PIDS.FuelLevel(),
					interval: 1000
				});

				var supportPoller = new OBD.ECUPoller({
					pid: new OBD.PIDS.SupportedPids(),
					interval: 1000
				});

				rpmPoller.on('data', function(output) {

					$scope.$apply(function() {
						$scope.tacho = output.value.toFixed();
					});
				}, function(err) {
					console.error('RPM failed to poll the ECU', err);
				});

				speedPoller.on('data', function(output) {
					$scope.$apply(function() {
						$scope.speed = output.value;
					});
				}, function(err) {
					console.error('SPEED failed to poll the ECU', err);
				});

				fuelPoller.on('data', function(output) {
					console.error(output);
					$scope.$apply(function() {
						$scope.consumption = output.value;
					});
				}, function(err) {
					console.error('FUEL failed to poll the ECU', err);
				});

				$scope.connectToOBD = function() {
					$scope.isConnected = false;
					$scope.hasError = false;

					OBD.init(connect)
						.then(function() {

							clearInterval(dotInterval);

							$scope.$apply(function() {
								$scope.isConnected = true;
							});

							supportPoller.poll()
								.then(function(output) {
									console.log(output);
								}, function(err) {
									console.error('Support failed to poll the ECU', err);
								});

							rpmPoller.poll()
								.then(function(output) {
									$scope.$apply(function() {
										$scope.tacho = output.value;
									});

									rpmPoller.startPolling();
								}, function(err) {
									console.error('RPM failed to poll the ECU', err);
								});

							speedPoller.poll()
								.then(function(output) {
									$scope.$apply(function() {
										$scope.speed = output.value;
									});

									speedPoller.startPolling();
								}, function(err) {
									console.error('SPEED failed to poll the ECU', err);
								});

							fuelPoller.poll()
								.then(function(output) {
									$scope.$apply(function() {
										$scope.consumption = output.value;
									});

									fuelPoller.startPolling();
								}, function(err) {
									console.error('FUEL failed to poll the ECU', err);
								});

						}, function() {
							$scope.hasError = true;
						});
				};

				$scope.connectToOBD();
			}
		]);
})();
