(function() {
  'use strict';

  angular.module('petron.modules.audio')
    .directive('petronSpotifyAudio', [function() {
      return {
        templateUrl: 'js/_modules/audio_module/_template/_directive_spotify.html',
        restrict: 'E',
        controller: ['$scope', '$rootScope', '$http', '$interval',
          'petron.spotify', 'petron.daemon',
          function($scope, $rootScope, $http, $interval, petronSpotify,
            petronDaemon) {
            var timer, timeInterval, trackId, _newTrack = true,
              _inititalized = false;
            $scope.track = {
              artist: ''
            };

            petronDaemon.disable();

            $scope.error_online = !angular.copy($rootScope.online);
            $scope.deviceFound = false;

            $scope.dots = '.\u00A0\u00A0';
            var dotCount = 1;
            var dotInterval = $interval(function() {
              if (dotCount === 1) {
                $scope.dots = '..\u00A0';
              } else if (dotCount === 2) {
                $scope.dots = '...';
              } else {
                $scope.dots = '.\u00A0\u00A0';
                dotCount = 0;
              }

              dotCount = dotCount + 1;
            }, 500);

            $scope.controls = {
              time: 0,
              duration: 0,
              play: false,
              shuffle: false,
              repeat: false,
              loop: false
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
              scope: 'user-read-birthdate user-read-email streaming ' /
                'user-read-currently-playing user-modify-playback-state ' /
                'user-read-playback-state playlist-read-private ' /
                'playlist-read-collaborative playlist-modify-public ' /
                'playlist-modify-private user-library-read user-library-modify' /
                'user-top-read user-read-private playlist-read-collaborative'
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

              $interval(function() {
                getToken();
              }, 3600 * 1000);
            };

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
		      if (data.data.duration) {
                        $scope.controls.duration = data.data.duration /
                          1000;
                      }
                      if (_inititalized && _newTrack) {
                        _newTrack = false;
                        petronSpotify.getPlaybackState().then(
                          function(data) {
                            if (data.progress_ms && data.item.duration_ms) {
                              $interval.cancel(timer);
                              $scope.controls.time = (data.progress_ms /
                                1000);
                              timer = $interval(function() {
                                if ($scope.controls.play) {
                                  $scope.controls.time += 1;
                                }
                              }, 1000);
                            }
                          });
                      }
                    }
                  }
                });
            }

            timer = function() {
              $interval.clear(timeInterval);
              timeInterval = $interval(function() {
                if ($scope.controls.play) {
                  $scope.controls.time += 1;
                }
                if ($scope.controls.time >= $scope.controls
                  .duration) {
                  checkForUpdate();
                }
              }, 1000);
            };

            var checkForDevice = function() {
              petronSpotify.searchDevice('Petron').then(function(
                device) {
                if (device) {
                  petronSpotify.setVolume(55);
                  $interval(function() {
                    checkForUpdate();
                  }, 2000);
                  $scope.deviceFound = true;

                  $interval.cancel(dotInterval);
                }
              });
            };

            function init() {
              if (!_inititalized) {
                if ($rootScope.settings.spotify && !$rootScope.settings
                  .spotify.access_token && !$rootScope.settings.spotify
                  .refresh_token
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

            $scope.$on('token', function() {
              if (!_inititalized) {
                petronSpotify.init().then(function(state) {
                  if (state) {
                    checkForUpdate();
                  } else {
                    checkForDevice();
                  }
                });

                _inititalized = true;
              }
            });

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
                $http.get('http://' + $rootScope.settings.spotify
                  .url + ':4000/api/playback/play').then(function() {
                  $scope.controls.play = true;
                  checkForUpdate();
                });
              } else {
                $http.get('http://' + $rootScope.settings.spotify
                  .url + ':4000/api/playback/pause').then(function() {
                  $scope.controls.play = false;
                  checkForUpdate();
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
