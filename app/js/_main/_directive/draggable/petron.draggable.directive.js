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
              event.preventDefault();
              event.stopPropagation();
              var pageX = event.originalEvent.touches[0].pageX;
              x = pageX - startX;
              if (pageX - startX > 525) {
                angular.element(elem).css({
                  left: x + 'px',
                });
              }
            }

            function mouseup(event) {
              $rootScope.enableTouchSwipeEvents = true;
              event.preventDefault();
              event.stopPropagation();
              var pageX = event.originalEvent.changedTouches[0].pageX;
              x = pageX - startX;
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

              $document.unbind('touchmove', mousemove);
              $document.unbind('touchend', mouseup);
            }

            elem.on('touchstart', function(event) {
              $rootScope.enableTouchSwipeEvents = false;
              event.preventDefault();
              event.stopPropagation();
              var pageX = event.originalEvent.touches[0].pageX;

              angular.element(elem).css({
                transition: 'none'
              });

              startX = pageX - x;

              $document.on('touchmove', mousemove);
              $document.on('touchend',
                mouseup);
            });
          }
        };
      }
    ]);
})();
