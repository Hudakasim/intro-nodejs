var fs = require('fs');

// Okuma akışı oluştur
var rs = fs.createReadStream('./demofile.txt', 'utf8');

// Veri olayını dinle ve okunan veriyi işleme
rs.on('data', function(chunk) {
    console.log(chunk);
});

// Dosya açıldığında bir mesaj yazdır
rs.on('open', function() {
    console.log('The file is open!');
});

// Dosya tamamen okunduğunda bir mesaj yazdır
rs.on('end', function() {
    console.log('The file is completely read.');
});

// Hata oluşursa hatayı yakala
rs.on('error', function(err) {
    console.error(err);
});
