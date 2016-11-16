(function() {
	'use strict';

	angular.module('petron.core')
		.controller('controller.main', ['$scope', '$rootScope', 'petron.playlist',
			'$interval',
			function($scope, $rootScope, petronPlaylist, $interval) {
				$interval(function() {
					$rootScope.date = new Date();
				}, 1000);

				petronPlaylist.loadPlaylists('audio').then(function(audio) {
					petronPlaylist.loadPlaylists('video').then(function(video) {

						$rootScope.video = {
							queue: video[0],
							playlists: video[1]
						};

						$scope.splashscreen = false;
					});
				});
			}
		]);
})();
