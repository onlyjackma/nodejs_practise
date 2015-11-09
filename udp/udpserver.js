var dgram = require("dgram");

var server = dgram.createSocket("udp4");
var  clients = {};

server.on("error", function (err) {
  console.log("server error:\n" + err.stack);
  server.close();
});

server.on("message", function (msg, rinfo) {
  console.log("server got: " + msg + " from " +
    rinfo.address + ":" + rinfo.port);
	if(msg){
		var user = JSON.parse(msg);
		var rest = {};
		switch(user['type']){
			case "login":
				var userinfo={};
				userinfo['name'] = user['name'];
				userinfo['ip'] = rinfo.address;
				userinfo['port'] = rinfo.port;

				clients[user['name']] = userinfo;
				rest['type'] = 'login';
				rest['name'] = user['name'];
				rest['data'] = 'Login Success!';	
				break;
			case "getuser":
				var user = new Array();
				rest['type'] = 'getuser';
				var i = 0;
				for(var key in clients){
					user[i] = clients[key]
					i++;
				}
				rest['users'] = user;
				break;
			case "msg":
				console.log('data :'+user['data']);
				rest['type'] = 'msg';
				rest['data'] = user['data'];
				break;
			default:
				console.log('data :'+user['data']);
				rest['type'] = 'msg';
				rest['data'] = "HELLO MAN ! WHAT DO YOU WANT TO DO!";
				break;
		}
		if(rest){
			var message = JSON.stringify(rest);
			server.send(message,0,message.length,rinfo.port,rinfo.address,function(err){
				if(err){
					clients.remove(key);
					rinfo.close();
				}
			});
		}

	}


});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " +
      address.address + ":" + address.port);
});

server.bind(41234);
