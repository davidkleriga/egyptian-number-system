///<reference path='../../types/references.d.ts' />

import EgyptianNumberSystem = require('../../types/egyptian-number-system');

var _ = require('underscore'),
	express = require('express'),
	router = express.Router(),

	UnitFractionSummationConverter = require('../models/unit-fraction');


router.get('/unit-fraction-conversions/:numerator/:denominator', function(request, response) {
	var rationalNumber = request.params;
	if ( rationalNumber.numerator && rationalNumber.denominator ) {
		var converter = new UnitFractionSummationConverter;
		converter.fromRationalNumber(rationalNumber)
			.then(function(unitFractionSummation:EgyptianNumberSystem.IRationalNumber[]){ 
				console.log('unit fraction', unitFractionSummation);
				rationalNumber.unitFractionSummation = unitFractionSummation;
				response.status(200);
				response.send(rationalNumber);
			}, () => response.end(500));
	} else {
		response.end(500);
	}
})


export = router;