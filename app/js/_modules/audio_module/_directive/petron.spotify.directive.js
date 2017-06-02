(function() {
  'use strict';

  angular.module('petron.modules.audio')
    .directive('petronSpotifyAudio', [function() {
      return {
        templateUrl: 'js/_modules/audio_module/_template/_directive_spotify.html',
        restrict: 'E',
        controller: ['$scope', '$rootScope', '$http',
          function($scope, $rootScope, $http) {
            var shell = require('shelljs');
            var timer, timeInterval, trackId, deviceCheck;
            $scope.track = {
              artist: ''
            };
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
              console.log('timer')
              clearInterval(timeInterval);
              timeInterval = setInterval(function() {
                $scope.$apply(function() {
                  if ($scope.controls.play) {
                    $scope.controls.time += 1;
                  }
                  if ($scope.controls.time >= $scope.controls
                    .duration) {
                    getPlayerState();
                  }
                });
              }, 1000);
            };

            $scope.spotify_music = true;
            var SpotifyWebApi = require('spotify-web-api-node');
            // // Create the api object with the credentials
            var spotifyApi = new SpotifyWebApi({
              clientId: $rootScope.settings.spotify.clientId,
              clientSecret: $rootScope.settings.spotify.clientSecret
            });

            function getPlayerState() {
              spotifyApi.getMyCurrentPlaybackState().then(
                function(data) {
                  if (data.body.context && data.body.context.uri) {
                    trackId = data.body.context.uri;
                  }
                  $scope.controls.play = data.body.is_playing;
                  $scope.controls.repeat = (data.body.repeat_state !==
                    'off' && data.body.repeat_state ===
                    'track') ? true : false;
                  $scope.controls.loop = (data.body.repeat_state !==
                    'off' && data.body.repeat_state ===
                    'context') ? true : false;
                  $scope.controls.shuffle = data.body.shuffle_state;

                  if (data.body.progress_ms && data.body.item.duration_ms) {
                    $scope.controls.time = data.body.progress_ms /
                      1000;
                    $scope.controls.duration = (data.body.item
                      .duration_ms / 1000);
                  }

                  if (data.body.item) {
                    $scope.track.artist = '';
                    $scope.track.album = data.body.item.album
                      .name;
                    $scope.track.title = data.body.item.name;
                    $scope.track.image = data.body.item.album
                      .images[1].url;
                    data.body.item.artists.forEach(function(
                      artist, i) {
                      $scope.track.artist += artist.name;
                      if (artist.length > 1 && i >
                        artist.length) {
                        $scope.track.artist +=
                          ', ';
                      }
                    });
                  }

                  if (data.body.is_playling) {
                    timer();
                  }
                });
            }

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
                          getPlayerState();
                        });
                      }
                    }
                  });
                });
            };

            if ($rootScope.settings.spotify && !$rootScope.settings.spotify
              .access_token && !$rootScope.settings.spotify.refresh_token
            ) {
              spotiAuth.getAccessToken(options)
                .then(function(token) {
                  $rootScope.settings.spotify.access_token = token.access_token;
                  $rootScope.settings.spotify.refresh_token = token
                    .refresh_token;
                  refreshToken();
                });
            } else {
              refreshToken();
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
                      getPlayerState();
                    }
                  }, function(err) {
                    console.log('Something went wrong!', err);
                  });

                _inititalized = true;
              }
            });

            shell.exec('ps -ax | grep librespot', function(code, stdout,
              stderr) {
              if (stdout.indexOf(
                  './librespot/librespot --name Petron --cache /tmp'
                ) !== -1) {
                return;
              } else {
                $rootScope.librespot = shell.exec(
                  './librespot/librespot --name Petron --cache /tmp', {
                    async: true
                  });
                $rootScope.librespot.stdout.on('data', function(
                  data) {
                  console.log(data);
                });
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
                getPlayerState();
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
                getPlayerState();
              });
            };

            $scope.toggleRepeat = function() {
              var state;
              if (!$scope.controls.repeat && $scope.controls.loop) {
                $scope.controls.repeat = true;
                $scope.controls.loop = false;
                state = 'context';
              } else if (!$scope.controls.repeat && !$scope.controls.loop) {
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
                getPlayerState();
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
                getPlayerState();
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
                  getPlayerState();
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
          }
        ]
      };
    }]);
})();
