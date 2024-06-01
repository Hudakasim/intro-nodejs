var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt'); // okuma akisi olusturnmak
rs.on('open', function(err){ // dosya acildiginda 'open' olayi tetiklenir ve belirtilen geri cagirma fonksiyonu calisir
	if (err) throw err;
	console.log('The file is open!!');
});
