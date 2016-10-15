(function() {
	'use strict';

	angular.module('petron.modules.navigation', [])
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('navigationbox', {
					abstract: true,
					url: '/navigationbox',
					templateUrl: '_modules/navigation_module/_template/layout.html'
				}).state('navigationbox.main', {
					url: '/main',
					views: {
						'main@navigationbox': {
							templateUrl: '_modules/navigation_module/_template/main.html',
							controller: 'controller.navigationbox.main'
						},
						'header@navigationbox': {
							templateUrl: '_main/_template/petron.header.html'
						}
					}
				}).state('navigationbox.player', {
					url: '/map',
					views: {
						'main@navigationbox': {
							templateUrl: '_modules/navigation_module/_template/map.html'
						},
						'header@navigationbox': {}
					}
				});
		}]);
})();
