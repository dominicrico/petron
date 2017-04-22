(function() {
  'use strict';

  angular.module('petron.modules.video')
    .directive('petronVideo', ['petron.fs', 'petron.playlist', '$timeout',
      '$interval', 'petron.daemon', '$state',
      function(
        petronFs, petronPlaylist, $timeout, $interval, petronDaemon, $state
      ) {
        return {
          templateUrl: 'js/_modules/video_module/_template/_directive.html',
          restrict: 'EA',
          controller: ['$scope', '$rootScope', '$element', function($scope,
            $rootScope, $element) {
            $scope._video = $element.find('video')[0];
            $scope.$video = $element.find('video');
            console.log('#####VIDEO PLAYER#####')
            var _prepare = function() {
              petronDaemon.disable();
              petronDaemon.register('video', $state.current.name);

              $rootScope.video.player = $scope;

              $scope._video.volume = $rootScope.settings.volume;
              console.log($rootScope.settings.volume);
              $rootScope.$watch('settings.volume', function(vol) {
                console.log(vol);
                $scope._video.volume = vol;
              });

              $rootScope.video.isPrepared = true;
            };

            var _initialize = function() {
              $timeout(function() {
                $scope.$apply(function() {
                  if ($scope.playlist && $scope.playlist.tracks &&
                    $scope.playlist
                    .tracks[
                      $scope.current].play) {
                    $scope.playlist.tracks[$scope.current].play =
                      false;
                  }

                  $scope.current = 0;
                  $scope.playlist = $rootScope.video.queue;

                  if ($scope.playlist && $scope.playlist.tracks &&
                    $scope.playlist
                    .tracks.length) {
                    $scope.playlist.tracks[$scope.current].play =
                      true;
                    $scope._video.load();
                  } else {
                    return $state.go('petron.videobox.main');
                  }
                });
              });
            };

            var checkInit = true,
              timeout = 6000;
            $scope.showControls = true;

            var checkControlsStatus = $interval(function() {
              if ($scope.showControls && !checkInit) {
                $interval.cancel(checkControlsStatus);
                $scope.showControls = false;
              }
              checkInit = false;
            }, timeout);

            $scope.$watch('showControls', function() {
              if ($scope.showControls) {
                checkControlsStatus = $interval(function() {
                  if ($scope.showControls && !checkInit) {
                    $interval.cancel(checkControlsStatus);
                    $scope.showControls = false;
                  }
                  checkInit = false;
                }, timeout);
              }
            });

            $scope.resetInterval = function() {
              $interval.cancel(checkControlsStatus);
              checkInit = true;
              checkControlsStatus = $interval(function() {
                if ($scope.showControls) {
                  $interval.cancel(checkControlsStatus);
                  $scope.showControls = false;
                }
                checkInit = false;
              }, timeout);
            };

            if (!$rootScope.video.isPrepared) {
              $timeout(function() {
                _prepare();
              });
            }

            $rootScope.$on('video.queue:changed', function() {
              _initialize();
            });

            $rootScope.$on('video.queue:update', function() {
              $timeout(function() {
                $scope.$apply(function() {
                  $scope.playlist = $rootScope.video.queue;
                });
              });
            });

            _initialize();

            $scope.controls = {
              time: 0,
              duration: 0,
              play: true,
              shuffle: false,
              repeat: false,
              loop: false
            };

            $scope.$video.on('timeupdate', function() {
              $scope.controls.time = $scope._video.currentTime;
            });

            $scope.$video.on('durationchange', function() {
              $scope.controls.duration = $scope._video.duration;
            });

            $scope.$video.on('canplay', function() {
              if ($rootScope.daemon.player && $rootScope.daemon.player
                .video !==
                undefined) {
                $scope._video.currentTime =
                  $rootScope.daemon.player.video.currentTime + 0.2;
                $rootScope.daemon.player.video = undefined;
              }
              $scope.play(true);
            });

            $scope.$video.on('ended', function() {
              if ($scope.controls.repeat) {
                $scope._video.load();
              } else {
                $scope.next();
              }
            });

            $scope.seek = function() {
              $scope._video.currentTime = $scope.controls.time;
            };

            $rootScope.playTrack = function(track) {
              if ($scope.playlist.tracks[$scope.current]) {
                $scope.playlist.tracks[$scope.current].play = false;
              }
              $scope.current = track;
              $scope.playlist.tracks[$scope.current].play = true;
              $scope._video.load();
            };

            $scope.play = function(force) {
              if (!$scope.controls.play || force) {
                $scope.controls.play = true;
                $scope._video.play();
              } else {
                $scope.controls.play = false;
                $scope._video.pause();
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
                _playlist = angular.copy($rootScope.video.queue);
                $scope.playlist.tracks.sort(function() {
                  return 0.5 - Math.random();
                });
              } else {
                $scope.playlist = $rootScope.video.queue = _playlist;
              }

              $scope.current = 0;
              $scope.playlist.tracks[$scope.current].play = true;

              $scope._video.load();
            };

            $scope.next = function() {
              if ($scope.playlist.tracks[$scope.current + 1]) {
                $scope.playlist.tracks[$scope.current].play = false;
                $scope.current = $scope.current + 1;
                $scope.playlist.tracks[$scope.current].play = true;
              } else if ($scope.controls.loop && !$scope.playlist.tracks[
                  $scope.current +
                  1]) {
                $scope.playlist.tracks[$scope.current].play = false;
                $scope.current = 0;
                $scope.playlist.tracks[$scope.current].play = true;
              } else {
                return false;
              }

              $scope._video.load();
            };

            $scope.previous = function() {
              if ($scope.playlist.tracks[$scope.current - 1]) {
                $scope.playlist.tracks[$scope.current].play = false;
                $scope.current = $scope.current - 1;
                $scope.playlist.tracks[$scope.current].play = true;
              } else if ($scope.controls.loop && !$scope.playlist.tracks[
                  $scope.current -
                  1]) {
                $scope.playlist.tracks[$scope.current].play = false;
                $scope.current = 0;
                $scope.playlist.tracks[$scope.current].play = true;
              } else {
                return false;
              }

              $scope._video.load();
            };

            $scope.daemonize = function() {
              if (!$rootScope.video.player.playlist) {
                $rootScope.video.player.playlist = $rootScope.video.queue;
              }

              if ($scope.controls.play) {
                petronDaemon.enable('video', 'petron.videobox.player');
              }
              $state.go('petron.videobox.main');
            };
          }]
        };
      }
    ]);
})();
