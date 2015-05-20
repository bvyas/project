var displayApp = angular.module('displayApp', ['ngRoute']);





displayApp.config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/',{
            templateUrl: '/partials/events.html',
        })
        .otherwise({
          redirectTo: '/'
        });
    });