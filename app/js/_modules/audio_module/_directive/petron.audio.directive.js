(function() {
	'use strict';

	angular.module('petron.modules.audio')
		.directive('petronAudio', ['petron.fs', 'petron.playlist', '$timeout',
			'$interval', 'petron.daemon', '$state', '$rootScope',
			function(
				petronFs, petronPlaylist, $timeout, $interval, petronDaemon, $state,
				$rootScope) {
				return {
					templateUrl: 'js/_modules/audio_module/_template/_directive.html',
					restrict: 'E',
					controller: ['$scope', '$rootScope', '$element',
						'$translatePartialLoader', '$translate',
						function(
							$scope,
							$rootScope, $element, $translatePartialLoader, $translate) {
							$scope._audio = $element.find('audio')[0];
							$scope.$audio = $element.find('audio');

							$translate('error.file_not_found').then(function(translation) {
								$scope.error_file_not_found = translation;
							});

							var _source;
							var _handleSourceError = function() {
								$scope.playlist.tracks[$scope.current].title = $scope.playlist.tracks[
										$scope.current].artist + ' - ' + $scope.playlist.tracks[$scope.current]
									.title;
								$scope.playlist.tracks[$scope.current].artist = $scope.error_file_not_found;
								$scope.playlist.tracks[$scope.current].play = false;
								$scope.playlist.tracks[$scope.current].not_found = true;
								$scope.next();
							};

							var _prepare = function() {
								petronPlaylist.setType('audio');
								petronDaemon.register('audio', $state.current.name);
								petronPlaylist.loadPlaylists('audio').then(function(audio) {
									$rootScope.audio = {
										queue: audio.queue,
										playlists: audio.playlists || {}
									};
								});

								$rootScope.audio.isPrepared = true;
							};

							var _initialize = function() {
								$timeout(function() {
									$scope.$apply(function() {
										if ($scope.playlist && $scope.playlist.tracks && $scope.playlist
											.tracks.length && $scope.playlist.tracks[$scope.current].play
										) {
											$scope.playlist.tracks[$scope.current].play = false;
										}

										$scope.current = 0;
										$scope.playlist = $rootScope.audio.queue;

										$scope.playlist.tracks.forEach(function(track, i) {
											if (track.play) $scope.current = i;
										})

										if ($scope.playlist && $scope.playlist.tracks && $scope.playlist
											.tracks.length) {
											$scope.playlist.tracks[$scope.current].play = true;
											$scope._audio.load();
										}
										$timeout(function() {
											_source = angular.element(angular.element($scope.$audio)
												.children()[
													0]);
											_source.on('error', _handleSourceError);
										});
									});
								});
							};

							if (!$rootScope.audio.isPrepared) {
								$timeout(function() {
									_prepare();
								});
							}

							$rootScope.$on('audio.queue:changed', _initialize);
							$rootScope.$on('audio.playlists:loaded', _initialize);

							$rootScope.$on('audio.queue:update', function() {
								$timeout(function() {
									$scope.$apply(function() {
										$scope.playlist = $rootScope.audio.queue;
									});
								});
							});

							if ($rootScope.audio.player && $rootScope.audio.player.controls) {
								$scope.controls = $rootScope.audio.player.controls;
							} else {
								_initialize();

								$scope.controls = {
									time: 0,
									duration: 0,
									play: true,
									shuffle: false,
									repeat: false,
									loop: false
								};
							}

							$scope.$audio.on('error', function(e) {
								console.log(e.target.error);
							});

							$scope.$audio.on('timeupdate', function() {
								$scope.controls.time = $scope._audio.currentTime;
							});

							$scope.$audio.on('durationchange', function() {
								$scope.controls.duration = $scope._audio.duration;
							});

							$scope.$audio.on('canplay', function() {
								if ($rootScope.daemon.player && $rootScope.daemon.player.audio !==
									undefined) {
									$scope._audio.currentTime =
										$rootScope.daemon.player.audio.currentTime + 0.2;
									$rootScope.daemon.player.audio = undefined;
								}
								$scope.play(true);
							});

							$scope.$audio.on('loadstart', function() {
								_source.off('error', _handleSourceError);
								_source = angular.element(angular.element($scope.$audio)
									.children()[
										0]);
								_source.on('error', _handleSourceError);
							});

							$scope.$audio.on('ended', function() {
								if ($scope.controls.repeat) {
									$scope._audio.load();
								} else {
									$scope.next();
								}
							});

							$scope.seek = function() {
								$scope._audio.currentTime = $scope.controls.time;
							};

							$rootScope.playTrack = function(track) {
								if ($scope.playlist.tracks[$scope.current]) {
									$scope.playlist.tracks[$scope.current].play = false;
								}
								$scope.current = track;
								$scope.playlist.tracks[$scope.current].play = true;
								$scope._audio.load();
							};

							$scope.play = function(force) {
								if (!$scope.controls.play || force) {
									$scope.controls.play = true;
									$timeout(function() {
										$scope._audio.play();
									});
								} else {
									$scope.controls.play = false;
									$scope._audio.pause();
								}
							};

							$scope.toggleRepeat = function() {
								if (!$scope.controls.repeat && $scope.controls.loop) {
									$scope.controls.repeat = true;
									$scope.controls.loop = false;
								} else if (!$scope.controls.repeat && !$scope.controls.loop) {
									$scope.controls.repeat = false;
									$scope.controls.loop = true;
								} else {
									$scope.controls.repeat = false;
									$scope.controls.loop = false;
								}
							};

							var _playlist;

							$scope.shuffle = function() {
								$scope.controls.shuffle = !$scope.controls.shuffle;
								$scope.playlist.tracks[$scope.current].play = false;

								if ($scope.controls.shuffle) {
									_playlist = angular.copy($rootScope.audio.queue);
									$scope.playlist.tracks.sort(function() {
										return 0.5 - Math.random();
									});
								} else {
									$scope.playlist = $rootScope.audio.queue = _playlist;
								}

								$scope.current = 0;
								$scope.playlist.tracks[$scope.current].play = true;

								$scope._audio.load();
							};

							$scope.next = function() {
								if ($scope.playlist.tracks[$scope.current + 1]) {
									$scope.playlist.tracks[$scope.current].play = false;
									$scope.current++;
									$scope.playlist.tracks[$scope.current].play = true;
								} else if ($scope.controls.loop && !$scope.playlist.tracks[$scope
										.current +
										1]) {
									$scope.playlist.tracks[$scope.current].play = false;
									$scope.current = 0;
									$scope.playlist.tracks[$scope.current].play = true;
								} else {
									return false;
								}

								$timeout(function() {
									$scope._audio.load();
								});
							};

							$scope.previous = function() {
								if ($scope.playlist.tracks[$scope.current - 1]) {
									$scope.playlist.tracks[$scope.current].play = false;
									$scope.current--;
									$scope.playlist.tracks[$scope.current].play = true;
								} else if ($scope.controls.loop && !$scope.playlist.tracks[$scope
										.current -
										1]) {
									$scope.playlist.tracks[$scope.current].play = false;
									$scope.current = 0;
									$scope.playlist.tracks[$scope.current].play = true;
								} else {
									return false;
								}

								$scope._audio.load();
							};

							$scope.daemonize = function() {
								$rootScope.audio.player = $scope;
								if (!$rootScope.audio.player.playlist) {
									$rootScope.audio.player.playlist = $rootScope.audio.player.queue;
								}
								if ($scope.controls.play) {
									petronDaemon.enable('audio', 'petron.audiobox');
								}
							};

							$rootScope.$on('$stateChangeStart', function(event, toState, toParams,
								fromState) {
								if (fromState.name === 'petron.audiobox') {
									$scope.daemonize();
								}
							});
						}
					]
				};
			}
		]);
})();
