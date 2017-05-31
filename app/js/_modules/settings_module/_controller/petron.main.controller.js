(function() {
  'use strict';

  angular.module('petron.modules.settings')
    .controller('controller.settingsbox.main', ['$scope', '$rootScope',
      'petron.storage',
      '$translate', 'tmhDynamicLocale',
      function($scope, $rootScope, petronStorage, $translate,
        tmhDynamicLocale) {
        var firstCycle = true;
        $rootScope.title = 'health_module';
        $rootScope.rightMenuShow = false;

        $scope.tab = 'general';
        var volume = angular.copy($rootScope.settings.volume) *
          100;

        $scope.settings = angular.copy($rootScope.settings);
        $scope.settings.volume = volume;

        $rootScope.$watch('settings.volume', function(vol) {
          $rootScope.settings.volume = vol;
          $scope.settings.volume = angular.copy(vol) *
            100;
        });

        $scope.$watch('settings', function() {
          if (!firstCycle) {
            $scope.settings.volume = $scope.settings.volume / 100;
            $translate.use($scope.settings.locale);
            tmhDynamicLocale.set($scope.settings.locale);
            petronStorage.set('petron.settings', $scope.settings);
            $rootScope.settings = angular.copy($scope.settings);
            console.log($rootScope.settings, $scope.settings);
            $scope.settings.volume = $scope.settings.volume * 100;
          }

          firstCycle = false;
        }, true);
      }
    ]);
})();
