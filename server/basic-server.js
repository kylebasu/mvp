var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');
// var server = http.createServer(function(req, resp){
// 	var path = url.parse(req.url, true).pathname;
// 	if(req.method === 'GET'){

// 		if(path === '/'){
// 			resp.writeHead(200,{'Content-Type':'text/html'});
// 			fs.readFile(__dirname+ '/../client/index.html', function(err, data){
// 				if(err) console.log(err);
// 				resp.end(data);
// 			});
// 		}
// 	}
// });
// server.listen(1337);

app = express();
app.use(express.static('client'));
app.listen(1337);
// app.get('/', function(req, res){

// });