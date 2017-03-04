(function() {
	'use strict';

	angular.module('petron.modules.navigation', [])
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('petron.navigationbox', {
					url: '/navigationbox',
					abstract: true,
					views: {
						'content': {
							template: '<div ui-view="main" class="c--main"></div>'
						}
					}
				})
				.state('petron.navigationbox.main', {
					url: '/main',
					views: {
						'main@petron.navigationbox': {
							templateUrl: 'js/_modules/navigation_module/_template/main.html',
							controller: 'controller.navigationbox.main'
						},
						'header@petron': {
							templateUrl: 'js/_main/_template/petron.header.html'
						},
						'right-menu@': {
							templateUrl: 'js/_modules/navigation_module/_template/menu.html',
							controller: 'controller.navigationbox.main'
						}
					}
				}).state('petron.navigationbox.map', {
					url: '/map',
					views: {
						'main@petron.navigationbox': {
							templateUrl: 'js/_modules/navigation_module/_template/map.html',
							controller: 'controller.navigationbox.map'
						},
						'header@petron': {
							templateUrl: 'js/_main/_template/petron.header.html'
						},
						'right-menu@': {
							templateUrl: 'js/_modules/navigation_module/_template/menu.html',
							controller: 'controller.navigationbox.main'
						}
					}
				});
		}])
		.config(['petron.naviProvider', function(naviProvider) {

			naviProvider.setGeocoder('http://photon.komoot.de/api/', {
				lang: 'de',
				limit: 2
			});

			naviProvider.setRoutingServer(
				'https://router.project-osrm.org/route/v1/driving/', {
					steps: true,
					alternatives: true,
					overview: 'full'
				});

		}]);
})();
