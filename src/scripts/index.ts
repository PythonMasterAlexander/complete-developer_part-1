// Simple express server from the book/express docs
import { routeHello, routeAPINames } from "./route.js";
import express from "express";

//Server on port 3000
const server = express();
const port = 3000;

//We create one endpoint called /hello
server.get('/hello', function(req, res){
		const response = routeHello(req, res);
		res.send(response);		
});

//Create one endpoint on /api/name" 
server.get("/api/name", async function (req, res) {
		let response;
		try {
				response = await routeAPINames(req, res);
		} catch (error) {
						console.log(error);
		}
		res.send(response);
});

server.listen(port, function () {
		console.log('Listining on ' + port);
});
