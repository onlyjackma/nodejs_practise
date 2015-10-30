var net = require('net');
var User = require('./user');

var server  = net.createServer();
server.listen(9000);
var clients = {};

server.on('connection',function(client){
	console.log("Client connect from :"+client.remoteAddress +' and '+client.remotePort);
	
	client.on('data',function(data){
		console.log("data:"+data);
		var tobj = JSON.parse(data);
		if(tobj['type'] != undefined && tobj['type'] == 'login'){
			var user = new User;
			user.setId(tobj['id']);
			user.setName(tobj['name']);
			user.setSocket(client);
			console.log(tobj['type']);
		
			clients[tobj['id']] = user;
		
			client.write("login success!");
		}else if(tobj['type'] != undefined && tobj['type'] == 'msg'){
			var dest_usr_id = tobj['dest_id'];
			var dest_usr;
			if(dest_usr_id){
				dest_usr = clients[dest_usr_id];
			}else{
				client.write("who do you want to send msg to!");
				return;
			}
			if(dest_usr){
				var dest_sock = dest_usr.getSocket();
				if(dest_sock.writable){
					dest_sock.write(tobj['name']+" say :"+tobj['msg']);
				}else{
					client.write(dest_usr_id+" is off line!");
				}
			}
			
		}
		
		//client.write(data.toString());
	});

//	setInterval(function(){
//		if(client.writable)
//		client.write("ni lai da wo sa!");
//	},3000);
	client.on('end',function(){
		console.log("client closed");
		
	});

});
