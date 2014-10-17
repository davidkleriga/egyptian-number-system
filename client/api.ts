/// <reference path="../types/references.d.ts" />

var $:JQueryStatic = require('jquery'),
	angular:ng.IAngularStatic = require('angular'),
	angularRoute = require('angular-route'),
   _:UnderscoreStatic = require('underscore');



var applicationModule:ng.IModule = angular.module('egyptianNumberSystem', ['ngRoute']),
	unitFractionsController = require('./controllers/unit-fractions'),
	egyptianFractionFilter = require('./filters/egyptian-summation'),
	unitFractionConverter = require('./directives/unit-fraction-converter');

applicationModule.config( function main($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({ redirectTo: '/'});
})
