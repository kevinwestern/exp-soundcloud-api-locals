'use strict';

describe('Controller: HomeCreateCtrl', function() {

  // load the controller's module
  beforeEach(module('clubfillerApp'));

  var HomeCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    HomeCreateCtrl = $controller('HomeCreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
