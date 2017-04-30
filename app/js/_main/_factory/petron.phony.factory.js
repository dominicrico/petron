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
                          pb) {
                          _phonebook = pb;
                          console.log(_phonebook, pb);
                          deferredPb.resolve(_phonebook);

                        }, function(err) {
                          console.log(
                            'Phonebook Error: ',
                            err);
                        });
                      },
                      function(err) {
                        console.log(
                          'OBEX Phonebook Error: ',
                          err);
                      });
                    return deferredPb.promise;
                  },
                  function() {
                    var deferredMsgs = $q.defer();
                    phony.createOBEXSession('map').then(
                      function() {
                        phony.getMessages('inbox').then(
                          function(msgs) {
                            _messages = msgs;
                            console.log(_messages, msgs);
                            deferredMsgs.resolve(
                              _messages);
                          },
                          function(err) {
                            console.log('SMS Error: ',
                              err);
                          });
                      },
                      function(err) {
                        console.log('OBEX SMS Error: ', err);
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
