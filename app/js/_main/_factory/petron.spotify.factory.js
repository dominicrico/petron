(function() {
  "use strict";

  angular.module('petron.core')
    .factory('petron.spotify', ['$rootScope', '$http', '$q', '$interval',
      function($rootScope, $http, $q, $interval) {
        var _deviceId, _spotifyApi, _transfered = false;

        return {
          init: function() {
            var deferred = $q.defer();
            var SpotifyWebApi = require('spotify-web-api-node');
            // // Create the api object with the credentials
            _spotifyApi = new SpotifyWebApi({
              clientId: $rootScope.settings.spotify.clientId,
              clientSecret: $rootScope.settings.spotify.clientSecret
            });

            _spotifyApi.setAccessToken($rootScope.settings.spotify
              .access_token);

            _spotifyApi.getMe()
              .then(function() {
                if (_transfered) {
                  deferred.resolve(true);
                } else {
                  deferred.resolve(false);
                }
              }, function(err) {
                deferred.reject(err);
              });

            return deferred.promise;
          },

          getStatus: function() {
            var deferred = $q.defer();
            $http.get('http://' + $rootScope.settings.spotify.url +
              ':4000/api/info/status').then(function(data) {
              if (data && data.data) {
                deferred.resolve(data.data);
              } else {
                deferred.reject(
                  'No status info from Spotify Connect.');
              }
            });

            return deferred.resolve;
          },

          getMetaData: function() {
            var deferred = $q.defer();
            $http.get('http://' + $rootScope.settings.spotify.url +
              ':4000/api/info/metadata').then(function(data) {
              if (data && data.data) {
                deferred.resolve(data.data);
              } else {
                deferred.reject('No meta data from Spotify Connect.');
              }
            });

            return deferred.promise;
          },

          setVolume: function(vol) {
            $http.put('http://' + $rootScope.settings.spotify
              .url + ':4000/api/playback/volume', {
                value: Math.round(vol * 655.35)
              });
          },

          getPlaybackState: function() {
            var deferred = $q.defer();

            _spotifyApi.getMyCurrentPlaybackState().then(
              function(data) {
                if (data && data.body) {
                  deferred.resolve(data.body);
                } else {
                  deferred.reject('No playback state');
                }
              });

            return deferred.promise;
          },

          searchDevice: function(name) {
            var deferred = $q.defer();

            var _deviceCheck = $interval(function() {
              _spotifyApi.getMyDevices().then(
                function(data) {
                  data.body.devices.forEach(function(
                    device) {
                    if (device.name === name) {
                      _deviceId = device.id;
                      if (!_transfered) {
                        _spotifyApi.transferMyPlayback({
                          device_ids: [_deviceId],
                          play: false
                        }).then(function() {
                          _transfered = true;
                          $interval.cancel(_deviceCheck);
                          deferred.resolve(true);
                        }, function(err) {
                          $interval.cancel(_deviceCheck);
                          deferred.reject(err);
                        });
                      }
                    }
                  });
                });
            }, 2000);

            return deferred.promise;
          }
        };

      }
    ]);
})();
