(function() {
  "use strict";

  angular.module('petron.core')
    .factory('petron.daemon', ['$rootScope', function($rootScope) {
      var _type;
      var _daemon;
      var daemons = ['audio', 'video', 'fm', 'gps'];
      return {

        disable: function() {
          _daemon = null;
          $rootScope.daemon.type = undefined;
          $rootScope.daemon.origin = undefined;
          $rootScope.daemon.active = false;
        },

        enable: function(type, origin) {
          if (daemons.indexOf(type) !== -1) {
            _type = type;
            $rootScope.daemon.type = type;
            $rootScope.daemon.origin = origin;
            $rootScope.daemon.active = true;
          } else {
            throw new Error('No daemon for this module.');
          }
        },

        hide: function() {
          $rootScope.daemon.active = false;
        },

        register: function(type, origin) {
          if (daemons.indexOf(type) !== -1) {
            _daemon = {
              type: type,
              origin: origin,
              active: false
            };
          } else {
            throw new Error('No daemon for this module.');
          }
        },

        checkDaemonState: function(fromState, toState) {
          if (_daemon && fromState.name === _daemon.origin && toState.name !==
            _daemon.origin) {
            if (_daemon.active !== true) {
              this.enable(_daemon.type, _daemon.origin);
              _daemon.active = true;
            }
          } else if (_daemon && fromState.name !== _daemon.origin &&
            toState.name ===
            _daemon.origin) {
            this.disable();
          }
        }
      };

    }]);
})();
