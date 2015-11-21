var net = require('net');
//var moment = require('moment');

var server  = net.createServer();
server.listen(9000);
var clients = {};

var exp_data={ "datas" : [{
		"id" : "id12345",
		"senstate" : "xxxx",
		"load_current" : "300",
		"load_voltage" : "12",
		"temp" : "40",
		"rtc_time" : "123456789",
		"uptime" : "1200",
		"switch_state" : "up/down"
	}, {
		"id" : "id12345",
		"senstate" : "xxxx",
		"load_current" : "301",
		"load_voltage" : "11",
		"temp" : "23",
		"rtc_time" : "12345678910",
		"uptime" : "2500",
		"switch_state" : "up/down"
	}
]
};

server.on('connection',function(client){
	console.log("Client connect from :"+client.remoteAddress +' and '+client.remotePort);
	
	client.on('data',function(data){
		console.log("data:"+data);
		//var tobj = JSON.parse(data);
		if(data){
			var devmsg = JSON.parse(data);
			if(devmsg['type'] != undefined && devmsg['type'] == "register"){
					client.sn = devmsg['sn'];
					clients[devmsg['sn']] = client;

			}else if(devmsg['type'] != undefined && devmsg['type'] == "msg"){
				exp_data['datas'][1]['temp'] = new Date();
				client.write(JSON.stringify(exp_data));
			}
		}
		
	});
	
	client.on('end',function(){
		console.log("client closed");
		clients[client.sn] = null;
		delete clients[client.sn];
	});

	client.on('error',function(err){
		console.log("client error "+err);
		clients[client.sn] = null;
		delete clients[client.sn];
	});

});

server.on('error',function(err){
	console.log(err);

});
