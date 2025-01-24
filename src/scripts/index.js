// Simple express server from the book/express docs
const express = require('express');
const server = express();
const port = 3000;

server.get('/hello', function(req, res){
		res.send('Hello World, testing to see if live reload is enable');		
});

server.listen(port, function () {
		console.log('Listining on ' + port);
});
