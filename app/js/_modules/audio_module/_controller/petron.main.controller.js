(function() {
  'use strict';

  angular.module('petron.modules.audio')
    .controller('controller.audiobox.main', ['$scope', '$rootScope',
      'petron.fs',
      'petron.playlist', 'ngDialog', 'loadLists',
      function($scope, $rootScope, petronFs, petronPlaylist,
        ngDialog, loadLists) {
        $rootScope.title = 'audio_module';
        $rootScope.rightMenuShow = true;
        $rootScope.rightMenuLabel = 'menu_label_playlists';
        $scope.playlists = {};

        $scope.files = null;

        if (!$rootScope.audio.queue || !Object.keys(
            $rootScope.audio.queue)
          .length) {
          $rootScope.audio.queue = loadLists.queue;
        }

        if (!$rootScope.audio.playlists || !Object.keys(
            $rootScope.audio
            .playlists).length) {
          $rootScope.audio.playlists = loadLists.playlists;
        }

        $scope.playlists = $rootScope.audio.playlists;

        petronFs.getAudioFiles().then(function(files) {
          $scope.files = $rootScope.files = files;
          if (!$rootScope.audio.queue || (!$rootScope.audio.queue.tracks ||
              !
              $rootScope.audio.queue.tracks.length)) {
            $scope.files.forEach(function(file) {
              if (file.type !== 'folder') {
                petronPlaylist.addToPlaylist('queue', file);
                petronPlaylist.save();
              }
            });
          }
        }, function() {
          $scope.files = $rootScope.files = $rootScope.audio.queue = [];
        });

        $scope.localMusic = true;
        $scope.useUpnp = function() {
          $scope.localMusic = false;
          $scope.upnpMusic = true;
        };

        $scope.useLocal = function() {
          $scope.localMusic = true;
          $scope.upnpMusic = true;
        };

        $scope.func = {
          play: function(playlist) {
            petronPlaylist.playPlaylist(playlist).then(function(queue) {
              $rootScope.audio.queue = queue;
              petronPlaylist.save();
            });
          },
          playAll: function() {
            var songs = [];
            $rootScope.files.forEach(function(track) {
              if (track.type !== 'folder') {
                songs.push(track);
              }
            });
            petronPlaylist.playPlaylist(songs).then(function(queue) {
              $rootScope.audio.queue = queue;
              petronPlaylist.save();
            });
          },
          addToQueue: function(track) {
            petronPlaylist.addToPlaylist('queue', track).then(function(
              queue) {
              $rootScope.audio.queue = queue;
              petronPlaylist.save();
            });
          },
          addToPlaylist: function(track) {
            ngDialog.open({
              template: 'js/_modules/audio_module/_template/add_to_playlist_modal.html',
              className: 'ngdialog-theme-default c--audio__popout--theme',
              scope: $scope,
              data: $scope,
              controller: ['$scope', 'petron.playlist', function(
                $scope,
                petronPlaylist) {
                var name = Object.keys($scope.ngDialogData.playlists)[
                  0];

                $scope.file = track;

                if (name) {
                  $scope.usePlaylist = $scope.ngDialogData.playlists[
                    name].name;
                } else {
                  $scope.usePlaylist = 'create_new';
                }

                $scope.useList = function(list) {
                  $scope.usePlaylist = list;
                  if (list !== 'create_new') {
                    $scope.addToPlaylist();
                  }
                };

                $scope.$watch('usePlaylist', function(value) {
                  if (value === 'create_new') {
                    ngDialog.open({
                      template: 'js/_modules/audio_module/_template/new_playlist_modal.html',
                      className: 'ngdialog-theme-default c--audio__popout--theme',
                      scope: $scope,
                      data: $scope,
                      controller: ['$scope',
                        'petron.playlist',
                        function(
                          $scope,
                          petronPlaylist) {
                          $scope.savePlaylist =
                            function() {
                              petronPlaylist.newPlaylist({
                                name: $scope.name
                              }).then(function(
                                playlist) {
                                $scope.ngDialogData
                                  .playlists[
                                    playlist.name
                                  ] = playlist;
                                petronPlaylist.addToPlaylist(
                                  $scope.name,
                                  track).then(
                                  function(
                                    playlist) {
                                    $rootScope.audio
                                      .playlists[
                                        $scope.name
                                      ] =
                                      $scope.ngDialogData
                                      .playlists[
                                        $scope.name
                                      ] =
                                      playlist;
                                    petronPlaylist
                                      .save();
                                    ngDialog.closeAll();
                                  });
                              });
                            };
                        }
                      ]
                    });
                  }
                });

                $scope.addToPlaylist = function() {
                  petronPlaylist.addToPlaylist($scope.ngDialogData
                    .playlists[
                      $scope.usePlaylist].name, track).then(
                    function(playlist) {
                      $rootScope.audio.playlists[$scope.usePlaylist] =
                        $scope.ngDialogData
                        .playlists[$scope.usePlaylist] =
                        playlist;
                      petronPlaylist.save();
                      ngDialog.closeAll();
                    });
                };
              }]
            });
          }
        };

        $scope.removePlaylist = function(name) {
          ngDialog.open({
            template: 'js/_main/_template/petron.confirm.html',
            className: 'ngdialog-theme-default c--audio__popout--theme',
            scope: $scope,
            controller: ['$scope', 'petron.playlist', function(
              $scope,
              petronPlaylist) {
              $scope.title = 'playlist_delete_title';
              $scope.text = 'playlist_delete_text';
              $scope.button = 'modal.button_delete';

              $scope.confirm = function() {
                petronPlaylist.removePlaylist(name).then(
                  function(playlists) {
                    $scope.$parent.playlists = playlists;
                    petronPlaylist.save();
                    $scope.closeThisDialog();
                  });
              };
            }]
          });
        };

        $scope.newPlaylist = function() {
          ngDialog.open({
            template: 'js/_modules/audio_module/_template/new_playlist_modal.html',
            className: 'ngdialog-theme-default c--audio__popout--theme',
            scope: $scope,
            controller: ['$scope', 'petron.playlist', function(
              $scope,
              petronPlaylist) {
              $scope.savePlaylist = function() {
                petronPlaylist.newPlaylist({
                  name: $scope.name
                }).then(function(playlist) {
                  $scope.$parent.playlists[playlist.name] =
                    playlist;
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
            className: 'ngdialog-theme-default c--audio__popout--theme',
            scope: $scope,
            controller: ['$scope', 'petron.playlist', function(
              $scope,
              petronPlaylist) {
              $scope.title = 'playlist_delete_all_title';
              $scope.text = 'playlist_delete_all_text';
              $scope.button = 'modal.button_delete';

              $scope.confirm = function() {
                petronPlaylist.removeAllPlaylists().then(
                  function(playlists) {
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
            className: 'ngdialog-theme-default c--audio__popout--theme',
            scope: $scope,
            controller: ['$scope', 'petron.playlist', function(
              $scope,
              petronPlaylist) {
              $scope.title = 'playlist_clear_queue_title';
              $scope.text = 'playlist_clear_queue_text';
              $scope.button = 'modal.button_confirm';

              $scope.confirm = function() {
                petronPlaylist.clearQueue().then(function(
                  queue) {
                  $scope.$parent.queue = $scope.$parent.$root
                    .audio.queue =
                    queue;
                  petronPlaylist.save();
                  $scope.closeThisDialog();
                });
              };
            }]
          });
        };

        $scope.hasPlaylists = function(playlists) {
          var has;
          if (!playlists) {
            has = false;
          } else {
            has = (Object.keys(playlists).length > 0);
          }
          return has;
        };
      }
    ]);
})();
