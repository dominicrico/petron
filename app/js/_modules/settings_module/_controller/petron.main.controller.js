(function() {
  'use strict';

  angular.module('petron.modules.settings')
    .controller('controller.settingsbox.main', ['$scope', '$rootScope',
      'petron.storage',
      '$translate', 'tmhDynamicLocale', '$stateParams',
      function($scope, $rootScope, petronStorage, $translate,
        tmhDynamicLocale, $stateParams) {
        var firstCycle = true;
        $rootScope.title = 'health_module';
        $rootScope.rightMenuShow = false;

        $scope.tab = 'general';

        if ($stateParams.tab !== undefined && $stateParams.tab.length) {
          $scope.tab = $stateParams.tab;
        }

        $scope.settings = angular.copy($rootScope.settings);
        $scope.settings.init_volume = $scope.settings.init_volume * 100;

        if ($scope.settings.init_volume === undefined) {
          $scope.settings.init_volume = 30;
        }

        $scope.$watch('settings', function() {
          if (!firstCycle) {
            var volume = angular.copy($scope.settings.init_volume) /
              100;
            $translate.use($scope.settings.locale);
            tmhDynamicLocale.set($scope.settings.locale);
            $rootScope.settings.init_volume = volume;
            petronStorage.set('petron.settings', $scope.settings);
            $rootScope.settings = angular.copy($scope.settings);
          }

          firstCycle = false;
        }, true);
      }
    ]);
})();
