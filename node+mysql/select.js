var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user : "root",
	password : "Narin.78",
	database : "mydb"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Coneccted");
	con.query("SELECT name FROM customers", function(err, result, fields){
		if (err) throw err;
		console.log(result[3]);
	});
});
