(function() {
	'use strict';

	angular.module('petron.modules.settings', []);

	angular.module('petron.modules.settings').config(['$stateProvider', function(
		$stateProvider) {
		$stateProvider
			.state('petron.settingsbox', {
				url: '/settingsbox',
				views: {
					'content': {
						templateUrl: 'js/_modules/settings_module/_template/main.html',
						controller: 'controller.settingsbox.main'
					},
					'header@petron': {
						templateUrl: 'js/_main/_template/petron.header.html'
					}
				}
			});
	}]);
})();
