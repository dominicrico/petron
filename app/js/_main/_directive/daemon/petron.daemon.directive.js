(function() {
  'use strict';

  angular.module('petron.core')
    .directive('petronDaemon', ['petron.daemon', '$rootScope', '$timeout',

      function(
        petronDaemon, $rootScope, $timeout, $state) {
        return {
          templateUrl: 'js/_main/_directive/daemon/petron.daemon.html',
          restrict: 'E',
          controller: ['$rootScope', '$element', function($rootScope,
            $element) {
            $rootScope.daemonBack = function() {
              $state.go($rootScope.daemon.origin);
            };

            var $media, _media, _playing = false;

            if (!$rootScope.daemon.player) {
              $rootScope.daemon.player = {};
            }

            $timeout(function() {

              $media = $element.find($rootScope.daemon.type);
              _media = $media[0];

              _media.volume = angular.copy(
                $rootScope.settings
                .volume);

              $rootScope.$watch('settings.volume', function() {
                _media.volume = angular.copy(
                  $rootScope.settings
                  .volume);
              });

              $media.on('canplay', function() {
                if (!_playing) {
                  _media.currentTime = $rootScope[$rootScope.daemon
                      .type].player
                    .controls.time;

                  $rootScope.daemon.player[$rootScope.daemon.type] =
                    _media;

                  _media.play();
                  _playing = true;
                }
              });
            });
          }]
        };
      }
    ]);
})();
