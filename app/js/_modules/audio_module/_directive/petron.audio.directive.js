(function() {
  'use strict';

  angular.module('petron.modules.audio')
    .directive('petronAudio', ['petron.fs', 'petron.playlist', '$timeout',
      '$q', 'petron.daemon', '$state', 'fs',
      function(
        petronFs, petronPlaylist, $timeout, $q, petronDaemon, $state,
        fs
      ) {
        return {
          templateUrl: 'js/_modules/audio_module/_template/_directive.html',
          restrict: 'E',
          controller: ['$scope', '$rootScope', '$element',
            '$translatePartialLoader', '$translate',
            function(
              $scope,
              $rootScope, $element, $translatePartialLoader, $translate) {
              $scope.isInit = false;

              $scope.context = new AudioContext();
              $scope.gain = $scope.context.createGain();
              $scope.gain.gain.value = 0.5;
              $scope.gain.connect($scope.context.destination);

              $translate('error.file_not_found').then(function(
                translation) {
                $scope.error_file_not_found = translation;
              });

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

              $rootScope.$watch('settings.volume', function(volume) {
                $scope.gain.gain.value = volume;
              }, false);

              var _prepare = function() {
                petronDaemon.disable();
                petronDaemon.register('audio', $state.current.name);

                $scope.gain.gain.value = angular.copy($rootScope.settings
                  .volume);

                $rootScope.audio.isPrepared = true;
              };

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
                      $scope.playlist.tracks.forEach(function(
                        track, i) {
                        if (track.play) {
                          $scope.current = i;
                        }
                      });

                      if ($scope.playlist && $scope.playlist.tracks &&
                        $scope.playlist
                        .tracks.length) {
                        $rootScope.playTrack();
                      }
                    });
                  });
                }
              };

              var _checkAudioFile = function() {
                if (!$scope.playlist.tracks[$scope.current].buffer) {
                  var bufferedSource;
                  try {
                    bufferedSource = fs.readFileSync(decodeURI($scope
                      .playlist
                      .tracks[$scope.current].path), null).buffer;
                  } catch (e) {
                    return _handleSourceError();
                  }

                  return $scope.context.decodeAudioData(bufferedSource);
                } else {
                  var deferred = $q.defer();
                  deferred.resolve($scope.playlist.tracks[$scope.current]
                    .buffer);
                  return deferred.promise;
                }
              };

              var _ended = function() {
                if ($scope.controls.time === parseInt($scope.controls.duration)) {
                  if (!$scope.controls.repeat) {
                    $scope.next();
                  }
                }
              };

              var _wasSeeking = false;
              var _timer;
              var _initSource = function() {
                if (_timer) {
                  $timeout.cancel(_timer);
                }
                if (_wasSeeking !== true) {
                  $scope.controls.time = 0;
                } else {
                  _wasSeeking = false;
                }
                $scope.bufferSource = $scope.context.createBufferSource();
                $scope.bufferSource.connect($scope.gain);
                $scope.bufferSource.onended = function() {
                  _ended();
                };
              };

              $scope._displayTime = function() {
                _timer = $timeout(function() {
                  if ($scope.playlist.tracks[$scope.current].play ===
                    true) {
                    $scope.controls.time += 1;
                  }
                  requestAnimationFrame($scope._displayTime);
                }, 1000);
              };

              $rootScope.$on('audio.queue:changed', _initialize);

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

              $scope.seek = function() {
                _wasSeeking = true;
                $scope.bufferSource.stop(0);
                $rootScope.playTrack();
              };

              $rootScope.playTrack = function(track) {
                if ($scope.playlist.tracks[$scope.current]) {
                  $scope.playlist.tracks[$scope.current].play = false;
                }
                if (track !== undefined) {
                  $scope.current = track;
                }
                $scope.playlist.tracks[$scope.current].play = true;
                _checkAudioFile().then(function(buffer) {
                  $scope.playlist.tracks[$scope.current].buffer =
                    buffer;
                  if ($scope.bufferSource && $scope.bufferSource.buffer) {
                    $scope.bufferSource.stop();
                  }

                  _initSource();

                  $scope.bufferSource.buffer = buffer;
                  $scope.controls.duration = $scope.bufferSource.buffer
                    .duration;
                  $scope._displayTime();
                  var offset = angular.copy($scope.controls.time);
                  $scope.bufferSource.start(0, offset);
                });
              };

              $scope.play = function() {
                if (!$scope.controls.play) {
                  $scope.controls.play = true;
                  $scope.context.resume();
                } else {
                  $scope.controls.play = false;
                  $scope.context.suspend();
                }
              };

              $scope.toggleRepeat = function() {
                if (!$scope.controls.repeat && $scope.controls.loop) {
                  $scope.controls.repeat = $scope.bufferSource.loop =
                    true;
                  $scope.controls.loop = false;
                } else if (!$scope.controls.repeat && !$scope.controls.loop) {
                  $scope.controls.repeat = $scope.bufferSource.loop =
                    false;
                  $scope.controls.loop = true;
                } else {
                  $scope.controls.repeat = $scope.bufferSource.loop =
                    false;
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
                $rootScope.playTrack();
              };

              $scope.next = function() {
                if ($scope.playlist.tracks[$scope.current + 1]) {
                  $scope.playlist.tracks[$scope.current].play = false;
                  $scope.current = $scope.current + 1;
                } else if ($scope.controls.loop && !$scope.playlist.tracks[
                    $scope
                    .current +
                    1]) {
                  $scope.playlist.tracks[$scope.current].play = false;
                  $scope.current = 0;
                } else {
                  return false;
                }

                $rootScope.playTrack();
              };

              $scope.previous = function() {
                if ($scope.playlist.tracks[$scope.current - 1]) {
                  $scope.playlist.tracks[$scope.current].play = false;
                  $scope.current = $scope.current - 1;
                } else if ($scope.controls.loop && !$scope.playlist.tracks[
                    $scope
                    .current -
                    1]) {
                  $scope.playlist.tracks[$scope.current].play = false;
                  $scope.current = 0;
                } else {
                  return false;
                }

                $rootScope.playTrack();
              };

              $scope.daemonize = function() {
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

              _initialize();
            }
          ]
        };
      }
    ]);
})();
