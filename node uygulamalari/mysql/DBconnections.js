var mysql = require('mysql');
const express = require('express');
const app = express();
var path = require('path');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Narin.78"
});

con.connect(function(err){
	if(err) throw err;
	console.log('connected');
	con.query("CREATE DATABASE DBHUDA2", function (err){
		if (err) throw err;
		console.log('BD created');
	});
});

app.get('/iletisim', (req, res) => {
	res.sendFile(path.join(__dirname, 'iletisim.html'));
});

app.get('/createTable', (req, res) => {
	let nesne = {
		veriTabaniAdi: req.query.DBName,
		tabloAdi: req.query.tableName,
		alanadi1: req.query.columnName1,
		alanadi2: req.query.columnName2
	};
	let sql = "CREATE TABLE " +nesne.veriTabaniAdi+"."+nesne.tabloAdi+" ( "+nesne.alanadi1 + " VARCHAR(255),"+nesne.alanadi2+" VARCHAR(255));";
	con.query(sql, (err) => {
		if (err) throw err;
		res.send("table created");
	});
});

app.get('/select', (req, res) =>{
	let nesne = {
		veriTabaniAdi: req.query.DBName,
		tabloAdi: req.query.tableName,
		kosulAlani: req.query.kosulAlani,
		kosul: req.query.kosul
	};
	let sql = "SELECT * from "+nesne.veriTabaniAdi+"."+nesne.tabloAdi+" where "+ nesne.kosulAlani +" = '"+nesne.kosul +"';";
	con.query(sql, (err, result, fields)=>{
		if (err) throw err;
		console.log(result);
	});
});
let port = 7088;
app.listen(port, (err)=>{
	if(err) throw err;
	console.log("dinleniyor");
});

// http://localhost:7088/iletisim
