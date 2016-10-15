(function() {
	'use strict';

	angular.module('petron.core.dependencies', [
		'angular-electron',
		'ui.router',
		'pascalprecht.translate',
		'ngDialog'
	]);

	angular.module('petron.core.modules', []);
	angular.module('petron.core.modules')
		.config(['remoteProvider', function(remoteProvider) {
			remoteProvider.register('fs');
			remoteProvider.register('path');
			remoteProvider.register('electron-json-storage');
		}]);

	angular.module('petron.core', [
		'petron.core.dependencies',
		'petron.core.modules',
		'petron.core.config',
		'petron.core.templates',
		'petron.core.routes'
	]);
})();
