(function() {
  'use strict';

  angular.module('petron.modules.audio')
    .directive('petronUpnpAudio', ['petron.daemon', '$state',
      function(petronDaemon, $state) {
        return {
          templateUrl: 'js/_modules/audio_module/_template/_directive.html',
          restrict: 'E',
          controller: ['$scope', '$rootScope', '$element',
            '$translatePartialLoader', '$translate', '$timeout',
            function($scope, $rootScope, $element,
              $translatePartialLoader,
              $translate, $timeout) {
              console.log('starting upnp client...');

              var upnpClient = require('node-upnp-client');
              var cli = new upnpClient();

              //start search

              cli.searchDevices();
              // listen for search terminated

              cli.on('searchDevicesEnd', function() {
                console.log('Servers', cli)
              });
              // listen for added / removed devices

              cli.on('updateUpnpDevice', function() {
                console.log('Servers', cli)
              });

            }
          ]
        };
      }
    ]);
})();
