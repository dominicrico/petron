(function() {
	'use strict';

	angular.module('petron.core')
		.directive('petronVideo', ['petron.fs', 'petron.playlist', '$timeout',
			'$interval', 'petron.daemon', '$state', '$rootScope',
			function(
				petronFs, petronPlaylist, $timeout, $interval, petronDaemon, $state,
				$rootScope) {
				return {
					templateUrl: '_main/_directive/videoplayer/petron.videoplayer.html',
					restrict: 'E',
					controller: ['$scope', '$rootScope', function($scope, $rootScope) {
						var $video = $rootScope.player.video;

						petronPlaylist.loadPlaylists('video').then(function() {
							petronPlaylist.getQueue().then(function(pl) {

								$video.playlist = pl.tracks;
								$video.playlist[$video.currentIndex]
									.play = true;


								angular.element(document).ready(function() {
									var checkForPlayer = $interval(function() {
										var player = document.getElementsByTagName('video')[0];
										if (player) {
											$timeout(function() {
												$video.player = document.getElementsByTagName(
													'video')[0];

												$video.bindEvents();
											});

											$interval.cancel(checkForPlayer);
										}
									});
								});
							});
						});

					}],
					link: function(scope, elem, attrs) {
						var $video = $rootScope.player.video;

						if ($rootScope.daemon.active) {
							petronDaemon.hide();
							if ($rootScope.daemon.type !== 'video') {
								petronDaemon.disable();
							}
						}

						if (!$video.initialized) {
							$video.origPlaylist = undefined;
							$video.currentIndex = 0;
							$video.controls = {
								loop: false,
								repeat: false,
								shuffle: false,
								volume: 1,
								duration: 0,
								currentTime: 0,
							};
						}

						$video.bindEvents = function() {

							$video.player = document.getElementsByTagName(
								'video')[0];

							if (!$video.initialized) {
								$video.controls.volume = $video.player
									.volume;
								$video.controls.duration = $video
									.player.duration;
								$video.controls.currentTime = $video
									.player.currentTime;
							} else {
								$video.player.volume = $video.controls
									.volume;
								$video.player.currentTime = $video
									.controls.currentTime;
							}

							$video.player.onended = function() {
								$video.player.videoNext();
							};

							$video.player.ontimeupdate = function() {
								$rootScope.$apply(function() {
									$video.controls.duration = $video
										.player.duration;
									$video.controls.currentTime = $rootScope.player
										.video.player.currentTime;
								});
							};

							$video.initialized = true;
						};

						$video.setTime = function() {
							$video.player.currentTime = $video
								.controls.currentTime;
							$video.player.play();
						};

						$video.setVolume = function() {
							$video.player.volume = $video.controls
								.volume;
						};

						$video.playFile = function(index) {
							$video.playlist[$video.currentIndex]
								.play = false;
							$video.currentIndex = index;
							$video.playlist[$video.currentIndex]
								.play = true;
							$video.play();
						};

						$video.videoPlay = function() {
							if ($video.player.paused) {
								$video.player.play();
								$video.showPlay = false;
							} else {
								$video.player.pause();
								$video.showPlay = true;
							}
						};

						$video.videoNext = function() {
							if ($video.playlist[$video.currentIndex +
									1]) {
								$video.playlist[$video.currentIndex]
									.play = false;
								$video.currentIndex++;
								$video.playlist[$video.currentIndex]
									.play = true;
								$video.play();
							} else if ($video.controls.loop && !$rootScope.player
								.video.playlist[$video.currentIndex +
									1]) {
								$video.playlist[$video.currentIndex]
									.play = false;
								$video.currentIndex = 0;
								$video.playlist[$video.currentIndex]
									.play = true;
								$video.play();
							} else {
								return false;
							}
						};

						$video.videoPrev = function() {
							if ($video.playlist[$video.currentIndex -
									1]) {
								$video.playlist[$video.currentIndex]
									.play = false;
								$video.currentIndex--;
								$video.playlist[$video.currentIndex]
									.play = true;
								$video.play();
							} else {
								return false;
							}
						};

						$video.videoLoop = function() {
							$video.controls.loop = !$video.controls
								.loop;
							if ($video.controls.loop) {
								$video.player.onended = function() {
									if ($video.playlist[$video.currentIndex +
											1]) {
										$video.playlist[$video.currentIndex]
											.play = false;
										$video.currentIndex++;
										$video.playlist[$video.currentIndex]
											.play = true;
										$video.play();
									} else {
										$video.playlist[$video.currentIndex]
											.play = false;
										$video.currentIndex = 0;
										$video.playlist[$video.currentIndex]
											.play = true;
										$video.play();
									}
								};
							} else {
								$video.player.onended = function() {
									$video.videoNext();
								};
							}
						};

						$video.videoShuffle = function() {
							$video.controls.shuffle = !$video.controls
								.shuffle;
							$video.playlist[$video.currentIndex]
								.play = false;

							if ($video.controls.shuffle) {
								$video.origPlaylist = angular.copy($rootScope.player
									.video.playlist);

								var currentIndex = $video.playlist.length,
									temporaryValue, randomIndex;
								// While there remain elements to shuffle...
								while (0 !== currentIndex) {

									// Pick a remaining element...
									randomIndex = Math.floor(Math.random() * currentIndex);
									currentIndex -= 1;

									// And swap it with the current element.
									temporaryValue = $video.playlist[currentIndex];
									$video.playlist[currentIndex] = $rootScope.player
										.video.playlist[randomIndex];
									$video.playlist[randomIndex] = temporaryValue;
								}

							} else {
								$video.playlist = angular.copy($video
									.origPlaylist);
							}

							$video.currentIndex = 0;
							$video.playlist[$video.currentIndex]
								.play = true;
							$video.play();
						};

						$video.videoRepeat = function() {
							$video.controls.repeat = !$video.controls
								.repeat;
							$video.player.loop = $video.controls
								.repeat;
						};

						$video.play = function() {
							$video.player = angular.element(document.getElementsByTagName(
								'video'))[
								0];
							$timeout(function() {
								$video.player.load();
								$video.player.play();
								if (!$video.loop) {
									$video.player.onended = function() {
										$video.videoNext();
									};
								} else {
									$video.player.onended = function() {
										$video.playlist[$video.currentIndex]
											.play = false;
										if ($video.playlist[$video.currentIndex +
												1]) {
											$video.currentIndex++;
										} else {
											$video.currentIndex = 0;
										}
										$video.playlist[$video.currentIndex]
											.play = true;
										$video.play();
									};
								}
							});
						};

						$video.daemonize = function() {
							if (!$video.showPlay) {
								petronDaemon.enable('video', 'videobox.player');
							}
							$state.go('videobox.main');
						};
					}
				};
			}
		]);
})();
