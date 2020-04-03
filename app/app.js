'use strict';

// Declare app level module which depends on views, and core components
angular.module('numberGenerator', [
  'ngRoute',
  'numberGenerator.home',
  'numberGenerator.createGenerator',
  'numberGenerator.listOfGenerators',
  'numberGenerator.numbersView'
])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.otherwise({ redirectTo: '/' });
  }]);
