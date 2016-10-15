(function() {
	'use strict';

	angular.module('petron.core')
		.directive('petronDaemon', ['petron.daemon', '$rootScope', '$timeout',
			'$state',
			function(
				petronDaemon, $rootScope, $timeout, $state) {
				return {
					templateUrl: '_main/_directive/daemon/petron.daemon.html',
					restrict: 'E',
					link: function(scope, elem, attrs) {
						$rootScope.daemonBack = function() {
							$state.go($rootScope.daemon.origin);
						};

						$timeout(function() {
							$rootScope.player[$rootScope.daemon.type].bindEvents();
						});
					}
				};
			}
		]);
})();
