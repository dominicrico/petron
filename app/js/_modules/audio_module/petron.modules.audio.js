(function() {
  'use strict';

  angular.module('petron.modules.audio', []);

  angular.module('petron.modules.audio')
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('petron.audiobox', {
          url: '/audiobox',
          resolve: {
            loadLists: ['petron.playlist', '$rootScope', function(
              petronPlaylist,
              $rootScope) {
              petronPlaylist.setType('audio');
              petronPlaylist.loadPlaylists('audio').then(function(
                audio) {
                if (!$rootScope.audio.queue || !Object.keys(
                    $rootScope.audio.queue)
                  .length) {
                  $rootScope.audio.queue = audio.queue;
                }

                if (!$rootScope.audio.playlists || !Object.keys(
                    $rootScope.audio
                    .playlists).length) {
                  $rootScope.audio.playlists = audio.playlists;
                }

                return $rootScope.audio;
              });
            }]
          },
          views: {
            'content': {
              templateUrl: 'js/_modules/audio_module/_template/main.html',
              controller: 'controller.audiobox.main'
            },
            'header@petron': {
              templateUrl: 'js/_main/_template/petron.header.html'
            },
            'right-menu@': {
              templateUrl: 'js/_modules/audio_module/_template/playlists.html',
              controller: 'controller.audiobox.main'
            }
          }
        });
    }]);
})();
