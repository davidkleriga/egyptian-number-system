/// <reference path="../../types/references.d.ts" />

var applicationModule = angular.module('egyptianNumberSystem'),
   _:UnderscoreStatic = require('underscore');

applicationModule.filter('egyptianSummation', function(){

   return function(input){
   		return _.isArray(input) ?
   			_.map(input, (item:EgyptianNumberSystem.IRationalNumber) => item.numerator + '/' + item.denominator).join(' + ')
   			: '...is too much';
   }

});