var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file){
	if (err) throw err;
	console.log('SAVED!');
});
// w for writing
// fr.open() => specified file is opened for writing.
//If the file does not exist, an empty file is created
