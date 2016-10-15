(function() {
	'use strict';

	angular.module('petron.core')
		.directive('petronAudio', ['petron.fs', 'petron.playlist', '$timeout',
			'$interval', 'petron.daemon', '$state', '$rootScope',
			function(
				petronFs, petronPlaylist, $timeout, $interval, petronDaemon, $state,
				$rootScope) {
				return {
					templateUrl: '_main/_directive/audioplayer/petron.audioplayer.html',
					restrict: 'E',
					controller: ['$scope', '$rootScope', function($scope, $rootScope) {
						var $audio = $rootScope.player.audio;

						petronPlaylist.loadPlaylists('audio').then(function() {
							petronPlaylist.getQueue().then(function(pl) {

								$audio.playlist = pl.tracks;
								$audio.playlist[$audio.currentIndex]
									.play = true;


								angular.element(document).ready(function() {
									var checkForPlayer = $interval(function() {
										var player = document.getElementsByTagName('audio')[0];
										if (player) {
											$timeout(function() {
												$audio.player = document.getElementsByTagName(
													'audio')[0];

												$audio.bindEvents();
											});

											$interval.cancel(checkForPlayer);
										}
									});
								});
							});
						});

					}],
					link: function(scope, elem, attrs) {
						var $audio = $rootScope.player.audio;

						if ($rootScope.daemon.active) {
							petronDaemon.hide();
							if ($rootScope.daemon.type !== 'audio') {
								petronDaemon.disable();
							}
						}

						if (!$audio.initialized) {
							$audio.origPlaylist = undefined;
							$audio.currentIndex = 0;
							$audio.controls = {
								loop: false,
								repeat: false,
								shuffle: false,
								volume: 1,
								duration: 0,
								currentTime: 0,
							};
						}

						$audio.bindEvents = function() {

							$audio.player = document.getElementsByTagName(
								'audio')[0];

							if (!$audio.initialized) {
								$audio.controls.volume = $audio.player
									.volume;
								$audio.controls.duration = $audio
									.player.duration;
								$audio.controls.currentTime = $audio
									.player.currentTime;
							} else {
								$audio.player.volume = $audio.controls
									.volume;
								$audio.player.currentTime = $audio
									.controls.currentTime;
							}

							$audio.player.onended = function() {
								$audio.player.next();
							};

							$audio.player.ontimeupdate = function() {
								$rootScope.$apply(function() {
									$audio.controls.duration = $audio
										.player.duration;
									$audio.controls.currentTime = $rootScope.player
										.audio.player.currentTime;
								});
							};

							$audio.initialized = true;
						};

						$audio.setTime = function() {
							$audio.player.currentTime = $audio
								.controls.currentTime;
							$audio.player.play();
						};

						$audio.setVolume = function() {
							$audio.player.volume = $audio.controls
								.volume;
						};

						$audio.playFile = function(index) {
							$audio.playlist[$audio.currentIndex]
								.play = false;
							$audio.currentIndex = index;
							$audio.playlist[$audio.currentIndex]
								.play = true;
							$audio.play();
						};

						$audio.play = function() {
							if ($audio.player.paused) {
								$audio.player.play();
								$audio.showPlay = false;
							} else {
								$audio.player.pause();
								$audio.showPlay = true;
							}
						};

						$audio.next = function() {
							if ($audio.playlist[$audio.currentIndex +
									1]) {
								$audio.playlist[$audio.currentIndex]
									.play = false;
								$audio.currentIndex++;
								$audio.playlist[$audio.currentIndex]
									.play = true;
								$audio.start();
							} else if ($audio.controls.loop && !$rootScope.player
								.audio.playlist[$audio.currentIndex +
									1]) {
								$audio.playlist[$audio.currentIndex]
									.play = false;
								$audio.currentIndex = 0;
								$audio.playlist[$audio.currentIndex]
									.play = true;
								$audio.play();
							} else {
								return false;
							}
						};

						$audio.prev = function() {
							if ($audio.playlist[$audio.currentIndex -
									1]) {
								$audio.playlist[$audio.currentIndex]
									.play = false;
								$audio.currentIndex--;
								$audio.playlist[$audio.currentIndex]
									.play = true;
								$audio.start();
							} else {
								return false;
							}
						};

						$audio.loop = function() {
							$audio.controls.loop = !$audio.controls
								.loop;
							if ($audio.controls.loop) {
								$audio.player.onended = function() {
									if ($audio.playlist[$audio.currentIndex +
											1]) {
										$audio.playlist[$audio.currentIndex]
											.play = false;
										$audio.currentIndex++;
										$audio.playlist[$audio.currentIndex]
											.play = true;
										$audio.start();
									} else {
										$audio.playlist[$audio.currentIndex]
											.play = false;
										$audio.currentIndex = 0;
										$audio.playlist[$audio.currentIndex]
											.play = true;
										$audio.start();
									}
								};
							} else {
								$audio.player.onended = function() {
									$audio.next();
								};
							}
						};

						$audio.shuffle = function() {
							$audio.controls.shuffle = !$audio.controls
								.shuffle;
							$audio.playlist[$audio.currentIndex]
								.play = false;

							if ($audio.controls.shuffle) {
								$audio.origPlaylist = angular.copy($rootScope.player
									.audio.playlist);

								var currentIndex = $audio.playlist.length,
									temporaryValue, randomIndex;
								// While there remain elements to shuffle...
								while (0 !== currentIndex) {

									// Pick a remaining element...
									randomIndex = Math.floor(Math.random() * currentIndex);
									currentIndex -= 1;

									// And swap it with the current element.
									temporaryValue = $audio.playlist[currentIndex];
									$audio.playlist[currentIndex] = $rootScope.player
										.audio.playlist[randomIndex];
									$audio.playlist[randomIndex] = temporaryValue;
								}

							} else {
								$audio.playlist = angular.copy($audio
									.origPlaylist);
							}

							$audio.currentIndex = 0;
							$audio.playlist[$audio.currentIndex]
								.play = true;
							$audio.start();
						};

						$audio.repeat = function() {
							$audio.controls.repeat = !$audio.controls
								.repeat;
							$audio.player.loop = $audio.controls
								.repeat;
						};

						$audio.start = function() {
							$audio.player = angular.element(document.getElementsByTagName(
								'audio'))[
								0];
							$timeout(function() {
								$audio.player.load();
								$audio.player.play();
								if (!$audio.loop) {
									$audio.player.onended = function() {
										$audio.next();
									};
								} else {
									$audio.player.onended = function() {
										$audio.playlist[$audio.currentIndex]
											.play = false;
										if ($audio.playlist[$audio.currentIndex +
												1]) {
											$audio.currentIndex++;
										} else {
											$audio.currentIndex = 0;
										}
										$audio.playlist[$audio.currentIndex]
											.play = true;
										$audio.start();
									};
								}
							});
						};

						$audio.daemonize = function() {
							if (!$audio.showPlay) {
								petronDaemon.enable('audio', 'audiobox.player');
							}
							$state.go('audiobox.main');
						};
					}
				};
			}
		]);
})();
