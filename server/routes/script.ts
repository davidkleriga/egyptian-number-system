///<reference path='../../types/references.d.ts' />

import EgyptianNumberSystem = require('../../types/egyptian-number-system');

var _ = require('underscore'),
	path = require('path'),
	express = require('express'),
	browserify = require('browserify-middleware'),
	router = express.Router();

function returnIndexScript(request, response){
	var indexScript = path.join(__dirname, '..', '..', 'client', 'api.js');

	return browserify(indexScript, {} )(request, response);
}

router.get('/index.js', returnIndexScript );


export = router;