var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user : "root",
	password : "Narin.78"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connectes!");
	con.query("CREATE DATABASE mydb", function (err, result){
		if (err) throw err;
		console.log("database created");
	});
});
