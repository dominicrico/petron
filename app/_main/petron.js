(function() {
	'use strict';

	angular.module('petron', [
		'petron.core',
		'petron.modules'
	]);

	angular.module('petron').config([function() {

	}]).run(['$rootScope', function($rootScope) {
		$rootScope.daemon = {};
		$rootScope.player = {
			video: {},
			audio: {},
			fm: {}
		};
	}]);
})();
