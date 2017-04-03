(function() {
  'use strict';

  angular.module('petron.core.config', []);

  angular.module('petron.core.config').config(['$translateProvider',
    '$translatePartialLoaderProvider', 'tmhDynamicLocaleProvider',
    function(
      $translateProvider, $translatePartialLoaderProvider,
      tmhDynamicLocaleProvider) {

      $translatePartialLoaderProvider.addPart('locale');
      $translatePartialLoaderProvider.addPart('countries');
      $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: 'js/_locales/{part}_{lang}.json'
      });

      $translateProvider.useMessageFormatInterpolation();
      $translateProvider.preferredLanguage('de');
      $translateProvider.useSanitizeValueStrategy(null);

      tmhDynamicLocaleProvider.defaultLocale('de');
      tmhDynamicLocaleProvider.localeLocationPattern(
        './vendor/angular-i18n/angular-locale_{{locale}}.js');
    }
  ]);
})();
