(function() {
  'use strict';

  angular.module('petron.modules.audio')
    .directive('petronSpotifyAudio', [function() {
      return {
        templateUrl: 'js/_modules/audio_module/_template/_directive_spotify.html',
        restrict: 'E',
        controller: ['$scope', '$rootScope', '$http', '$interval',
          function($scope, $rootScope, $http, $interval) {
            var timer, timeInterval, trackId, deviceCheck;
            $scope.track = {
              artist: ''
            };
            $scope.error_online = !angular.copy($rootScope.online);
            $scope.deviceFound = false;
            $scope.current = 0;
            $scope.controls = {
              time: 0,
              duration: 0,
              play: true,
              shuffle: false,
              repeat: false,
              loop: false
            };

            timer = function() {
              clearInterval(timeInterval);
              timeInterval = setInterval(function() {
                $scope.$apply(function() {
                  if ($scope.controls.play) {
                    $scope.controls.time += 1;
                  }
                  if ($scope.controls.time >= $scope.controls
                    .duration) {
                    checkForUpdate();
                  }
                });
              }, 1000);
            };

            $scope.spotify_music = true;


            var electronOauth2 = require('electron-oauth2');
            var config = {
              clientId: $rootScope.settings.spotify.clientId,
              clientSecret: $rootScope.settings.spotify.clientSecret,
              authorizationUrl: 'https://accounts.spotify.com/authorize',
              tokenUrl: 'https://accounts.spotify.com/api/token',
              redirectUri: 'https://petron.local/callback/',
            };

            var options = {
              scope: 'user-read-birthdate user-read-email streaming user-read-currently-playing user-modify-playback-state user-read-playback-state playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-read user-library-modify user-top-read user-read-private playlist-read-collaborative'
            };

            var spotiAuth = electronOauth2(config);

            var refreshToken = function() {
              function getToken() {
                spotiAuth.refreshToken($rootScope.settings
                    .spotify.refresh_token)
                  .then(function(token) {
                    $rootScope.settings.spotify.access_token =
                      token.access_token;
                    $scope.$emit('token');
                  });
              }
              getToken();

              setInterval(function() {
                getToken();
              }, 3600 * 1000);
            };

            var checkForDevice = function() {
              spotifyApi.getMyDevices().then(
                function(data) {
                  data.body.devices.forEach(function(
                    device) {
                    if (device.name === 'Petron') {
                      $rootScope.settings.spotify.deviceId =
                        device.id;
                      if (!$rootScope.spotifyTransfered) {
                        spotifyApi.transferMyPlayback({
                          device_ids: [$rootScope
                            .settings.spotify
                            .deviceId
                          ],
                          play: true
                        }).then(function() {
                          $rootScope.spotifyTransfered =
                            true;
                          $scope.deviceFound = true;
                          clearInterval(deviceCheck);
                          $interval(function() {
                            checkForUpdate();
                          }, 2000);
                        });
                      }
                    }
                  });
                });
            };

            function init() {
              if (!_inititalized) {
                if ($rootScope.settings.spotify && !$rootScope.settings
                  .spotify
                  .access_token && !$rootScope.settings.spotify.refresh_token
                ) {
                  spotiAuth.getAccessToken(options)
                    .then(function(token) {
                      $rootScope.settings.spotify.access_token =
                        token.access_token;
                      $rootScope.settings.spotify.refresh_token =
                        token
                        .refresh_token;
                      refreshToken();
                    });
                } else {
                  refreshToken();
                }
              }
            }

            if ($rootScope.online) {
              init();
            } else {
              $rootScope.$watch('online', function() {
                if (!$rootScope.online) {
                  $scope.error_online = true;
                } else {
                  init();
                  $scope.error_online = false;
                }
              });
            }

            var _inititalized = false;
            $scope.$on('token', function() {
              if (!_inititalized) {
                spotifyApi.setAccessToken($rootScope.settings.spotify
                  .access_token);

                spotifyApi.getMe()
                  .then(function(data) {
                    console.log(
                      'Some information about the authenticated user',
                      data.body);
                    if (!$rootScope.spotifyTransfered) {
                      deviceCheck = setInterval(function() {
                        checkForDevice();
                      }, 5000);
                    } else {
                      checkForUpdate();
                    }
                  }, function(err) {
                    console.log('Something went wrong!', err);
                  });

                _inititalized = true;
              }
            });
            var _newTrack = true;

            function checkForUpdate() {
              $http.get('http://' + $rootScope.settings.spotify.url +
                ':4000/api/info/metadata').then(
                function(data) {
                  if (data && data.data) {
                    if ((data.data.artist_name !== $scope.track.artist ||
                        data.data.album_name !== $scope.track.album ||
                        data.data.track_name !== $scope.track.title) ||
                      _newTrack) {
                      _newTrack = true;
                      $scope.track.artist = data.data.artist_name;
                      $scope.track.album = data.data.album_name;
                      $scope.track.title = data.data.track_name;
                      $scope.track.image =
                        'http://' + $rootScope.settings.spotify.url +
                        ':4000/api/info/image_url/' +
                        data.data.cover_uri;
                      trackId = data.data.context_uri;
                      $scope.controls.duration = data.data.duration /
                        1000;
                      if (_inititalized && _newTrack) {
                        _newTrack = false;
                        spotifyApi.getMyCurrentPlaybackState().then(
                          function(data) {
                            if (data.body.progress_ms && data.body.item
                              .duration_ms) {
                              $interval.cancel(timer);
                              $scope.controls.time = (data.body.progress_ms /
                                1000);
                              $scope.controls.duration = (data.body
                                .item
                                .duration_ms / 1000);
                              timer = $interval(function() {
                                if ($scope.controls.play) {
                                  $scope.controls.time += 1;
                                }
                              }, 1000);
                            }
                          });
                      }

                      if (!_inititalized) {
                        //playback
                        $http.put('http://' + $rootScope.settings.spotify
                          .url +
                          ':4000/api/playback/volume', {
                            value: Math.round(50 * 655.35)
                          });
                      }
                    }
                  }
                });
            }

            checkForUpdate();

            $scope.seek = function() {
              $http.put(
                'https://api.spotify.com/v1/me/player/seek?position_ms=' +
                $scope.controls.time * 1000, {}, {
                  headers: {
                    Authorization: 'Bearer ' + $rootScope.settings
                      .spotify.access_token
                  }
                });
            };

            $scope.next = function() {
              $http.post(
                'https://api.spotify.com/v1/me/player/next', {}, {
                  headers: {
                    Authorization: 'Bearer ' + $rootScope.settings
                      .spotify.access_token
                  }
                }).then(function() {
                checkForUpdate();
              });
            };

            $scope.prev = function() {
              $http.post(
                'https://api.spotify.com/v1/me/player/previous', {}, {
                  headers: {
                    Authorization: 'Bearer ' + $rootScope.settings
                      .spotify.access_token
                  }
                }).then(function() {
                checkForUpdate();
              });
            };

            $scope.toggleRepeat = function() {
              var state;
              if (!$scope.controls.repeat && $scope.controls.loop) {
                $scope.controls.repeat = true;
                $scope.controls.loop = false;
                state = 'context';
              } else if (!$scope.controls.repeat && !$scope.controls
                .loop) {
                $scope.controls.repeat = false;
                $scope.controls.loop = true;
                state = 'track';
              } else {
                $scope.controls.repeat = false;
                $scope.controls.loop = false;
                state = 'off';
              }

              $http.put(
                'https://api.spotify.com/v1/me/player/repeat?state=' +
                state, {}, {
                  headers: {
                    Authorization: 'Bearer ' + $rootScope.settings
                      .spotify.access_token
                  }
                }).then(function() {
                checkForUpdate();
              });
            };

            $scope.shuffle = function() {

              $scope.controls.shuffle = !$scope.controls.shuffle;

              $http.put(
                'https://api.spotify.com/v1/me/player/shuffle?state=' +
                $scope.controls.shuffle, {}, {
                  headers: {
                    Authorization: 'Bearer ' + $rootScope.settings
                      .spotify.access_token
                  }
                }).then(function() {
                checkForUpdate();
              });
            };

            $scope.play = function() {
              if (!$scope.controls.play) {
                $http.put(
                  'https://api.spotify.com/v1/me/player/play', {
                    context_uri: trackId
                  }, {
                    headers: {
                      Authorization: 'Bearer ' + $rootScope.settings
                        .spotify.access_token
                    }
                  }).then(function() {
                  checkForUpdate();
                });
              } else {
                $http.put(
                  'https://api.spotify.com/v1/me/player/pause', {}, {
                    headers: {
                      Authorization: 'Bearer ' + $rootScope.settings
                        .spotify.access_token
                    }
                  }).then(function() {
                  $scope.controls.play = !$scope.controls.play;
                });

              }
            };

            $rootScope.$on('stateChangeStart', function() {
              if (!_inititalized) {
                //playback
                $http.put('http://' + $rootScope.settings.spotify
                  .url +
                  ':4000/api/playback/volume', {
                    value: Math.round(95 * 655.35)
                  });
              }

              if ($scope.controls.play) {
                $scope.play();
              }
            });
          }
        ]
      };
    }]);
})();
