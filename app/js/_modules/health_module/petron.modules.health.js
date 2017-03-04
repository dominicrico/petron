(function() {
	'use strict';

	angular.module('petron.modules.health', []);
	angular.module('petron.modules.health').config(['$stateProvider', function(
		$stateProvider) {
		$stateProvider
			.state('petron.healthbox', {
				url: '/healthbox',
				views: {
					'content': {
						templateUrl: 'js/_modules/health_module/_template/main.html',
						controller: 'controller.healthbox.main'
					},
					'header@petron': {
						templateUrl: 'js/_main/_template/petron.header.html'
					}
				}
			});
	}]);
})();
