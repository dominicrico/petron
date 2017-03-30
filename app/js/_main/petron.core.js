(function() {
  'use strict';

  angular.module('petron.core.dependencies', [
    'angular-electron',
    'ui.router',
    'pascalprecht.translate',
    'ngDialog',
    'angularRangeSlider',
    'hmTouchEvents',
    'nemLogging',
    'ui-leaflet',
    'tmh.dynamicLocale',
    '19degrees.ngSweetAlert2'
  ]);

  angular.module('petron.core.modules', []);
  angular.module('petron.core.modules')
    .config(['remoteProvider', function(remoteProvider) {
      remoteProvider.register('fs');
      remoteProvider.register('path');
      remoteProvider.register('musicmetadata');
      remoteProvider.register('ffmpeg');
      remoteProvider.register('ffprobe');
      remoteProvider.register('ffprobe-static');
      remoteProvider.register('electron-json-storage');
      //remoteProvider.register('node-rpi-si4703');
      remoteProvider.register('node-obd');
      remoteProvider.register('obd-parser-development-connection');
    }]);

  angular.module('petron.core', [
    'petron.core.dependencies',
    'petron.core.config',
    'petron.core.modules',
    'petron.core.templates',
    'petron.core.routes'
  ]);
})();
