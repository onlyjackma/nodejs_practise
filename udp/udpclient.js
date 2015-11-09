var dgram = require('dgram');
//var message = new Buffer("Some bytes");
var client = dgram.createSocket("udp4");
//var process = require("process");


//client.send(message, 0, message.length, 41234, "localhost", function(err) {
//	if(err){
//  		client.close();
//	}
//});

client.on('message',function(data,ser){
	var res = JSON.parse(data);

	if(res){
		switch(res['type']){
			case "getuser":
				for(var usr in res['users']){
					var usrinfo = res['users'][usr];
					console.log("name :"+usrinfo['name'] + " ip: "+usrinfo['ip'] + " port: "+usrinfo['port']);
				}
				break;
			case "login":
				console.log("data: "+ res['data']);
				break;
			default:
				console.log("data :" + res['data']);
				break;
		}
	}

});

client.on('error',function(err){
	console.log("socket error!");
	client.close();
});

var user={};
user['name'] = process.argv[2]

process.stdin.on('readable',function(){
	var data =  process.stdin.read();
	if(data){
		var pdata = data.toString().trim();
		switch(pdata){
			case "LOGIN":
				console.log("login to server");
				user['type'] = 'login';
				break;
			case "GETUSER":
				console.log("getusers");
				user['type'] = 'getuser';
				break;
			default:
				if(pdata){
					user['data'] = pdata;
					user['type'] = 'msg';
					console.log("send :"+pdata);
				}
				break;
		}

		var message = JSON.stringify(user);
		
		client.send(message, 0, message.length, 41234, "localhost", function(err) {
			if(err){
				client.close();
			}
		});
	}
});
