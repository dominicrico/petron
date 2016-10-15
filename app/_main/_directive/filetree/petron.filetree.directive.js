(function() {
	'use strict';

	angular.module('petron.core')
		.directive('petronFiletree', ['petron.fs', function(petronFs) {
			return {
				templateUrl: '_main/_directive/filetree/petron.filetree.html',
				restrict: 'E',
				scope: {
					'files': '=',
					'func': '='
				},
				link: function(scope, elem, attrs) {
					scope.open = function(file) {
						if (file.type === 'folder' && file.show !== undefined) {
							file.show = !file.show;
							return false;
						}

						if (file.type !== 'folder') {
							scope.func.play(file);
						} else {
							petronFs.getVideoFiles(file.path).then(function(files) {
								if (files) {
									file.childs = files;
								}

								file.show = true;
							});
						}
					};
				}
			};
		}]);
})();
