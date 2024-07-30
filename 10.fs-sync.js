const fs = require("fs");

let first = fs.readFileSync("./first.txt", "utf8");
console.log(first);

let second = fs.readFileSync("./second.txt", "utf8");
console.log(second);

fs.writeFileSync("result.txt", `result is ${first} and ${second}`);