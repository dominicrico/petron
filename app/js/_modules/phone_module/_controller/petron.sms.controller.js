(function() {
  'use strict';

  angular.module('petron.modules.phone')
    .controller('controller.phonebox.sms', ['$scope', '$rootScope',
      'petron.phony',
      function($scope, $rootScope, petronPhony) {
        $rootScope.title = 'phone_module';
        $scope.messages = [];

        petronPhony.getMessages(function(msgs) {
          console.log('get messages');
          console.log(msgs);
          $scope.messages = msgs;
        });
      }
    ]);
})();
