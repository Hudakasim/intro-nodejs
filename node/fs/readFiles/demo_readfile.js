
// CREATE A NODE.JS FILE THAT READS THE HTML FILE
//AND RETURN THE CONTENT
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	fs.readFile('demofile.html', function(err, data){
		res.writeHead(200, {'Content-type':'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);
