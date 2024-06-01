var events = require('events');
// yeni obje olusturuldu --> olaylari dinlemek ve ya yayinlamak icin kullanilir
var eventEmitter = new events.EventEmitter();

var myEventHandler = function (){ // bu fonksiyon tetiklendiginde calisir
	console.log('I hear a scream!');
}

// scream olayi tetiklendiginde myEventHandler calistirilir
eventEmitter.on('scream', myEventHandler);
// fire the 'scream' event (tetikledi)
eventEmitter.emit('scream');

// olayi yayinlamak --> emit()
// olayi dinlemek --> on()
