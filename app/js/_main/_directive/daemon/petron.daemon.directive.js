(function() {
	'use strict';

	angular.module('petron.core')
		.directive('petronDaemon', ['petron.daemon', '$rootScope', '$timeout',
			'$state',
			function(
				petronDaemon, $rootScope, $timeout, $state) {
				return {
					templateUrl: 'js/_main/_directive/daemon/petron.daemon.html',
					restrict: 'E',
					controller: ['$rootScope', '$element', function($rootScope, $element,
						attrs) {
						$rootScope.daemonBack = function() {
							$state.go($rootScope.daemon.origin);
						};

						console.log($rootScope.video.player);

						var $media, _media, _playing = false;

						$timeout(function() {
							$media = $element.find($rootScope.daemon.type);
							_media = $media[0];

							$media.on('canplay', function() {
								if (!_playing) {
									_media.currentTime = $rootScope[$rootScope.daemon.type].player
										.controls.time;
									_media.play();
									_playing = true;
								}
							});
						});
					}]
				};
			}
		]);
})();
