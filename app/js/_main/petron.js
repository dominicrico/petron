(function() {
  'use strict';

  angular.module('petron', [
    'petron.core',
    'petron.modules'
  ]);

  angular.module('petron').config([function() {

  }]).run(['$rootScope',
    'petron.daemon',
    'petron.storage',
    '$translate',
    'tmhDynamicLocale',
    '$state',
    // 'petron.phony',
    'SweetAlert',
    function(
      $rootScope,
      petronDaemon,
      petronStorage,
      $translate,
      tmhDynamicLocale,
      $state,
      // petronPhony,
      SweetAlert) {
      $rootScope.daemon = {};

      // petronPhony.init();

      // $rootScope.phoneConnected = false;
      // $rootScope.$on('deviceFound', function(event, device) {
      //   petronPhony.selectDevice(device).then(function() {
      //     $rootScope.phoneConnected = true;
      //     $rootScope.$broadcast('deviceReady');
      //   });
      // });

      $rootScope.$on('deviceRemoved', function() {
        $rootScope.phoneConnected = false;
      });

      $rootScope.leftMenuShow = false;

      $rootScope.goHome = function() {
        if (!$state.is('petron.navigationbox.map')) {
          $state.go('petron.home');
        }
      };

      $rootScope.settings = {
        distance: 'km',
        fuel: 'l',
        locale: 'de',
        clock: 'dd. MMMM yyyy - HH:mm',
        keyboard: "qwertz",
        OBD: {
          address: 'AB:90:78:56:34:12',
          channel: 1
        },
        volume: 0.1
      };

      petronStorage.get('petron.settings')
        .then(function(settings) {
            console.log(settings)
            $rootScope.settings = angular.merge($rootScope.settings,
              settings);
            tmhDynamicLocale.set($rootScope.settings.locale);
            $translate.use($rootScope.settings.locale);
            console.log($rootScope.settings)
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

      // var gpio = require('rpi-gpio');
      // var shell = require('shelljs');
      //
      // var _shutdown = false;
      //
      // gpio.on('change', function(channel, value) {
      //   if (!value && channel === 7 && !_shutdown) {
      //     _shutdown = true;
      //     shell.echo('Shutting down Petron!');
      //     shell.exec('sudo shutdown -h now');
      //   }
      // });
      //
      // gpio.setup(11, gpio.DIR_HIGH, function() {
      //   shell.echo('Power supply to on for shutdown routine.');
      // });
      //
      // gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH, function() {
      //   gpio.read(7, function(err) {
      //     if (err) {
      //       console.log(err);
      //     } else {
      //       shell.echo(
      //         'Watching PIN for automatic shutdown.');
      //     }
      //   });
      // });

      $rootScope.OBDisConnected = false;
      $rootScope.OBDhasError = false;

      var OBD = require('obd-parser');
      var getConnector = require('obd-parser-bluetooth-connection');
      var connect = getConnector({
        name: 'OBDII',
        address: $rootScope.settings.OBD.address,
        channel: $rootScope.settings.OBD.channel
      });

      OBD.init(connect)
        .then(function() {
          $rootScope.$apply(function() {
            $rootScope.OBDisConnected = true;
          });
        }, function(err) {
          $rootScope.$apply(function() {
            $rootScope.OBDhasError = true;
          });
          console.log('OBD ERROR', err);
        });

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
