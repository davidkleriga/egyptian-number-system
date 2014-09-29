///<reference path='../../types/references.d.ts' />

import EgyptianNumberSystem = require('../../types/egyptian-number-system');

var _ = require('underscore'),
	path = require('path'),
	express = require('express'),
	router = express.Router();

function returnIndexHtml(request, response){
	var indexPath = path.join(__dirname, '..', '..', 'html', 'templates', 'index.html');

	response.sendfile( indexPath );
}

function returnView(viewName) {

	return function(request, response){
		response.sendfile( path.join(__dirname,'..', '..', 'html', 'views', viewName + '.html'));
	}
}

router.get('/index.html', returnIndexHtml );
router.get('/unit-fraction-converter.html', returnView('unit-fraction-converter') );
router.get('/', returnIndexHtml );


export = router;