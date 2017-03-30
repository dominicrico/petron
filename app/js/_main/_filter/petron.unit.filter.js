(function() {
	"use strict";

	angular.module('petron.core')
		.filter('unit', [function() {
			return function(amount, to, decimals) {
				if (isNaN(decimals)) {
					decimals = 1;
				}
				if (to === 'mi') {
					amount = amount * 0.621371;
				}
				if (to === 'gal') {
					amount = 235.2145833 / amount;
				}
				return amount.toFixed(decimals);
			};
		}]);
})();
