/** @format */

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Hello Home");
    } else if (req.url == "/contactus") {
        res.end("Hell ContactUs");
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1> 404 Error, Not Found </h1>");
    }
});

server.listen(80, "127.0.0.1", () => {
    console.log("Server Created");
});
