var applicationModule = angular.module('egyptianNumberSystem');

applicationModule.controller('unitFractionsController', function ($scope, $http, $filter) {
    var egyptianSummationFilter = $filter('egyptianSummation');

    $scope.rationalNumber = { numerator: 5, denominator: 121, unitFractionSummation: [] };
    $scope.formattedSolution = '';

    $scope.$watch('rationalNumber', $scope.calculate, true);

    $scope.calculate = function (rationalNumber) {
        if (typeof rationalNumber === "undefined") { rationalNumber = $scope.rationalNumber; }
        console.log('calculating', rationalNumber);

        $http.get('/unit-fraction-conversions/' + rationalNumber.numerator + '/' + rationalNumber.denominator).then(function (response) {
            return response.data;
        }).then(function (rationalNumber) {
            return $scope.rationalNumber.unitFractionSummation = rationalNumber.unitFractionSummation;
        }).then(function (unitFractionSummation) {
            return $scope.formattedSolution = egyptianSummationFilter(unitFractionSummation);
        });
        // .then( (data) => console.log(data))
    };

    _.defer($scope.calculate);
});
