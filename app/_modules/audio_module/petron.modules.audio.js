(function() {
	'use strict';

	angular.module('petron.modules.audio', []);

	angular.module('petron.modules.audio')
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('audiobox', {
					abstract: true,
					url: '/audiobox',
					templateUrl: '_modules/audio_module/_template/layout.html'
				}).state('audiobox.main', {
					url: '/main',
					views: {
						'main@audiobox': {
							templateUrl: '_modules/audio_module/_template/main.html',
							controller: 'controller.audiobox.main'
						},
						'header@audiobox': {
							templateUrl: '_main/_template/petron.header.html'
						}
					}
				}).state('audiobox.player', {
					url: '/player',
					views: {
						'main@audiobox': {
							templateUrl: '_modules/audio_module/_template/player.html'
						},
						'header@audiobox': {}
					}
				});
		}]);
})();
