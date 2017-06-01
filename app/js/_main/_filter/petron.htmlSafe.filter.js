(function() {
  "use strict";

  angular.module('petron.core')
    .filter("htmlSafe", ['$sce', function($sce) {
      return function(htmlCode) {
        return $sce.trustAsHtml(htmlCode);
      };
    }]);
})();
