'use strict';

var clubfillerApp = angular.module('clubfillerApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/api/home/index', {
        templateUrl: 'views/home/homeIndex.html',
        controller: 'HomeIndexCtrl'
      })
      .when('/api/home/create', {
        templateUrl: 'views/home/homeCreate.html',
        controller: 'HomeCreateCtrl'
      })
      .when('/api/home/update/:id', {
        templateUrl: 'views/home/homeUpdate.html',
        controller: 'HomeUpdateCtrl'
      })
      .when('/api/home/view/:id', {
        templateUrl: 'views/home/homeView.html',
        controller: 'HomeViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .constant('SHORTEN_LENGTH', 70)
  .filter('shorten', function(SHORTEN_LENGTH) {
    return function(text) {
      return text.length < SHORTEN_LENGTH ? text : text.substring(0, SHORTEN_LENGTH) + '...';
    };
  })
  .directive('embedPlayer', function() {
    return function(scope, element, attrs) {
      scope.$watch(attrs.embedPlayer, function(value) {
        if (!value) {
          return;
        }
        element[0].innerHTML = value.html;
      });
    };
  });
