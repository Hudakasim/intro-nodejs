var fs = require('fs');

fs.rename('myFile1.txt', 'renamed.txt', function (err){
	if (err) throw err;
	console.log('File renamed!!');
});
