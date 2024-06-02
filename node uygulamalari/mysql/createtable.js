var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Narin.78",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	console.log("connected");
	var sorgu = "CREATE TABLE musteri (name VARCHAR(255), surname VARCHAR(255))";
	con.query(sorgu, function(err, result){
		if (err) throw err;
		console.log("Table created" + result);
	})
})
