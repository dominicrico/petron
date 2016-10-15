(function() {
	angular.module('petron.core')
		.factory('petron.daemon', ['$rootScope', function($rootScope) {
			var _type;
			var daemons = ['audio', 'video', 'fm', 'gps'];

			return {

				disable: function() {
					$rootScope.daemon.type = undefined;
					$rootScope.daemon.origin = undefined;
					$rootScope.daemon.active = false;
					$rootScope.player[_type].initialized = false;
				},

				enable: function(type, origin) {
					if (daemons.indexOf(type) !== -1) {
						_type = type;
						$rootScope.daemon.type = type;
						$rootScope.daemon.origin = origin;
						$rootScope.daemon.active = true;
					} else {
						throw new Error('No daemon for this module.');
					}
				},

				hide: function() {
					$rootScope.daemon.active = false;
				}
			};

		}]);
})();
