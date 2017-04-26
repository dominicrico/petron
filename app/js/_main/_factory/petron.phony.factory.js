(function() {
  'use strict';

  angular.module('petron.core')
    .factory('petron.phony', ['$q', '$rootScope',
      function($q, $rootScope) {
        //var basePath = app.getPath('home') + '/Downloads/';
        var phony, Phony = require('node-phony');
        var _phonebook, _messages;

        return {
          connected: false,

          init: function() {
            phony = new Phony();
            var _this = this;

            phony.on('ready', function() {
              phony.setPairable(true);
              phony.setDiscoverable(true);
            });

            phony.on('propertiesChanged', function(args) {
              if (args.args[0].hasOwnProperty('Connected') && args.args[
                  0].Connected && !_this.connected) {
                $rootScope.$broadcast('deviceFound', {
                  path: args.path
                });
              } else if (args.args[0].hasOwnProperty('Connected') &&
                !args.args[0].Connected) {
                _this.connected = false;
                _phonebook = undefined;
                _messages = undefined;
                $rootScope.$broadcast('deviceRemoved');
              }
            });
          },

          selectDevice: function(device) {
            if (this.connected !== false) {
              throw new Error('device_already_connected');
            }

            var deferred = $q.defer();
            var self = this;

            phony.selectDevice(device).then(function() {
              phony.setDiscoverable(false);
              phony.setPairable(false);
              phony.connectHandsfree().then(function() {
                $q.all([
                  function() {
                    var deferredPb = $q.defer();
                    phony.createOBEXSession('pbap').then(
                      function() {
                        phony.getPhoneBook().then(function(
                          phonebook) {
                          _phonebook = phonebook;
                          deferredPb.resolve(_phonebook);

                        });
                      });
                    return deferredPb.promise;
                  },
                  function() {
                    var deferredMsgs = $q.defer();
                    phony.createOBEXSession('map').then(
                      function() {
                        phony.getMessages('inbox').then(
                          function(
                            msgs) {
                            _messages = msgs;
                            deferredMsgs.resolve(
                              _messages);

                          });
                      });
                    return deferredMsgs.promise;
                  }
                ]).then(function() {
                  self.connected = true;
                  deferred.resolve();
                });
              });
            });

            return deferred.promise;
          },

          findMediaPlayer: function() {
            if (this.connected !== true) {
              throw new Error('no_device_connected');
            }

            var deferred = $q.defer();

            phony.getMediaPlayer().then(function(mp) {
              deferred.resolve(mp);
            });

            return deferred.promise;
          },

          getPhoneBook: function() {
            if (this.connected !== true) {
              throw new Error('no_device_connected');
            }

            return _phonebook;
          },

          getMessages: function() {
            if (this.connected !== true) {
              throw new Error('no_device_connected');
            }

            return _messages;
          },

          on: function(ev, cb) {
            if (this.connected !== true) {
              throw new Error('no_device_connected');
            }

            return phony.on(ev, cb);
          }

        };
      }
    ]);
})();
