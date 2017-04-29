'use strict';

describe('Module: Health', function() {
  var scope, controller, rootScope;

  beforeEach(function() {
    module('petron');
  });

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    controller = $controller(
      'controller.healthbox.main', {
        '$scope': scope,
        '$rootScope': rootScope,
      });
    scope.connector = window.require(
      'obd-parser-development-connection');
  }));

  it('should connect to the obd adapter', function() {
    scope.$apply();
    expect(scope.isConnected).not.toEqual(false);
  });

  it('should get current speed', function() {
    scope.$apply();
    expect(scope.speed).not.toEqual(0);
  });

  it('should get current rpm', function(done) {
    scope.$apply();
    expect(scope.tacho).not.toEqual(0);
  });
});
