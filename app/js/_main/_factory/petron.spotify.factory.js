(function() {
  "use strict";

  angular.module('petron.core')
    .factory('petron.spotify', ['$rootScope', '$http', function($rootScope,
      $http) {
      var _deviceId, _contextId, _spotifyApi;

      return {
        init: function() {
          var SpotifyWebApi = require('spotify-web-api-node');
          // // Create the api object with the credentials
          _spotifyApi = new SpotifyWebApi({
            clientId: $rootScope.settings.spotify.clientId,
            clientSecret: $rootScope.settings.spotify.clientSecret
          });
        },

        getStatus: function() {

        },

        getMetaData: function() {
          $http.get('http://' + $rootScope.settings.spotify.url +
            ':4000/api/info/metadata').then(
            function(data) {

            });
        }
      };

    }]);
})();
