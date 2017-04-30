(function() {
  'use strict';

  angular.module('petron.modules.phone')
    .controller('controller.phonebox.sms', ['$scope', '$rootScope',
      'petron.phony',
      function($scope, $rootScope, petronPhony) {
        $rootScope.title = 'phone_module';
        $scope.messages = [];

        $scope.messages = petronPhony.getMessages();
        console.log(petronPhony.getMessages());
      }
    ]);
})();
