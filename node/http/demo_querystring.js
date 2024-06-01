var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.end(txt);
}).listen(8080);

// URL'yi ayrıştırır ve sorgu parametrelerini çıkarır
// year (yıl) ve month (ay) sorgu parametrelerini bir dize olarak birleştirir.
// Birleştirilen dizeyi yanıt olarak gönderir.
