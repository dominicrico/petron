(function() {
  'use strict';

  angular.module('petron.modules.health')
    .controller('controller.healthbox.main', ['$scope', '$rootScope',
      function($scope, $rootScope) {
        $rootScope.title = 'health_module';
        $rootScope.rightMenuShow = false;
        $scope.dots = '.';
        var dotInterval = setInterval(function() {
          $scope.$apply(function() {
            if ($scope.dots.length < 3) {
              $scope.dots += '.';
            } else {
              $scope.dots = '.';
            }
          });
        }, 500);

        $scope.speed = 0;
        $scope.tacho = 0;

        $scope.battery1 = 0;
        $scope.battery2 = 0;

        $scope.lights = false;
        $scope.consumption = 0;

        var OBD = require('obd-parser');
        $scope.connector = require('obd-parser-bluetooth-connection');

        var connect = $scope.connector({
          name: 'obd'
        });

        var rpmPoller = new OBD.ECUPoller({
          pid: new OBD.PIDS.Rpm(),
          interval: 1400
        });

        var speedPoller = new OBD.ECUPoller({
          pid: new OBD.PIDS.VehicleSpeed(),
          interval: 1000
        });

        // var supportPids = ["00", "20", "40", "60", "80", "A0", "C0"];
        // var supportPids = ["00", "20", "40"];
        //
        // supportPids.forEach(function(pid) {
        // 	var poller = new OBD.ECUPoller({
        // 		pid: new OBD.PIDS.SupportedPids(pid)
        // 	});
        //
        // 	poller.poll().then(function(out) {
        // 		console.info('For Range ' + pid + ' supported PIDS are', out.pretty);
        // 	});
        // });

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

        $scope.connectToOBD = function() {
          $scope.isConnected = false;
          $scope.hasError = false;

          OBD.init(connect)
            .then(function() {

              clearInterval(dotInterval);

              $scope.$apply(function() {
                $scope.isConnected = true;
              });


              rpmPoller.startPolling();
              speedPoller.startPolling();

            }, function() {
              $scope.hasError = true;
            });
        };

        $scope.connectToOBD();

      }
    ]);
})();
