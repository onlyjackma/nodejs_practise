var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,rep){
	rep.writeHead(200,{'Content-Type':'text/plain'});
	rep.end(util.inspect(url.parse(req.url,true)));
}).listen(8888);
