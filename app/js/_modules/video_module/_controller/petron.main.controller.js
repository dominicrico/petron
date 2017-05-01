(function() {
	'use strict';

	angular.module('petron.modules.video')
		.controller('controller.videobox.main', ['$scope', '$rootScope',
			'petron.fs', '$timeout', 'petron.playlist', 'ngDialog', '$state',
			'loadLists',
			function($scope, $rootScope, petronFs, $timeout, petronPlaylist,
				ngDialog, $state, loadLists) {
				$rootScope.title = 'video_module';
				$scope.playlist = [];
				$scope.playlists = [];
				$scope.files = null;

				if (!$rootScope.video.queue || !Object.keys(
						$rootScope.video.queue)
					.length) {
					$rootScope.video.queue = loadLists.queue;
				}

				if (!$rootScope.video.playlists || !Object.keys(
						$rootScope.video
						.playlists).length) {
					$rootScope.video.playlists = loadLists.playlists;
				}

				petronFs.getVideoFiles().then(function(files) {
					$scope.files = $rootScope.files = files;

					if (!$rootScope.video.queue || (!$rootScope.video.queue.tracks || !
							$rootScope.video.queue.tracks.length)) {
						$scope.files.forEach(function(file) {
							if (file.type !== 'folder') {
								petronPlaylist.addToPlaylist('queue', file);
							}
						});
					}
				});

				$scope.func = {
					play: function(playlist) {
						$rootScope.video.isPrepared = false;
						petronPlaylist.playPlaylist(playlist).then(function(queue) {
							if ($rootScope.video && $rootScope.video.queue) {
								$rootScope.video.queue = queue;
							}
							petronPlaylist.save();
							$state.go('petron.videobox.player');
						});
					},
					addToQueue: function(track) {
						petronPlaylist.addToPlaylist('queue', track).then(function(queue) {
							$scope.queue = queue;
							petronPlaylist.save();
						});
					},
					addToPlaylist: function(track) {
						ngDialog.open({
							template: 'js/_modules/video_module/_template/add_to_playlist_modal.html',
							className: 'ngdialog-theme-default',
							scope: $scope,
							data: $scope,
							controller: ['$scope', 'petron.playlist', function($scope,
								petronPlaylist) {
								var name = Object.keys($scope.$parent.playlists)[0];
								$scope.usePlaylist = $scope.$parent.playlists[name].name;
								$scope.$watch('usePlaylist', function(value) {
									if (value === 'create_new') {
										ngDialog.open({
											template: 'js/_modules/video_module/_template/new_playlist_modal.html',
											className: 'ngdialog-theme-default',
											scope: $scope,
											data: $scope,
											controller: ['$scope', 'petron.playlist', function(
												$scope,
												petronPlaylist) {
												$scope.savePlaylist = function() {
													petronPlaylist.newPlaylist({
														name: $scope.name
													}).then(function(playlist) {
														$scope.ngDialogData.playlists[playlist.name] =
															playlist;

														petronPlaylist.addToPlaylist($scope.name,
															track).then(function(playlist) {
															$scope.ngDialogData.playlists[$scope.name] =
																playlist;
															petronPlaylist.save();
															ngDialog.closeAll();
														});
													});
												};
											}]
										});
									}
								});

								$scope.addToPlaylist = function() {
									petronPlaylist.addToPlaylist($scope.ngDialogData.playlists[
										$scope.usePlaylist].name, track).then(function(playlist) {
										$scope.ngDialogData.playlists[$scope.usePlaylist] =
											playlist;
										petronPlaylist.save();
										$scope.closeThisDialog();
									});
								};
							}]
						});
					}
				};

				$scope.removePlaylist = function(name) {
					ngDialog.open({
						template: 'js/_main/_template/petron.confirm.html',
						className: 'ngdialog-theme-default',
						scope: $scope,
						controller: ['$scope', 'petron.playlist', function($scope,
							petronPlaylist) {
							$scope.title = 'playlist_delete_title';
							$scope.text = 'playlist_delete_text';
							$scope.button = 'modal.button_delete';

							$scope.confirm = function() {
								petronPlaylist.removePlaylist(name).then(function(playlists) {
									$scope.playlists = playlists;
									petronPlaylist.save();
									$scope.closeThisDialog();
								});
							};
						}]
					});
				};

				$scope.newPlaylist = function() {
					ngDialog.open({
						template: 'js/_modules/video_module/_template/new_playlist_modal.html',
						className: 'ngdialog-theme-default',
						scope: $scope,
						controller: ['$scope', 'petron.playlist', function($scope,
							petronPlaylist) {
							$scope.savePlaylist = function() {
								petronPlaylist.newPlaylist({
									name: $scope.name
								}).then(function(playlist) {
									$scope.$parent.playlists[playlist.name] = playlist;
									petronPlaylist.save();
									$scope.closeThisDialog();
								});
							};
						}]
					});
				};

				$scope.deleteAllPlaylists = function() {
					ngDialog.open({
						template: 'js/_main/_template/petron.confirm.html',
						className: 'ngdialog-theme-default',
						scope: $scope,
						controller: ['$scope', 'petron.playlist', function($scope,
							petronPlaylist) {
							$scope.title = 'playlist_delete_all_title';
							$scope.text = 'playlist_delete_all_text';
							$scope.button = 'modal.button_delete';

							$scope.confirm = function() {
								petronPlaylist.removeAllPlaylists().then(function(playlists) {
									$scope.$parent.playlists = playlists;
									$scope.closeThisDialog();
								});
							};
						}]
					});
				};

				$scope.clearCurrentQueue = function() {
					ngDialog.open({
						template: 'js/_main/_template/petron.confirm.html',
						className: 'ngdialog-theme-default',
						scope: $scope,
						controller: ['$scope', 'petron.playlist', function($scope,
							petronPlaylist) {
							$scope.title = 'playlist_clear_queue_title';
							$scope.text = 'playlist_clear_queue_text';
							$scope.button = 'modal.button_confirm';

							$scope.confirm = function() {
								petronPlaylist.clearQueue().then(function(queue) {
									$scope.$parent.queue = queue;
									petronPlaylist.save();
									$scope.closeThisDialog();
								});
							};
						}]
					});
				};
			}
		]);
})();
