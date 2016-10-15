(function() {
	'use strict';

	angular.module('petron.modules.audio')
		.controller('controller.audiobox.main', ['$scope', '$rootScope', 'petron.fs',
			'petron.playlist', 'ngDialog', '$state',
			function($scope, $rootScope, petronFs, petronPlaylist,
				ngDialog, $state) {
				$rootScope.title = 'audio_module';
				$scope.files = null;
				$scope.playlist = [];
				$scope.playlists = [];

				if ($rootScope.daemon.type === 'audio' && !$rootScope.daemon.active) {
					$rootScope.daemon.active = true;
				}

				petronFs.getAudioFiles().then(function(files) {
					$scope.files = files;
				});

				petronPlaylist.loadPlaylists('audio').then(function(lists) {
					$scope.queue = lists[0];
					$scope.playlists = lists[1];

					if (!$scope.queue.tracks || !$scope.queue.tracks.length) {
						$scope.queue.tracks = [];
						$scope.files.forEach(function(file) {
							if (file.type !== 'folder') {
								petronPlaylist.addToPlaylist('queue', file);
							}
						});
					}
				});

				$scope.func = {
					play: function(playlist) {
						petronPlaylist.playPlaylist(playlist).then(function() {
							$state.go('audiobox.player');
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
							template: '_modules/video_module/_template/add_to_playlist_modal.html',
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
											template: '_modules/video_module/_template/new_playlist_modal.html',
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

				$scope.removePlaylist = function(name, index) {
					ngDialog.open({
						template: '_main/_template/petron.confirm.html',
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
						template: '_modules/video_module/_template/new_playlist_modal.html',
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
						template: '_main/_template/petron.confirm.html',
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
						template: '_main/_template/petron.confirm.html',
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
