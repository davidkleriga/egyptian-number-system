///<reference path='../types/references.d.ts' />

var PORT = process.env.PORT || 3000;

var connect = require('connect'),
	path = require('path'),
	express = require('express'),
	browserify = require('browserify-middleware'),

	http = require('http'),
	String = require('string'),

	htmlRoutes = require('./routes/html'),
	scriptRoutes = require('./routes/script'),
	unitFractionConversionRoutes = require('./routes/unit-fraction-conversions');

var rootDirectory = path.join(__dirname, '..');


export function launch(){
	var application = express(),
		server = http.createServer(application);

	application.use(unitFractionConversionRoutes);
	application.use(htmlRoutes);
	application.use(scriptRoutes);
	application.use(express.static(rootDirectory));

	server.listen(PORT, function(){
		console.log('server listening on ', PORT);	
	});
}


if ( module == (<any>require).main) {
	launch();
}

