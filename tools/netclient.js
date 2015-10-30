var net = require('net');
var client = net.connect({port:8888},function(){
	console.log('connect the server!');
	client.write("hello server!\r\n");
});

client.on('data',function(data){
	console.log(data.toString());
	client.end();
});
client.on('end',function(){
	console.log('disconnect to the server');
});

