(function() {
	'use strict';

	angular.module('petron.core.routes', []);

	angular.module('petron.core.routes')
		.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
			function($locationProvider, $stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/home');

				$stateProvider.state('petron', {
					templateUrl: 'js/_main/_template/petron.home.html',
					controller: 'controller.main'
				}).state('petron.home', {
					url: '/home',
					views: {
						'content': {
							templateUrl: 'js/_main/_template/petron.content.html'
						},
						'header@petron': {
							templateUrl: 'js/_main/_template/petron.header.html'
						},
					},
				});

			}
		]);
})();
