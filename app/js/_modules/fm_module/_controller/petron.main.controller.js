(function() {
	'use strict';

	angular.module('petron.modules.fm')
		.controller('controller.fmbox.main', ['$scope', '$rootScope', 'ngDialog',
			'$state', '$timeout', 'petron.tuner',
			function($scope, $rootScope,
				ngDialog, $state, $timeout, tuner) {
				$rootScope.title = 'fm_module';

				$rootScope.rightMenuShow = true;
				$rootScope.rightMenuLabel = 'menu_label_favourites';

				$scope.stations = {};

				$scope.frequency = {
					min: 87.5,
					max: 108,
					current: 87.5
				};

				$scope.freqUp = function() {
					var res = ($scope.frequency.current * 100 + 5) / 100;
					if (res <= $scope.frequency.max) {
						$scope.frequency.current = res;
					}
				};

				$scope.freqDown = function() {
					var res = ($scope.frequency.current * 100 - 5) / 100;
					if (res >= $scope.frequency.min) {
						$scope.frequency.current = res;
					}
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
					for (var i = labels.length; i--;) {
						var ml = labels[i].offsetWidth;
						angular.element(labels[i]).css({
							'margin-left': (ml / 2) * -1 + 'px'
						});
					}
				});
			}
		]);
})();
