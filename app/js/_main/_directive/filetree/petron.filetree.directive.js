(function() {
	'use strict';

	angular.module('petron.core')
		.directive('petronFiletree', ['petron.fs', 'ngDialog', '$rootScope',
			'$timeout',
			function(petronFs, ngDialog, $rootScope, $timeout) {
				return {
					templateUrl: 'js/_main/_directive/filetree/petron.filetree.html',
					restrict: 'E',
					scope: {
						'files': '=',
						'func': '=',
						'type': '@'
					},
					link: function(scope, elem, attrs) {
						$rootScope.fileTreeLevel = 0;

						scope.orderFunc = function(file) {
							if (scope.type !== 'playlist') {
								if (file.type !== 'folder') return true;
							}
						};

						scope.popout = function(event) {
							event.preventDefault();

							var file = event.element.scope().file;
							if (file.type === 'folder') return false;

							var popout;
							if (scope.type !== 'video') {
								popout = 'js/_main/_directive/filetree/audio_popout.html';
							} else {
								popout = 'js/_main/_directive/filetree/video_popout.html';
							}

							ngDialog.open({
								template: popout,
								className: 'ngdialog-theme-default c--audio__popout--theme',
								scope: scope,
								data: file,
								controller: ['$scope', function($scope) {
									$scope.file = $scope.ngDialogData;

									$scope.play = function(file) {
										$scope.$parent.func.play(file);
										$scope.closeThisDialog();
									};

									$scope.addToQueue = function(file) {
										$scope.$parent.func.addToQueue(file);
										$scope.closeThisDialog();
									};

									$scope.addToPlaylist = function(file) {
										$scope.$parent.func.addToPlaylist(file);
									};

								}]
							});
						};

						scope.openParent = function(folder) {
							$rootScope.fileTreeLevel--;

							var parent = folder.path.split('/');
							parent.pop();
							parent = parent.join('/');
							scope.parent = {
								parent: ($rootScope.fileTreeLevel > 0) ? true : false,
								path: parent,
								type: 'folder'
							};

							if (scope.type !== 'video') {
								petronFs.getAudioFiles(folder.path).then(function(files) {
									if (files) {
										scope.files = $rootScope.files = files;
									}
								});
							} else {
								petronFs.getVideoFiles(folder.path).then(function(files) {
									if (files) {
										scope.files = $rootScope.files = files;
									}
								});
							}
						};

						scope.open = function(file, index) {
							if (file.type !== 'folder') {
								if (scope.type !== 'playlist' && scope.type !== 'audio_playlist' &&
									scope.type !== 'video_playlist') {
									if (file.not_found !== true) scope.func.play(file);
								} else {
									if (file.not_found !== true) $rootScope.playTrack(index);
								}
							} else {
								$rootScope.fileTreeLevel++;
								if (scope.type.indexOf('video') === -1) {
									petronFs.getAudioFiles(file.path).then(function(files) {
										if (files) {
											var parent = file.path.split('/');
											parent.pop();
											parent = parent.join('/');
											scope.files = $rootScope.files = files;
											scope.parent = {
												parent: true,
												path: parent,
												type: 'folder'
											};
										}
									});
								} else {
									petronFs.getVideoFiles(file.path).then(function(files) {
										if (files) {
											var parent = file.path.split('/');
											parent.pop();
											parent = parent.join('/');
											scope.files = $rootScope.files = files;
											scope.parent = {
												parent: true,
												path: parent,
												type: 'folder'
											};
										}
									});
								}
							}
						};
					}
				};
			}
		]);
})();
