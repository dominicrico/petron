(function() {
	'use strict';

	angular.module('petron.modules.settings')
		.controller('controller.settingsbox.main', ['$scope', '$rootScope',
			'petron.storage',
			'$translate', 'tmhDynamicLocale',
			function($scope, $rootScope, petronStorage, $translate, tmhDynamicLocale) {
				var firstCycle = true;
				$rootScope.title = 'health_module';
				$rootScope.rightMenuShow = false;

				$scope.settings = angular.copy($rootScope.settings);

				$scope.$watch('settings', function() {
					if (!firstCycle) {
						$translate.use($scope.settings.locale);
						tmhDynamicLocale.set($scope.settings.locale);
						petronStorage.set('petron.settings', $scope.settings);
						$rootScope.settings = angular.copy($scope.settings);
					}

					firstCycle = false;
				}, true);
			}
		]);
})();
