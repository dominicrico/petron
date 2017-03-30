(function() {
  'use strict';

  angular.module('petron.core')
    .directive('petronVolumeIndicator', ['$rootScope',
      function($rootScope) {
        return {
          templateUrl: 'js/_main/_directive/volume/petron.volume-indicator.html',
          restrict: 'E',
          link: function(scope) {

            scope.volume = 50;

            if (!$rootScope.settings.volume) {
              $rootScope.settings.volume = 0.5;
            }

            var wHeight = $('.c--volume-indicator').outerHeight();
            $rootScope.showVolumeIndicator =
              false;

            var delta;
            var startVolume = scope.volume = angular.copy($rootScope.settings
                .volume) *
              100;
            var volume;

            $rootScope.getVolume = function($event) {
              delta = $event.deltaY;
              $rootScope.showVolumeIndicator = true;
            };

            $rootScope.setVolume = function() {
              delta = 0;
              startVolume = angular.copy(scope.volume);
              $rootScope.showVolumeIndicator = false;
            };

            // TODO Check why the indicator is jumping
            $rootScope.volumeIndicator = function($event) {
              if ($event.direction === 8 || $event.direction === 16) {
                $event.preventDefault();
                $event.deltaY = $event.deltaY * -1;
                $event.deltaY = $event.deltaY + delta;
                volume = ((($event.deltaY / wHeight)) * 100) +
                  startVolume;

                if ($event.direction !== 16) {

                  if (volume > 100) {
                    volume = 100;
                  } else if (volume < 0) {
                    volume = 0;
                  }

                } else {
                  if (volume > 100) {
                    volume = 100;
                  } else if (volume < 0) {
                    volume = 0;
                  }
                }

                $rootScope.settings.volume = (volume / 100).toFixed(
                  2);
                scope.volume = Math.round(volume);
              }
            };

          }
        };
      }
    ]);
})();
