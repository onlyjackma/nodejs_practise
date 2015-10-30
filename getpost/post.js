var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req,rep){
	var post='';
	req.on('data',function(data){
		post += data;
	});
	req.on('end',function(){
		console.log(post.toString());
		post = querystring.parse(post);
		rep.end(util.inspect(post));
	});


}).listen(8888);
