(function() {
	'use strict';

	angular.module('petron', [
		'petron.core',
		'petron.modules'
	]);

	angular.module('petron').config([function() {

	}]).run(['$rootScope', 'petron.daemon', function($rootScope, petronDaemon) {
		$rootScope.daemon = {};

		$rootScope.audio = {
			queue: null,
			playlists: null,
			active: false
		};

		$rootScope.video = {
			queue: null,
			playlists: null,
			active: false
		};

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams,
			fromState, fromParams) {
			petronDaemon.checkDaemonState(fromState, toState);
		});

		$rootScope.$on('$stateChangeSuccess', function() {
			$rootScope.left_toggle = false;
		});
	}]);
})();
