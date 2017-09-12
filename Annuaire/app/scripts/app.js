'use strict';

/**
 * @ngdoc overview
 * @name annuaireApp
 * @description
 * # annuaireApp
 *
 * Main module of the application.
 */
angular
  .module('annuaireApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
