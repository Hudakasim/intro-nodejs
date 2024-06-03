// JSON dosyasiniveri kaynagi olarak kullanicaz
const express = require('express');

let app = express();

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
})
);

app.set('view engine', 'ejs'); //view klasorun icindeki ejs dosyasini html hale getir

let fs = require('fs');
var path = require('path');


app.get('/kullaniciListesi', (req,res)=>{
	fs.readFile(__dirname+"/"+"users.json", //filesystem baslangici "user.json" dosyasini okur
	(err,data)=>{ //jsondaki dataler = data
		if(err) {  return console.error(err.message) };
		obj = JSON.parse(data);
		let userArray = [];
		for (let i = 0; i < obj.length; i++){
			userArray.push(obj[i].isim+" "+obj[i].Soyisim);
			console.log(userArray);
		}
		console.log('*******1111*******');
		console.log(data);
		console.log('*******2222*******');
		console.log(obj);
		console.log('*******3333*******');
		console.log(userArray);
		res.render('index', { dropVals: userArray }); // index dosyasindaki dropVals degiskenini userArray'e
	} // 2. callback sonu
) // fileSystem sonu
} //callback sonu
); // get sonu


let port=7088;
app.listen(port, console.log(port+" dinleniyor"));

// JSON.parse() --> JSON formatinda olan string veriyi alir ve bunu JS nesnesine veya array'ine donusturur

// app.use(express.static('public')); -->  Express'e "public" adlı klasörü statik dosyaları (HTML, CSS, JavaScript, resimler vb.) barındıran bir klasör olarak kullanmasını söyler.
// app.use(express.urlencoded({ extended: true })) --> Express'e, gelen isteklerdeki (POST istekleri gibi) URL-encoded (form verileri) verilerini ayrıştırmasını söyler.

// fs.readFile() fonksiyonuyla okunan ham veriler bir buffer nesnesi oluyor
