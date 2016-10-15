(function() {
	'use strict';

	angular.module('petron.core')
		.controller('controller.main', ['$scope', '$rootScope', '$interval',
			function($scope,
				$rootScope, $interval) {
				$interval(function() {
					$rootScope.date = new Date();
				}, 1000);
			}
		]);
})();
