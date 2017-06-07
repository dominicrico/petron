(function() {
  'use strict';

  angular.module('petron.modules.health')
    .controller('controller.healthbox.main', ['$scope', '$rootScope',
      function($scope, $rootScope) {
        $rootScope.title = 'health_module';
        $rootScope.rightMenuShow = false;
        $scope.dots = '.\u00A0\u00A0';
        var dotCount = 1;
        var dotInterval = setInterval(function() {
          $scope.$apply(function() {

            if (dotCount === 1) {
              $scope.dots = '..\u00A0';
            } else if (dotCount === 2) {
              $scope.dots = '...';
            } else {
              $scope.dots = '.\u00A0\u00A0';
              dotCount = 0;
            }

            dotCount = dotCount + 1;
          });
        }, 500);

        $scope.speed = 0;
        $scope.tacho = 0;

        $scope.battery1 = 0;
        $scope.battery2 = 0;

        $scope.errors = 0;
        $scope.temp = 0;

        var OBD = require('obd-parser');

        var rpmPoller = new OBD.ECUPoller({
          pid: new OBD.PIDS.Rpm(),
          interval: 500
        });

        var speedPoller = new OBD.ECUPoller({
          pid: new OBD.PIDS.VehicleSpeed(),
          interval: 600
        });

        var tempPoller = new OBD.ECUPoller({
          pid: new OBD.PIDS.CoolantTemp(),
          interval: 1500
        });

        rpmPoller.on('data', function(output) {
          if (output.value !== null) {
            $scope.$apply(function() {
              $scope.tacho = output.value.toFixed();
            });
          }
        }, function(err) {
          console.error('RPM failed to poll the ECU', err);
        });

        speedPoller.on('data', function(output) {
            if (output.value !== null) {
              $scope.$apply(function() {
                $scope.speed = output.value;
              });
            }
          },
          function(err) {
            console.error('SPEED failed to poll the ECU', err);
          });

        tempPoller.on('data', function(output) {
            if (output.value !== null) {
              $scope.$apply(function() {
                $scope.temp = output.value;
              });
            }
          },
          function(err) {
            console.error('SPEED failed to poll the ECU', err);
          });

        function startPolling() {
          rpmPoller.startPolling();
          speedPoller.startPolling();
          tempPoller.startPolling();
        }

        function stopPolling() {
          rpmPoller.stopPolling();
          speedPoller.stopPolling();
          tempPoller.stopPolling();
        }

        $scope.reconnect = function() {
          $scope.hasError = false;
          $rootScope.OBDisConnected = false;
          $rootScope.OBDhasError = false;

          var getConnector = require('obd-parser-bluetooth-connection');
          var connect = getConnector({
            name: 'OBDII',
            address: $rootScope.settings.OBD.address,
            channel: $rootScope.settings.OBD.channel
          });

          OBD.init(connect)
            .then(function() {
              $rootScope.$apply(function() {
                $rootScope.OBDisConnected = true;
              });
            }, function(err) {
              $rootScope.$apply(function() {
                $rootScope.OBDhasError = true;
              });
              console.log('OBD ERROR', err);
            });
        };
        $scope.isConnected = true;
        $rootScope.$watch('OBDisConnected', function(conn) {
          if (conn) {
            $scope.isConnected = true;
            clearInterval(dotInterval);
            startPolling();
          }
        });

        $rootScope.$watch('OBDhasError', function(err) {
          if (err) {
            $scope.hasError = true;
          }
        });

        $rootScope.$on('routeStateChangeStart', function() {
          stopPolling();
        });
      }
    ]);
})();
