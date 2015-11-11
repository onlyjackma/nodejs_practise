var net = require('net');

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
			client.write(JSON.stringify(exp_data));
		}
		
	});

	client.on('end',function(){
		console.log("client closed");
		
	});

});
