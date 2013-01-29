'use strict';

describe('Controller: HomeUpdateCtrl', function() {

  // load the controller's module
  beforeEach(module('clubfillerApp'));

  var HomeUpdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    HomeUpdateCtrl = $controller('HomeUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
