var applicationModule = angular.module('egyptianNumberSystem'), _ = require('underscore');

applicationModule.filter('egyptianSummation', function () {
    return function (input) {
        return _.map(input, function (item) {
            return item.numerator + '/' + item.denominator;
        }).join(' + ');
    };
});
