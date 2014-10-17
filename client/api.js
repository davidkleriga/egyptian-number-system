/// <reference path="../types/references.d.ts" />
var $ = require('jquery'), angular = require('angular'), angularRoute = require('angular-route'), _ = require('underscore');

var applicationModule = angular.module('egyptianNumberSystem', ['ngRoute']), unitFractionsController = require('./controllers/unit-fractions'), egyptianFractionFilter = require('./filters/egyptian-summation'), unitFractionConverter = require('./directives/unit-fraction-converter');

applicationModule.config(function main($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({ redirectTo: '/' });
});
