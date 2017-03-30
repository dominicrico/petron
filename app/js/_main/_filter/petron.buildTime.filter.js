(function() {
	"use strict";

	angular.module('petron.core')
		.filter('buildTime', [function() {
			return function(time, unit) {
				time = parseFloat(time);
				var hrs = Math.floor(time / 3600);
				var mins = Math.floor((time % 3600) / 60);
				var secs = Math.floor(time % 60);

				var ret = "";

				if (unit) {
					unit = 'min';
				} else {
					unit = '';
				}

				if (hrs > 0) {
					ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
					if (unit) {
						unit = 'h';
					}
				}

				ret += "" + mins + ":" + (secs < 10 ? "0" : "");
				ret += "" + secs;
				return ret + unit;
			};
		}]);
})();
