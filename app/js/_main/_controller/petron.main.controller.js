(function() {
  'use strict';

  angular.module('petron.core')
    .controller('controller.main', ['$scope', '$rootScope', '$interval',
      'petron.sun',

      function($scope, $rootScope, $interval, petronSun) {

        petronSun.init();

        $scope.sunrise = petronSun.sunrise();
        $scope.sunset = petronSun.sunset();

        $interval(function() {
          $rootScope.date = new Date();
          if ($rootScope.date > $scope.sunrise && $rootScope.date <
            $scope.sunset) {
            $rootScope.mode = 'day';
          } else {
            $rootScope.mode = 'night';
          }
        }, 1000);

        $scope.splashscreen = false;
      }
    ]);
})();
