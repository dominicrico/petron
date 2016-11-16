(function() {
	'use strict';

	angular.module('petron.core.config', []);

	angular.module('petron.core.config').config(['$translateProvider', function(
		$translateProvider) {
		$translateProvider.useStaticFilesLoader({
			prefix: 'js/_locales/locale-',
			suffix: '.json'
		});
		$translateProvider.useMessageFormatInterpolation();
		$translateProvider.preferredLanguage('de');
		$translateProvider.useSanitizeValueStrategy(null);
	}]);
})();
