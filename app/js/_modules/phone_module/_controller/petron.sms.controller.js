(function() {
  'use strict';

  angular.module('petron.modules.phone')
    .controller('controller.phonebox.sms', ['$scope', '$rootScope',
      'petron.phony',
      function($scope, $rootScope, petronPhony) {
        $rootScope.title = 'phone_module';
        $scope.messages = [];

        petronPhony.getMessages().then(function(messages) {
          var keys = Object.keys(messages);
          keys.forEach(function(key) {
            var msg = messages[key];
            msg.path = key;
            $scope.messages.push(msg);
          });

        }, function(err) {
          console.log(err);
        });
      }
    ]);
})();
