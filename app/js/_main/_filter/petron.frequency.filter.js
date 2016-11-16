(function() {
	angular.module('petron.core')
		.filter('frequency', ['$sce', function($sce) {
			return function(frequency, a, b, c) {
				var splitted = frequency.toString().split('.');
				var res;

				if (splitted[1] && splitted[1].length > 1) {
					res = splitted[0] + '.' + splitted[1][0] + '<small>' +
						splitted[1][1] +
						'</small>';
				} else if (!splitted[1]) {
					res = splitted[0] + '.' + 0;
				} else {
					res = frequency.toString();
				}

				return $sce.trustAsHtml(res);
			};
		}]);
})();
