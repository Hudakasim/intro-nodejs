var fs = require('fs');

fs.appendFile('Mynewfile1.txt', 'Hello content!!', function(err){
	if (err) throw err;
	console.log('Saved!!!');
});

// fs.appendFile() => appends specified content to a file.
// If the file does not exist, the file will be created:
