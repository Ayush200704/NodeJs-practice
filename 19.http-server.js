const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("./18.http-html.html");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write(homePage);
        res.end();
        // res.writeHead(200, {"content-type": "text/plain"})
        // res.write(homePage);
        // res.end();
    }
    else if(req.url === "/about"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write("<h1>about page</h1>");
        res.end();
    }
    else{
        res.writeHead(404, {"content-type": "text/html"})
        res.write("<h1>page not found</h1>");
        res.end();
    }
})

server.listen(5000);