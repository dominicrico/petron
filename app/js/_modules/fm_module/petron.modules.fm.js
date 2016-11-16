(function() {
	'use strict';

	angular.module('petron.modules.fm', []);

	angular.module('petron.modules.fm')
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('petron.fmbox', {
					url: '/fmbox',
					resolve: {
						setType: ['petron.playlist', function(petronPlaylist) {
							petronPlaylist.setType('audio');
						}]
					},
					views: {
						'content': {
							templateUrl: 'js/_modules/fm_module/_template/main.html',
							controller: 'controller.fmbox.main'
						},
						'header@petron': {
							templateUrl: 'js/_main/_template/petron.header.html'
						},
						'right-menu@': {
							templateUrl: 'js/_modules/fm_module/_template/stations.html',
							controller: 'controller.fmbox.main'
						}
					}
				});
		}]);
})();
