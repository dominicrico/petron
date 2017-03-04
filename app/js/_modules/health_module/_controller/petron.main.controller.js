(function() {
	'use strict';

	angular.module('petron.modules.health')
		.controller('controller.healthbox.main', ['$scope', '$rootScope', '$state',
			'$timeout',
			function($scope, $rootScope, $state, $timeout) {
				$rootScope.title = 'health_module';
				$rootScope.rightMenuShow = false;

				$scope.speed = 123;
				$scope.tacho = 6000;

				$scope.battery1 = 14;
				$scope.battery2 = 100;

				$scope.lights = false;
				$scope.consumption = 11.2;
			}
		]);
})();
