'use strict';

angular.module('iotUiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
    'leaflet-directive'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    });
