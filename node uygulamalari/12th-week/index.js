// express --> web sunucusuna gelen istekleri yönetmek, düzenlemek ve yayınlamak
const express = require('express');
const app = express();
const port = 7088;

// HTTP GET istegi icin bir rota tanimladik
// rota = ana dizin '/'
app.get("/", function(req, res){
	res.send("ornek");
});

// baska bir rota tanimladik
// rota = '/iletisimm' URL
app.get("/iletisimm", (req, res) => {
	res.sendFile(__dirname + "/iletisim.html");
});

app.get("/FormuGonder", (req, res) => {
	kullanici = {isim: req.query.name, soyisim: req.query.surname,}; // name ve surname html dosyasindaki
	console.log(kullanici.isim + " " + kullanici.soyisim);
	res.send(kullanici.isim + " " + kullanici.soyisim);
});

const server = app.listen(port, () =>{
	console.log("dinleniyor");
});
// __dirname --> o anki dosyanin bulundugu dizinin mutlak yolunu donduren bir degiskendir
