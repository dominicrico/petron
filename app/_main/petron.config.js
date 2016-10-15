(function() {
	'use strict';

	angular.module('petron.core.config', []);

	angular.module('petron.core.config').config(['$translateProvider', function(
		$translateProvider) {
		$translateProvider.useStaticFilesLoader({
			prefix: '_locales/locale-',
			suffix: '.json'
		});
		$translateProvider.useMessageFormatInterpolation();
		$translateProvider.preferredLanguage('en');
		$translateProvider.useSanitizeValueStrategy(null);
	}]);
})();
