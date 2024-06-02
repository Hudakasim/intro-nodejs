var express = require('express');
let app = express();

let fs = require('fs');
let path = require('path');

app.get('/listele', (req, res) => {
	fs.readFile(__dirname + "/" + "kullanicilar.json", (err, data) => {
		if (err) throw err;
		res.end(data);
	});
});

app.get("/:id", (req, res) => { // e.g --> http://localhost:7088/2
	fs.readFile(__dirname + "/" + "kullanicilar.json", (err, data) => {
		if (err) throw err;
		let kullanicilistesi = JSON.parse(data);
		console.log(kullanicilistesi["kullanici" + req.params.id].name);
		res.end(kullanicilistesi["kullanici" + req.params.id].name);
	});
});

const server = app.listen(7088, () =>{
	console.log("dinleniyor");
});


