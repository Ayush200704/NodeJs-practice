const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res)=>{
    // const text = fs.readFileSync("./big-file.txt", "utf8");
    // res.end(text);
    const stream = fs.createReadStream("./big-file.txt", { encoding: "utf8"})
    stream.on("open", ()=>{
        stream.pipe(res)
        //The pipe method is used to take the readable stream (stream in this case) 
        //and connect it to a writable stream (the HTTP response res in this case).
    })

    stream.on("error", (err)=>console.log(err));
})

server.listen(5000);