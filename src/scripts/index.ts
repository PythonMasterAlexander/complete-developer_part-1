// Simple express server from the book/express docs
import { routeHello, routeAPINames, routeWeather } from "./route.js";
import express, { Request, Response } from "express";
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
				/* Here you need to set the right path
						 When using node index.js to run the server you need to use the right path
							The right path is where you keep the file index.js
						 In this case, when compiling TS to JS the file is compiled to ./dist/src/scripts/index.js
							When setting the right path in this code, you need to work out the right path from where the 
							index.js file is located
				*/
				const filePath = path.join(process.cwd(), "../../../public", "weather.html");
				res.setHeader("Content-Type", "text/html");
				res.sendFile(filePath);
		}
);

server.listen(port, function (): void {
		console.log('Listining on ' + port);
});
