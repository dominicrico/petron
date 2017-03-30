(function() {
  'use strict';

  angular.module('petron.core')
    .directive('petronDraggable', ['$document', '$rootScope', 'petron.daemon',
      function($document, $rootScope, petronDaemon) {
        return {
          restrict: 'A',
          link: function(scope, elem) {
            var origX = 525;
            var startX = 525;
            var x = 525;

            function mousemove(event) {
              x = event.pageX - startX;
              if (event.pageX - startX > 525) {
                angular.element(elem).css({
                  left: x + 'px',
                });
              }
            }

            function mouseup(event) {
              x = event.pageX - startX;
              if (x <= 720) {
                angular.element(elem).css({
                  left: origX + 'px',
                  transition: 'all 0.3s ease'
                });
                if (x < 530 && x >= 525) {
                  $rootScope.daemonBack();
                }
              } else if (x > 720) {
                angular.element(elem).css({
                  left: 820 + 'px',
                  transition: 'all 0.3s ease'
                });

                petronDaemon.disable();
              }

              $document.unbind('mousemove', mousemove);
              $document.unbind('mouseup', mouseup);
            }

            elem.on('mousedown', function(event) {
              event.preventDefault();
              event.stopPropagation();

              angular.element(elem).css({
                transition: 'none'
              });

              startX = event.pageX - x;

              $document.on('mousemove', mousemove);
              $document.on('mouseup',
                mouseup);
            });
          }
        };
      }
    ]);
})();
