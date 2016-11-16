(function() {
	'use strict';

	angular.module('petron.modules.audio', []);

	angular.module('petron.modules.audio')
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('petron.audiobox', {
					abstract: true,
					url: '/audiobox',
					views: {
						'content': {
							templateUrl: '_modules/audio_module/_template/layout.html'
						}
					}
				}).state('petron.audiobox.main', {
					url: '/main',
					views: {
						'main@petron.audiobox': {
							templateUrl: '_modules/audio_module/_template/main.html',
							controller: 'controller.audiobox.main'
						},
						'header@petron': {
							templateUrl: '_main/_template/petron.header.html'
						}
					}
				}).state('petron.audiobox.player', {
					url: '/player',
					views: {
						'main@petron.audiobox': {
							templateUrl: '_modules/audio_module/_template/player.html'
						},
						'header@petron': {}
					}
				});
		}]);
})();
