
'use strict';

clubfillerApp.controller('HomeCreateCtrl', function($scope, $routeParams, $http) {
  $http.get('/api/home/create').success(function(data) {
    $scope.home = data;
  });
});
