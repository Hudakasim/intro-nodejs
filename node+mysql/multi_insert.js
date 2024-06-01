var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user : "root",
	password : "Narin.78",
	database : "mydb"
});

/* con.connect(function(err){
	if (err) throw err;
	console.log("Coneccted");
	var sql = "INSERT INTO customers (name, address) VALUES ?";
	var values = [
		['John', 'Highway 71'],
		['Peter', 'Lowstreet 4'],
		['Amy', 'Apple st 652'],
		['Hannah', 'Mountain 21'],
		['Michael', 'Valley 345'],
		['Sandy', 'Ocean blvd 2'],
		['Betty', 'Green Grass 1'],
		['Richard', 'Sky st 331'],
		['Susan', 'One way 98'],
		['Vicky', 'Yellow Garden 2'],
		['Ben', 'Park Lane 38'],
		['William', 'Central st 954'],
		['Chuck', 'Main Road 989'],
		['Viola', 'Sideway 1633']
	  ];
	con.query(sql, [values], function(err, result){
		if (err) throw err;
		console.log(result.affectedRows + " record inserted");
	});
}); */

/* {
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
} */

con.connect(function(err) {
	if (err) throw err;
	console.log("connected again");
	var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
	con.query(sql, function (err, result) {
	  if (err) throw err;
	  console.log("1 record inserted, ID: " + result.insertId);
	});
  });
