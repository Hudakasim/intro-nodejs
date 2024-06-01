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
	var sql = "INSERT INTO customers (name, address) VALUES ('Company1','Highway 37')";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log("1 record inserted");
	});
});
