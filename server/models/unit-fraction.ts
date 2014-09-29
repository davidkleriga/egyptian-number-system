///<reference path='../../types/references.d.ts' />

var RECURSION_LIMIT = 100;

var _ = require('underscore'),
	$q = require('q'),

	String = require('string');

import EgyptianNumberSystem = require('../../types/egyptian-number-system');

function isFunctionalNumber(value) {
	if ( isNaN(value) || value == 0 ) return false;
	return true;
}

function fail(...args:string[]) {
	throw 'illegal invocation ' + args.join(', ');
}

function wholeNumber(value){ return Math.floor(value);}


//binary remainder method
function smallestUnitPlusRemainder(numerator, denominator, list = [], recursionLimit = 0 ) {
	if ( recursionLimit >= RECURSION_LIMIT || (!isFinite(denominator))) return '... is too much';
	var cleanDivision = ( denominator % numerator == 0 ),
		unitFraction = { 
			numerator: 1, 
			denominator:  wholeNumber( denominator / numerator ) + (cleanDivision ? 0:1)
		},
		remainder = { 
			numerator: wholeNumber(numerator * unitFraction.denominator) - denominator, 
			denominator: wholeNumber( denominator * unitFraction.denominator)
		};


	list.push(unitFraction);
	// console.log('from: ', numerator, denominator, cleanDivision);
	// console.log('unit fraction', unitFraction );
	// console.log('remainder', remainder);
	if ( cleanDivision ) {
		return list;
	} else {
		return smallestUnitPlusRemainder(remainder.numerator, remainder.denominator, list, ++recursionLimit);
	}
}

class UnitFractionConverter {


	constructor(){

	}

	fromRationalNumber = (rationalNumber:EgyptianNumberSystem.IRationalNumber) => {
		return this.fromNumeratorAndDenominator(rationalNumber.numerator, rationalNumber.denominator);
	}

	fromNumeratorAndDenominator(numerator, denominator) {
		if ( isFunctionalNumber(numerator) && isFunctionalNumber(denominator))
			return $q.when(smallestUnitPlusRemainder(numerator, denominator, [ ]));
		else
			fail(numerator, denominator);
	}
}


export = UnitFractionConverter;