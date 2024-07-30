const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("welcome to home page");
    }
    else if(req.url === "/about"){
        res.end("this is a about page");
    }
    else{
        res.write(`
        <h1> Oops </h1>
        <p>sorry we couldn't find the page you'r looking for</p>
        <a href='/'> back Home </a> 
    `)
        res.end();
    }
})

server.listen(5000);