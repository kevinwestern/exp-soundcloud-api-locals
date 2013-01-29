
'use strict';

clubfillerApp.controller('HomeUpdateCtrl', function($scope, $routeParams, $http) {
  $http.get('/api/home/update/:id').success(function(data) {
    $scope.home = data;
  });
});
