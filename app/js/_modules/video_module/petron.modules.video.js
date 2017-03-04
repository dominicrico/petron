(function() {
	'use strict';

	angular.module('petron.modules.video', []);

	angular.module('petron.modules.video')
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('petron.videobox', {
					abstract: true,
					url: '/videobox',
					views: {
						'content': {
							template: '<div ui-view="main" class="c--main"></div>'
						}
					}
				}).state('petron.videobox.main', {
					url: '/main',
					views: {
						'main@petron.videobox': {
							templateUrl: 'js/_modules/video_module/_template/main.html',
							controller: 'controller.videobox.main'
						},
						'header@petron': {
							templateUrl: 'js/_main/_template/petron.header.html'
						}
					}
				}).state('petron.videobox.player', {
					url: '/player',
					views: {
						'main@petron.videobox': {
							templateUrl: 'js/_modules/video_module/_template/player.html'
						},
						'header@petron': {}
					}
				});
		}]);
})();
