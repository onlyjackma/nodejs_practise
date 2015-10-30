var net = require('net');
var User = require('./user');

var server  = net.createServer();
server.listen(9000);

server.on('connection',function(client){
	console.log("Client connect from :"+client.remoteAddress +' and '+client.remotePort);
	
	client.on('data',function(data){
		console.log("data:"+data);
		var tobj = JSON.parse(data);
		if(tobj['type'] != undefined && tobj['type'] == 'login'){
			//var user = new User;
			//user.setId(tobj['id']);
			console.log(tobj['type']);
		}
		client.write(data.toString());
	});
//	setInterval(function(){
//		if(client.writable)
//		client.write("ni lai da wo sa!");
//	},3000);
	client.on('end',function(){
		console.log("client closed");
		
	});

});
