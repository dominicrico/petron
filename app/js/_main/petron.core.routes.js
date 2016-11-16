(function() {
	'use strict';

	angular.module('petron.core.routes', []);

	angular.module('petron.core.routes')
		.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
			function($locationProvider, $stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/');

				$stateProvider.state('petron', {
					url: '/',
					templateUrl: 'js/_main/_template/petron.home.html',
					controller: 'controller.main'
				});

			}
		]);
})();
