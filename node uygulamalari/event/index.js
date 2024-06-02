var events = require('events');
var eventEmitter = new events.EventEmitter();

var dinleme1 = function fonk1(){
	console.log('listener1 calisti');
}
var dinleme2 = function fonk2(data){
	console.log('listner2 calisti');
	console.log(data);
}

eventEmitter.addListener('tetik', dinleme1); // .on == .addListener ---> EventEmitter'a kayit
eventEmitter.on('tetik', dinleme2);

eventEmitter.on('tetik', (data)=>{
	console.log('listner3 calisti');
	console.log(data);
});

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'tetik');
console.log(eventListeners + " fonksiyon bagli");

// eventEmitter.emit('tetik'); // 2. ve 3. fonk data parametresi yok!!
eventEmitter.emit('tetik', {isim: "Huda"});

// baglanti kaldirma
eventEmitter.removeListener('tetik', dinleme2);
console.log('dineme2 artik dinalmeiyor');

// fire the 'tetik' event
eventEmitter.emit('tetik');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'tetik');
console.log(eventListeners + " fonksiyon bagli ve olayi dinliyor");

console.log('program BITTI ~ben de~');

// olayi yayinlamak --> emit() : eventEmitter.emit('olay'); --> 'olay' = tetiklenmek istenilen olay
// olayi dinlemek --> on() : eventEmitter.on('olay', function); --> 'olay tetiklendiginde 'function' caliscak
