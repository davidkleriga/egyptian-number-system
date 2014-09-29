var childProcess = require('child_process'),
	forkProcess = childProcess.fork;

forkProcess('./server/api.js');