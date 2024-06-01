var fs = require('fs');

fs.appendFile('myFile1.txt', 'updating', function (err){
	if (err) throw err;
	console.log('Updated!!');
});
// add content to the end without replacing
