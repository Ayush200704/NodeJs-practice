let path = require("path");

//this will give the seperator that is use in your os
console.log(path.sep);

//this will make a file path
const filePath = path.join("\content", "subfolder", "file.txt");
console.log(filePath);

//this will give the name of the file
console.log(path.basename(filePath));

//this will make the absolute path of the file
const absolute = path.resolve(__dirname, "content", "subfolder", "file.txt");
console.log(absolute);

