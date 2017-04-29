(function() {
  'use strict';

  angular.module('petron.modules.phone')
    .controller('controller.phonebox.main', ['$scope', '$rootScope',
      function($scope, $rootScope) {
        $rootScope.title = 'phone_module';
      }
    ]);
})();
