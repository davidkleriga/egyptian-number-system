var childProcess = require('child_process'),
	forkProcess = childProcess.fork;

forkProcess(__dirname + '/server/api.js');