var http = require('http');
// create a server object
http.createServer(function (req, res){
	//writeHead: 1 argument => status code 2 argument => object containing the response headers
	res.writeHead(200, {'content-type': 'text/html'});
	res.write('Huda ben!!'); // write a response to the client
	res.end(); // end the reaponse
}).listen(8080); // the server object listens on port 8080
