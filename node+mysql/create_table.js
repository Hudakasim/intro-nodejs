var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user : "root",
	password : "Narin.78",
	database : "mydb"
});

con.connect(function (err){
	if (err) throw err;
	console.log("Coneccted!");
	var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
	con.query(sql, function (err, result){
		if (err) throw err;
		console.log("Table createddd");

		var sql2 = "ALTER TABLE customers ADD COLUMN phone INT";
		con.query(sql2, function (err, result){
			if (err) throw err;
			console.log("column added");
		});
	});
});

