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

        $scope.lights = false;
        $scope.temp = 0;

        var timer = setTimeout(function() {
          console.log('restart')
          $rootScope.btOBDReader.stopPolling();
          $rootScope.btOBDReader.removeAllPollers();
          startPollers();
        }, 15000);

        function startPollers() {
          console.log('start')
          $rootScope.btOBDReader.addPoller("vss");
          $rootScope.btOBDReader.addPoller("rpm");
          $rootScope.btOBDReader.addPoller("temp");

          $rootScope.btOBDReader.startPolling(1000);
          clearTimeout(timer);
          timer = setTimeout(function() {
            console.log('restart')
            $rootScope.btOBDReader.stopPolling();
            $rootScope.btOBDReader.removeAllPollers();
            startPollers();
          }, 15000);
        }
        $scope.$watch('time', function(time) {
          clearTimeout(timer);
          timer = setTimeout(function() {
            console.log('restart')
            $rootScope.btOBDReader.stopPolling();
            $rootScope.btOBDReader.removeAllPollers();
            startPollers();
          }, 15000);
          console.log('all good');
        });

        $rootScope.btOBDReader.on('dataReceived', function(data) {
          if (['vss', 'rpm', 'temp'].indexOf(data.name) !== -1) $scope.time =
            new Date().getTime();
          if (data.name === 'vss') $scope.speed = data.value;
          if (data.name === 'rpm') $scope.tacho = parseInt(data.value);
          if (data.name === 'temp') $scope.temp = data.value;
        });

        // rpmPoller.on('data', function(output) {
        //   if (output.value !== null) {
        //     $scope.$apply(function() {
        //       $scope.tacho = output.value.toFixed();
        //     });
        //   }
        // }, function(err) {
        //   console.error('RPM failed to poll the ECU', err);
        // });
        //
        // speedPoller.on('data', function(output) {
        //     if (output.value !== null) {
        //       $scope.$apply(function() {
        //         $scope.speed = output.value;
        //       });
        //     }
        //   },
        //   function(err) {
        //     console.error('SPEED failed to poll the ECU', err);
        //   });

        $rootScope.$watch('OBDisConnected', function(conn) {
          if (conn) {
            $scope.isConnected = true;
            clearInterval(dotInterval);
            startPollers();
          }
        });

        $rootScope.$watch('OBDhasError', function(err) {
          if (err) {
            $scope.hasError = true;
          }
        });
      }
    ]);
})();
