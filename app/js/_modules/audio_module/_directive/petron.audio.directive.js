(function() {
  'use strict';

  angular.module('petron.modules.audio')
    .directive('petronAudio', ['petron.fs', 'petron.playlist', '$timeout',
      '$interval', 'petron.daemon', '$state',
      function(
        petronFs, petronPlaylist, $timeout, $interval, petronDaemon, $state
      ) {
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
              $scope.isInit = false;

              var TIMEOUT = 1000;

              $translate('error.file_not_found').then(function(
                translation) {
                $scope.error_file_not_found = translation;
              });

              var _source;
              var _handleSourceError = function() {
                $scope.playlist.tracks[$scope.current].title = $scope.playlist
                  .tracks[
                    $scope.current].artist + ' - ' + $scope.playlist.tracks[
                    $scope.current]
                  .title;
                $scope.playlist.tracks[$scope.current].artist = $scope.error_file_not_found;
                $scope.playlist.tracks[$scope.current].play = false;
                $scope.playlist.tracks[$scope.current].not_found = true;
                $scope.next();
              };

              var _prepare = function() {
                petronDaemon.disable();
                petronDaemon.register('audio', $state.current.name);

                $element.find('audio')[0].volume = angular.copy(
                  $rootScope.settings
                  .volume);

                $rootScope.audio.isPrepared = true;
              };

              $rootScope.$watch('settings.volume', function() {
                $element.find('audio')[0].volume = angular.copy(
                  $rootScope.settings
                  .volume);
              });

              var _initialize = function() {
                if ($scope.isInit === false) {
                  $scope.isInit = true;

                  $timeout(function() {
                    if (!$rootScope.audio.isPrepared) {
                      _prepare();
                    }

                    $scope.$apply(function() {
                      if ($scope.playlist && $scope.playlist.tracks &&
                        $scope.playlist
                        .tracks.length && $scope.playlist.tracks[
                          $scope.current].play
                      ) {
                        $scope.playlist.tracks[$scope.current].play =
                          false;
                      }

                      $scope.current = 0;
                      $scope.playlist = $rootScope.audio.queue;

                      if ($scope.playlist && $scope.playlist.tracks &&
                        $scope.playlist
                        .tracks.length) {
                        $scope.playlist.tracks[$scope.current].play =
                          true;
                        $timeout(function() {
                          $scope._audio.load();
                        }, TIMEOUT);
                      }

                      $timeout(function() {
                        _source = angular.element(angular.element(
                            $scope.$audio)
                          .children()[
                            0]);
                        _source.on('error',
                          _handleSourceError);
                      });
                    });
                  });
                }
              };

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

              var _canPlay = false;
              $scope.$audio.on('canplay', function() {
                if (_canPlay) {
                  return false;
                }
                $scope._audio.pause();
                if ($rootScope.daemon.player && $rootScope.daemon.player
                  .audio !== undefined) {
                  $scope._audio.currentTime =
                    $rootScope.daemon.player.audio.currentTime;
                  $rootScope.daemon.player.audio = undefined;
                }
                $timeout(function() {
                  $scope._audio.play();
                }, TIMEOUT);
                _canPlay = true;
              });

              $scope.$audio.on('loadstart', function() {
                $scope._audio.pause();
                _source.off('error', _handleSourceError);
                _source = angular.element(angular.element($scope.$audio)
                  .children()[0]);
                _source.on('error', _handleSourceError);
              });

              $scope.$audio.on('ended', function() {
                _canPlay = false;
                if ($scope.controls.repeat) {
                  $timeout(function() {
                    $scope._audio.load();
                  }, TIMEOUT);
                } else {
                  $scope.next();
                }
              });

              $scope.seek = function() {
                $scope._audio.currentTime = $scope.controls.time;
              };

              $rootScope.playTrack = function(track) {
                _canPlay = false;
                $scope._audio.pause();
                if ($scope.playlist && $scope.playlist.tracks && $scope.playlist.tracks[$scope.current]) {
                  $scope.playlist.tracks[$scope.current].play = false;
                }
                $scope.current = track;
                $scope.playlist.tracks[$scope.current].play = true;
                $timeout(function() {
                  $scope._audio.load();
                }, TIMEOUT);
              };

              $scope.play = function(force) {
                if (!$scope.controls.play || force) {
                  $scope.controls.play = true;
                  $timeout(function() {
                    $scope._audio.play();
                  }, 50);

                } else {
                  $scope.controls.play = false;
                  $timeout(function() {
                    $scope._audio.pause();
                  }, 35);
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
                $scope._audio.pause();
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

                $timeout(function() {
                  $scope._audio.load();
                }, TIMEOUT);
              };

              $scope.next = function() {
                _canPlay = false;
                $scope._audio.pause();
                if ($scope.playlist.tracks[$scope.current + 1]) {
                  $scope._audio.currentTime = 0;
                  $scope.playlist.tracks[$scope.current].play = false;
                  $scope.current = $scope.current + 1;
                  $scope.playlist.tracks[$scope.current].play = true;
                } else if ($scope.controls.loop && !$scope.playlist.tracks[
                    $scope
                    .current +
                    1]) {
                  $scope._audio.currentTime = 0;
                  $scope.playlist.tracks[$scope.current].play = false;
                  $scope.current = 0;
                  $scope.playlist.tracks[$scope.current].play = true;
                } else {
                  return false;
                }
                $timeout(function() {
                  $scope._audio.load();
                }, TIMEOUT);
              };

              $scope.previous = function() {
                _canPlay = false;
                $scope._audio.pause();
                if ($scope.playlist.tracks[$scope.current - 1]) {
                  $scope._audio.currentTime = 0;
                  $scope.playlist.tracks[$scope.current].play = false;
                  $scope.current = $scope.current - 1;
                  $scope.playlist.tracks[$scope.current].play = true;
                } else if ($scope.controls.loop && !$scope.playlist.tracks[
                    $scope
                    .current -
                    1]) {
                  $scope._audio.currentTime = 0;
                  $scope.playlist.tracks[$scope.current].play = false;
                  $scope.current = 0;
                  $scope.playlist.tracks[$scope.current].play = true;
                } else {
                  return false;
                }

                $timeout(function() {
                  $scope._audio.load();
                }, TIMEOUT);
              };

              $scope.daemonize = function() {
                _canPlay = false;
                $rootScope.audio.player = $scope;
                if (!$rootScope.audio.player.playlist) {
                  $rootScope.audio.player.playlist = $rootScope.audio.player
                    .queue;
                }
                if ($scope.controls.play) {
                  petronDaemon.enable('audio', 'petron.audiobox');
                }
              };

              $rootScope.$on('$stateChangeStart', function(event, toState,
                toParams, fromState) {
                if (fromState.name === 'petron.audiobox' && toState.name !==
                  'petron.audiobox') {
                  $scope.daemonize();
                }
              });
            }
          ]
        };
      }
    ]);
})();
