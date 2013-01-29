
'use strict';

clubfillerApp.controller('HomeIndexCtrl', function($scope, $routeParams, $http) {
  $scope.favorites = [];
  $scope.embedded = '';
  $http.get('/api/homes').success(function(users) {
    $scope.users = users;
    console.log($scope.users);
  });
  $scope.favoriteUser = function(user) {
    $scope.favorites.push(user);
  };
  $scope.playTrack = function(track) {
    SC.oEmbed(track.permalink_url, { auto_play: true }, function(oEmbed) {
        
        $scope.embedded = oEmbed;
        $scope.$apply();
    });
  };
});
