const eventEmitter = require("events");
const customEmitter = new eventEmitter();

customEmitter.on("response", (name, id)=>{
    console.log(`data received ${name} with ${id}`);
});

customEmitter.on("response", (name)=>{
    console.log(`some other data ${name}`);
});

customEmitter.emit("response", "john", 13);
