(function() {
	'use strict';

	angular.module('petron.modules.audio', []);

	angular.module('petron.modules.audio')
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('petron.audiobox', {
					url: '/audiobox',
					resolve: {
						setType: ['petron.playlist', function(petronPlaylist) {
							petronPlaylist.setType('audio');
						}]
					},
					views: {
						'content': {
							templateUrl: 'js/_modules/audio_module/_template/main.html',
							controller: 'controller.audiobox.main'
						},
						'header@petron': {
							templateUrl: 'js/_main/_template/petron.header.html'
						},
						'right-menu@': {
							templateUrl: 'js/_modules/audio_module/_template/playlists.html',
							controller: 'controller.audiobox.main'
						}
					}
				});
		}]);
})();
