// Simple express server from the book/express docs
import { routeHello, routeAPINames, routeWeather } from "./route.js";
import express, { Request, Response } from "express";
// Import the path module from Node.js
import path from "path";

//Server on port 3000
const server = express();
const port = 3000;

/* We create one endpoint called /hello
	
	You must follow the TypeScript convention of prefixing unused parameters
	with an underscore

*/
server.get('/hello', function(_req: Request, res: Response): void {
		const response = routeHello();
		res.send(response);		
});

/* Create endpoint on /api/name" 
	
	You must follow the TypeScript convention of prefixing unused parameters
	with an underscore

*/
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

/* Create a endpoint called /api/weather/:zipcode */
server.get(
		"/api/weather/:zipcode",
		function (req: Request, res: Response): void {
				const response = routeWeather({ zipcode: req.params.zipcode });
				res.send(response);
		}
);

/* We use react to show a page at the endpoint /components/weather 
		This endpoint is created in ./public/index.html 
*/
server.get(
		"/components/weather",
		function (req: Request, res: Response): void {
				const filePath = path.join(process.cwd(), "public", "index.html");
				res.setHeader("Content-Type", "text/html");
				res.sendFile(filePath);
		}
);

server.listen(port, function (): void {
		console.log('Listining on ' + port);
});
