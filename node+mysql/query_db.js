var mysql = require('mysql');

var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "Narin.78",
	database : "dbHuda"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");

	var createTable = "CREATE TABLE IF NOT EXISTS filmler (name VARCHAR(100), category VARCHAR(250))";

	con.query(createTable, function (err, result) {
	  if (err) throw err;
	  console.log("table created");

	  var insert = "INSERT INTO filmler (name, category) VALUES ('Home Alone','Comedy')";
	  con.query(insert, function(err, result){
		if (err) throw err;
		console.log("Record inserted");
	  });
	});

	var sorgulama = "SELECT * FROM filmler";
	con.query(sorgulama, function(err, result){
		if (err) throw err;
		console.log(result);
	})
  });
