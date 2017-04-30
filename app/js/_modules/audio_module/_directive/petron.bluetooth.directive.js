(function() {
  'use strict';

  angular.module('petron.modules.audio')
    .directive('petronBluetoothAudio', ['petron.daemon', '$state',
      'petron.phony',
      function(petronDaemon, $state, petronPhony) {
        return {
          templateUrl: 'js/_modules/audio_module/_template/_directive.html',
          restrict: 'E',
          controller: ['$scope', '$rootScope', '$element',
            '$translatePartialLoader', '$translate', '$timeout',
            function($scope, $rootScope, $element,
              $translatePartialLoader,
              $translate, $timeout) {

              $translate('error.file_not_found').then(function(
                translation) {
                $scope.error_file_not_found = translation;
              });

              $rootScope.$watch('settings.volume', function(volume) {
                //$scope.gain.gain.value = volume;
              }, false);

              var _prepare = function() {
                petronDaemon.disable();
                petronDaemon.register('audio', $state.current.name);
                // $scope.gain.gain.value = angular.copy($rootScope.settings
                //   .volume);

                //$rootScope.audio.isPrepared = true;
              };
              var _timer;
              var _initialize = function() {
                if ($scope.isInit !== true) {
                  _prepare();
                  petronPhony.on('propertiesChanged', function(iface) {
                    console.log(iface.args[0])
                    $scope.$apply(function() {
                      if (iface.args[0].hasOwnProperty('Status')) {
                        if (iface.args[0].Status === 'playing') {
                          $scope.controls.play = true;
                          $scope._displayTme();
                        } else if (iface.args[0].Status ===
                          'paused' || iface.args[0].Status ===
                          'idle') {
                          $scope.controls.play = false;
                        } else {
                          $scope.controls.play = false;
                          if (_timer) {
                            $timeout.cancel(_timer);
                          }
                        }
                      }
                    });
                  });
                  petronPhony.findMediaPlayer().then(function(mp) {
                    $scope.player = mp;
                    $scope.player.listen('trackChanged', function(
                      track) {
                      $scope.btAudio = track;
                      $scope.controls.duration = track.Duration;
                      if (_timer) {
                        $timeout.cancel(_timer);
                      }
                      $scope._displayTime();
                    });
                    $scope.player.status().then(function(status) {
                      console.log(status);
                      if (status === 'playing') {
                        $scope.controls.play = true;
                        $scope._displayTime();
                      }
                    });
                    $scope.player.getTrack().then(function(track) {
                      $scope.btAudio = track;
                      $scope.controls.duration = track.Duration;
                    });
                    $scope.isInit = true;
                  }, function(err) {
                    console.log(err);
                  });
                }
              };

              $scope.controls = {
                time: 0,
                duration: 0,
                play: false,
                shuffle: false,
                repeat: false,
                loop: false
              };

              $scope._displayTime = function() {
                _timer = $timeout(function() {
                  if ($scope.controls.play) {
                    $scope.controls.time += 1;
                  }
                  requestAnimationFrame($scope._displayTime);
                }, 1000);
              };

              $scope.play = function() {
                if (!$scope.controls.play) {
                  $scope.controls.play = true;
                  $scope.player.play();
                } else {
                  $scope.controls.play = false;
                  $scope.player.pause();
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

                $rootScope.playTrack(0);
              };

              $scope.next = function() {
                $scope.player.next();
              };

              $scope.previous = function() {
                $scope.player.prev();
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
              $timeout(function() {
                console.log('run init function')
                _initialize();
              });
            }
          ]
        };
      }
    ]);
})();
