var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function(){
	console.log("监听器 listener1 执行");
}

var listener2 = function(){
	console.log("监听器 listener2 执行");
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" 监听器监听连接事件。");
eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('listener1不再受监听');

eventEmitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" 监听器监听连接事件。");
console.log('程序执行完毕！')
