// Simple express server from the book/express docs
import { routeHello, routeAPINames, routeWeather } from "./route.js";
import express, { Request, Response } from "express";

//Server on port 3000
const server = express();
const port = 3000;

//We create one endpoint called /hello
server.get('/hello', function(_req: Request, res: Response): void {
		const response = routeHello();
		res.send(response);		
});

//Create endpoint on /api/name" 
server.get("/api/name", async function (_req: Request, res: Response): Promise<void> {
		let response: string;
		try {
				response = await routeAPINames();
				res.send(response);
		} catch (error) {
						console.log(error);
				}
		}
);

server.get(
		"/api/weather/:zipcode",
		function (req: Request, res: Response): void {
				const response = routeWeather({ zipcode: req.params.zipcode });
				res.send(response);
		}
);

server.listen(port, function (): void {
		console.log('Listining on ' + port);
});
