var fs = require('fs');

fs.writeFile('myFile1.txt', 'Updating by writing!!', function (err){
	if (err) throw err;
	console.log('Replaced!');
});
