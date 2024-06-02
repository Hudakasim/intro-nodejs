var event = require('events');
var eventEmitter = new event.EventEmitter();

var listener1 = function fn1(){console.log("fn1 working"); }
var listener2 = function fn2(data){console.log(data); }
var listener3 = function fn3(data){console.log(data); }

eventEmitter.on('scream', listener1);
eventEmitter.on('send', listener2);
eventEmitter.on('scream', listener3);

eventEmitter.emit('scream', 'mesaj gonderildi');
eventEmitter.removeListener('scream', listener3);
eventEmitter.emit('scream');
