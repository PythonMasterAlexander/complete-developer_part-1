var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Simple express server from the book/express docs
import { routeHello, routeAPINames, routeWeather } from "./route.js";
import express from "express";
//Server on port 3000
const server = express();
const port = 3000;
//We create one endpoint called /hello
server.get('/hello', function (_req, res) {
    const response = routeHello();
    res.send(response);
});
//Create endpoint on /api/name" 
server.get("/api/name", function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        try {
            response = yield routeAPINames();
            res.send(response);
        }
        catch (error) {
            console.log(error);
        }
    });
});
server.get("/api/weather/:zipcode", function (req, res) {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});
server.listen(port, function () {
    console.log('Listining on ' + port);
});
