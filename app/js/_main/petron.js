(function() {
  'use strict';

  angular.module('petron', [
    'petron.core',
    'petron.modules'
  ]);

  angular.module('petron').config([function() {

  }]).run(['$rootScope', 'petron.daemon', 'petron.storage', '$translate',
    'tmhDynamicLocale', 'petron.phony', 'SweetAlert',
    function(
      $rootScope, petronDaemon, petronStorage, $translate,
      tmhDynamicLocale, petronPhony, SweetAlert) {
      $rootScope.daemon = {};

      petronPhony.init();

      $rootScope.phoneConnected = false;
      $rootScope.$on('deviceFound', function(event, device) {
        petronPhony.selectDevice(device).then(function() {
          $rootScope.phoneConnected = true;
          $rootScope.$broadcast('deviceReady');
        });
      });

      $rootScope.$on('deviceRemoved', function() {
        $rootScope.phoneConnected = false;
      });

      $rootScope.leftMenuShow = false;

      $rootScope.settings = {
        distance: 'km',
        fuel: 'l',
        locale: 'de',
        clock: 'dd. MMMM yyyy - HH:mm',
        keyboard: "qwertz"
      };

      petronStorage.get('petron.settings')
        .then(function(settings) {
            $rootScope.settings = angular.merge($rootScope.settings,
              settings);
            tmhDynamicLocale.set($rootScope.settings.locale);
            $translate.use($rootScope.settings.locale);
          },
          function() {
            throw new Error('Could not load settings');
          });

      $rootScope.audio = {
        queue: null,
        playlists: null,
        active: false
      };

      $rootScope.video = {
        queue: null,
        playlists: null,
        active: false
      };

      $rootScope.$onMany = function(events, fn) {
        for (var i = 0; i < events.length; i = i + 1) {
          this.$on(events[i], fn);
        }
      };

      $rootScope.volumeIndicator = angular.noop();

      $rootScope.$on('$stateChangeStart', function(event, toState,
        toParams, fromState) {
        petronDaemon.checkDaemonState(fromState, toState);

        if (toState.name === 'petron.home') {
          $rootScope.leftMenuShow = false;
        } else {
          $rootScope.leftMenuShow = true;
        }

        $rootScope.rightMenuShow = false;
      });

      $rootScope.$on('$stateChangeSuccess', function() {
        $rootScope.left_toggle = false;
      });


    }
  ]);
})();
