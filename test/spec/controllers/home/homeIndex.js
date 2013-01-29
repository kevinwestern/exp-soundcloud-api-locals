'use strict';

describe('Controller: HomeIndexCtrl', function() {

  // load the controller's module
  beforeEach(module('clubfillerApp'));

  var HomeIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    HomeIndexCtrl = $controller('HomeIndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
