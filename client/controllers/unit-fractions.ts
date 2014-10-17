/// <reference path="../../types/references.d.ts" />

var applicationModule = angular.module('egyptianNumberSystem'),
   _:UnderscoreStatic = require('underscore');


applicationModule.controller('unitFractionsController', function($scope:EgyptianNumberSystem.IUnitFractionControllerScope, $http, $filter){

    var egyptianSummationFilter = $filter('egyptianSummation');

    $scope.rationalNumber = { numerator: 5, denominator: 121, unitFractionSummation: [] }
    $scope.formattedSolution = '';

    $scope.$watch('rationalNumber', $scope.calculate, true);

    $scope.calculate = function(rationalNumber = $scope.rationalNumber) {
    	// console.log('calculating', rationalNumber);

    	return $http.get('/unit-fraction-conversions/' + rationalNumber.numerator + '/' + rationalNumber.denominator)
    		.then( (response) => response.data )
            .then( (rationalNumber) => $scope.rationalNumber.unitFractionSummation = rationalNumber.unitFractionSummation )
    		.then( (unitFractionSummation) => $scope.formattedSolution = egyptianSummationFilter(unitFractionSummation) )
            .then( () => rationalNumber.unitFractionSummation);
            // .then( (data) => console.log(data))
    }
    
    _.defer($scope.calculate);
});