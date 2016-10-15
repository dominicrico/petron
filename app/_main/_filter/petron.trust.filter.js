(function() {
	angular.module('petron.core')
		.filter('trust', ['$sce', function($sce) {
			return function(url) {
				return $sce.trustAsResourceUrl(url);
			};
		}]);
})();
