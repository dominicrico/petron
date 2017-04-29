(function() {
  'use strict';

  angular.module('petron.modules.phone', []);
  angular.module('petron.modules.phone').config(['$stateProvider', function(
    $stateProvider) {
    $stateProvider
      .state('petron.phonebox', {
        abstract: true,
        url: '/phonebox',
        views: {
          'content': {
            template: '<div ui-view="main" class="c--main"></div>'
          }
        },
      })
      .state('petron.phonebox.main', {
        url: '/main',
        views: {
          'main': {
            templateUrl: 'js/_modules/phone_module/_template/main.html',
            controller: 'controller.phonebox.main'
          },
          'header@petron': {
            templateUrl: 'js/_main/_template/petron.header.html'
          }
        }
      }).state('petron.phonebox.sms', {
        url: '/sms',
        views: {
          'main': {
            templateUrl: 'js/_modules/phone_module/_template/messages.html',
            controller: 'controller.phonebox.sms'
          },
          'header@petron': {
            templateUrl: 'js/_main/_template/petron.header.html'
          }
        }
      }).state('petron.phonebox.calls', {
        url: '/calls',
        views: {
          'main': {
            templateUrl: 'js/_modules/phone_module/_template/calls.html',
            controller: 'controller.phonebox.calls'
          },
          'header@petron': {
            templateUrl: 'js/_main/_template/petron.header.html'
          }
        }
      });
  }]);
})();
