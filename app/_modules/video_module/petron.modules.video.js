(function() {
	'use strict';

	angular.module('petron.modules.video', []);

	angular.module('petron.modules.video')
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('videobox', {
					abstract: true,
					url: '/videobox',
					templateUrl: '_modules/video_module/_template/layout.html'
				}).state('videobox.main', {
					url: '/main',
					views: {
						'main@videobox': {
							templateUrl: '_modules/video_module/_template/main.html',
							controller: 'controller.videobox.main'
						},
						'header@videobox': {
							templateUrl: '_main/_template/petron.header.html'
						}
					}
				}).state('videobox.player', {
					url: '/player',
					views: {
						'main@videobox': {
							templateUrl: '_modules/video_module/_template/player.html'
						},
						'header@videobox': {}
					}
				});
		}]);
})();
