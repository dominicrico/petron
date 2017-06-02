(function() {
  'use strict';

  angular.module('petron.modules.audio')
    .directive('petronSpotifyAudio', [function() {
      return {
        templateUrl: 'js/_modules/audio_module/_template/_directive_upnp.html',
        restrict: 'E',
        controller: ['$scope', '$rootScope',
          function($scope, $rootScope) {
            var shell = require('shelljs');

            $scope.upnp_music = true;

            $scope.playlist = {
              tracks: []
            };
            $scope.current = 0;
            $scope.controls = {
              time: 0,
              duration: 0,
              play: true,
              shuffle: false,
              repeat: false,
              loop: false
            };

            $rootScope.librespot = shell.exec(
              './librespot/librespot --name Petron --cache /tmp', {
                async: true
              });
            $rootScope.librespot.stdout.on('data', function(data) {
              console.log(data);
            });
          }
        ]
      };
    }]);
})();
