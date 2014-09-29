/// <reference path="../types/references" />


var applicationModule = angular.module('egyptianNumberSystem', ['ngRoute']),
	unitFractionsController = require('./controllers/unit-fractions'),
	egyptianFractionFilter = require('./filters/egyptian-summation'),
	unitFractionConverter = require('./directives/unit-fraction-converter');

applicationModule.config( function main($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({ redirectTo: '/'});
})
