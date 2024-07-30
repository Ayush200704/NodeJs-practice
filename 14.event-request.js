const http = require("http");


const server = http.createServer()

server.on("request", (req, res)=>{
    res.end("hi this is event request");
})

server.listen(5000);