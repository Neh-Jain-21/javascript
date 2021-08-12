const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => { });
const rstream = fs.createReadStream("./Stream/index.txt");

server.on("request",(req,res) => {
    rstream.pipe(res);
});

server.listen(80,"127.0.0.1",() => {
    console.log("Server Created");
});