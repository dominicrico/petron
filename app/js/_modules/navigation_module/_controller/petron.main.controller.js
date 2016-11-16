(function() {
	'use strict';

	angular.module('petron.modules.navigation')
		.controller('controller.navigationbox.main', ['$scope', '$rootScope',
			function($scope, $rootScope) {
				$rootScope.title = 'navigation_module';

				if ($rootScope.daemon.type === 'gps' && !$rootScope.daemon.active) {
					$rootScope.daemon.active = true;
				}

			}
		]);
})();
