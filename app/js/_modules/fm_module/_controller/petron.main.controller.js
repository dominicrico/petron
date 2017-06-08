(function() {
  'use strict';

  angular.module('petron.modules.fm')
    .controller('controller.fmbox.main', ['$scope', '$rootScope', 'ngDialog',
      '$state', '$timeout', 'petron.tuner', 'petron.storage',
      function($scope, $rootScope,
        ngDialog, $state, $timeout, PetronTuner, petronStorage) {
        $rootScope.title = 'fm_module';

        //PetronTuner.turnOn();

        $rootScope.rightMenuShow = true;
        $rootScope.rightMenuLabel = 'menu_label_favourites';

        $scope.favourites = [];

        function isFav(channel) {
          var _fav = false;
          $scope.favourites.forEach(function(chan) {
            if (chan.channel === channel.channel) {
              _fav = true;
            }
          });
          return _fav;
        }

        $rootScope.$watch('settings', function() {
          console.log('settings');
          if ($rootScope.settings.fmLast) {
            $scope.current = $rootScope.settings.fmLast;
          }
        });

        $scope.$watch('current', function() {
          console.log('current');
          $scope.isFav = isFav($scope.current);
          $rootScope.settings.fmLast = $scope.current;
          petronStorage.set('petron.settings', $rootScope.settings);
        });

        $scope.frequency = {
          min: 87.5,
          max: 108,
          current: 87.5
        };

        $scope.current = {
          channel: 'SWR3',
          rds: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente atque hic labore veniam',
          frequency: $scope.frequency.current
        };

        $scope.freqUp = function() {
          var res = ($scope.frequency.current * 100 + 5) / 100;
          if (res <= $scope.frequency.max) {
            $scope.frequency.current = res;
            $scope.isFav = false;
          }
        };

        $scope.freqDown = function() {
          var res = ($scope.frequency.current * 100 - 5) / 100;
          if (res >= $scope.frequency.min) {
            $scope.frequency.current = res;
            $scope.isFav = false;
          }
        };

        $scope.seekUp = function() {
          PetronTuner.seekUp().then(function(chan) {
            PetronTuner.readRDS().then(function(rds) {
              $scope.current.channel = rds;
              $scope.current.rds = rds;
            });
            $scope.current.frequency = chan / 10;
          });
        };
        $scope.seekDown = function() {
          PetronTuner.seekDown().then(function(chan) {
            PetronTuner.readRDS().then(function(rds) {
              $scope.current.channel = rds;
              $scope.current.rds = rds;
            });
            $scope.current.frequency = chan / 10;
          });
        };

        function fillArrayRange(start, end) {
          var step = arguments.length > 2 && arguments[2] !== undefined ?
            arguments[2] : 1;

          var len = Math.floor((end - start) / step) + 1;
          return Array(len).fill().map(function(_, idx) {
            return start + idx * step;
          });
        }

        $scope.rangeLabels = fillArrayRange($scope.frequency.min, $scope.frequency
          .max, 0.05);

        $timeout(function() {
          var labels = document.getElementsByClassName('is-label');
          for (var i = labels.length; i >= labels.length; i = i - 1) {
            if (labels && labels[i] && labels[i].offsetWidth) {
              var ml = labels[i].offsetWidth;
              angular.element(labels[i]).css({
                'margin-left': (ml / 2) * -1 + 'px'
              });
            }
          }
        });

        PetronTuner.getFavourites().then(function(favourites) {
          $scope.favourites = favourites;
          $scope.isFav = isFav($scope.current);
        });

        // PetronTuner.readRDS().then(function(rds) {
        //   $scope.current.channel = rds;
        //   $scope.current.rds = rds;
        // });

        $scope.toggleFav = function() {
          if (!$scope.isFav) {
            PetronTuner.setFavourite($scope.current).then(function(
              favourites) {
              $scope.favourites = favourites;
              $scope.isFav = true;
            });
          } else {
            PetronTuner.removeFavourite($scope.current).then(function(
              favourites) {
              $scope.favourites = favourites;
              $scope.isFav = false;
            });
          }

        };
      }
    ]);
})();
