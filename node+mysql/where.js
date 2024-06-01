var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user : "root",
	password : "Narin.78",
	database : "mydb"
});

con.connect(function(err){
	if (err) throw err;
	/* var sql = "SELECT * FROM customers WHERE address LIKE 'S%'";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log(result);
	}); */
	/* var adr = 'Mountain 21';
	var sql = 'SELECT * FROM customers WHERE address = ?';
	con.query(sql, [adr], function (err, result) {
  		if (err) throw err;
  		console.log(result);
	}); */
	var name = 'Amy';
	var adr = 'Mountain 21';
	var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
	con.query(sql, [name, adr], function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
