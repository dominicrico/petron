(function() {
  'use strict';

  angular.module('petron.modules.phone')
    .controller('controller.phonebox.sms', ['$scope', '$rootScope',
      function($scope, $rootScope) {
        $rootScope.title = 'phone_module';
      }
    ]);
})();
