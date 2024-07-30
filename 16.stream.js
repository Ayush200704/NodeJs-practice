const fs = require("fs")
const stream = fs.createReadStream("./big-file.txt", {highWaterMark:90000, encoding: "utf8"});

stream.on("data", (result)=>{
    //data event will read the file in chucks and lifetime is there when file is fully read
    console.log(result);
})

stream.on("error", (err)=>{console.log(err)})