var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');

app = express();
app.use(express.static('client'));

app.get('/horns', function(req, res){
	res.writeHead(200)
	var returnVal = JSON.stringify( {results:[[300,250], [575,5], [50,5], [200,150], [400,150]] } );
	res.end(returnVal);
});

app.get('/post', function(req, res){
	res.writeHead(200)
	var returnVal = JSON.stringify( {results:[[200,225], [400,275], [75, 175], [500,150], [200,50]] } );
	res.end(returnVal);
});

app.get('/screen', function(req, res){
	res.writeHead(200)
	var returnVal = JSON.stringify( {results:[[180,250], [575,5], [50,5], [200,20], [250,225]] } );
	res.end(returnVal);
});

app.listen(1337);
// app.get('/', function(req, res){

// });