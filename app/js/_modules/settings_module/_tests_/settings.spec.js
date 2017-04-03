'use strict';

describe('Module: Settings', function() {
  var scope, controller, rootScope;

  beforeEach(function() {
    module('petron');
  });

  beforeEach(inject(function($rootScope, $controller) {

    scope = $rootScope.$new();
    rootScope = $rootScope;
    controller = $controller(
      'controller.settingsbox.main', {
        '$scope': scope,
        '$rootScope': rootScope
      });
  }));

  it('should load the scope and rootScope with basic settings', function() {
    expect(scope).not.toEqual({});
    expect(scope.settings).not.toEqual({});
    expect(rootScope).not.toEqual({});
    expect(rootScope.settings).not.toEqual({});
  });

  it('should change the locale to "en"', function() {
    scope.settings.locale = 'en';
    scope.$apply();
    setTimeout(function() {
      expect(scope.settings.locale).toEqual('en');
      expect(rootScope.settings.locale).toEqual('en');
    }, 25);
  });

  it('should change the locale to "en" and back to "de"', function() {
    scope.settings.locale = 'en';
    scope.$apply();
    scope.settings.locale = 'de';
    scope.$apply();
    setTimeout(function() {
      expect(scope.settings.locale).toEqual('de');
      expect(rootScope.settings.locale).toEqual('de');
    }, 25);
  });
});
