var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Narin.78"
});

con.connect(function(err){
	if (err) throw err;
	console.log('Connected');
	con.query("CREATE DATABASE DBHuda", function (err){
		if (err) throw err;
		console.log('database created!!!!!!!');
	});
});
