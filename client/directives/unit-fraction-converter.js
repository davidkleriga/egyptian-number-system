var applicationModule = angular.module('egyptianNumberSystem');

applicationModule.directive('unitFractionConverter', function ($controller) {
    function link($scope, $element, $attributes) {
    }

    return {
        restrict: 'E',
        scope: false,
        link: link,
        replace: true,
        templateUrl: '/html/views/unit-fraction-converter.html'
    };
});
