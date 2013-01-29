
'use strict';

clubfillerApp.controller('HomeViewCtrl', function($scope, $routeParams, $http) {
  $http.get('/api/home/view/:id').success(function(data) {
    $scope.home = data;
  });
});
