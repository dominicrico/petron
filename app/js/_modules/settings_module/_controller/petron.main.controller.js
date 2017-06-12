(function() {
  'use strict';

  angular.module('petron.modules.settings')
    .controller('controller.settingsbox.main', ['$scope', '$rootScope',
      'petron.storage',
      '$translate', 'tmhDynamicLocale', '$stateParams', '$timeout',
      function($scope, $rootScope, petronStorage, $translate,
        tmhDynamicLocale, $stateParams, $timeout) {
        var firstCycle = true;
        var shell = require('shelljs');
        $rootScope.title = 'health_module';
        $rootScope.rightMenuShow = false;

        $scope.tab = 'general';
        $scope.hasUpdate = false;
        $scope.updateInProgress = false;

        if ($stateParams.tab !== undefined && $stateParams.tab.length) {
          $scope.tab = $stateParams.tab;
        }

        $scope.settings = angular.copy($rootScope.settings);
        $scope.settings.init_volume = $scope.settings.init_volume * 100;

        if ($scope.settings.init_volume === undefined) {
          $scope.settings.init_volume = 30;
        }

        $scope.checkUpdate = function() {
          // shell.exec('$(cd /Petron && ./checkupdate)', function(code,
          shell.exec('$(cd ~/Development/petron && ./checkupdate.sh)',
            function(code) {
              if (code === 1) {
                $scope.hasUpdate = true;
              }
            });
        };

        $scope.checkUpdate();

        $scope.startUpdate = function() {
          $scope.updateInProgress = true;
          shell.exec('cd ~/Development/petron && git pull', function() {
            // shell.exec('$(cd /Petron && git pull)', function() {
            var app = require('electron').remote.app;
            app.relaunch();
            $timeout(
              function() {
                app.exit(0);
              }, 5000);
          });
        };

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

        $scope.info = require('../package.json');
      }
    ]);
})();
