// METHOD 0 OF ASYNC READ AND WRITE FILE 
// const fs = require("fs");

// fs.readFile("./first.txt", "utf8", (err, result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     const first = result;
//     fs.readFile("./second.txt", "utf8", (err, result)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second = result;
//         fs.writeFile("./result-async.txt", `result is ${first} and ${second}`, (err, result)=>{
//             if(err){
//                 console.log(err);
//                 return
//             }
//             console.log("done with the task");
//         })
//     })
// })

// console.log("staring the second task");



//METHOD 1 OF ASYNC READ FILE
// const fs = require("fs");
// function asyncRead(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, "utf8", (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }

// asyncRead("./first.txt")
// .then((result) => console.log(result))
// .catch((err) => console.log(err));


//METHOD 2 OF ASYNC READ AND WRITE FILE
// const fs = require("fs")
// const util = require("util");
// let readFilePromise = util.promisify(fs.readFile);
// let writeFilePromise = util.promisify(fs.writeFile);
// const start = async() =>{
//     try {
//         const first = await readFilePromise("./first.txt", "utf8");
//         const second = await readFilePromise("./second.txt", "utf8");
//         console.log(first, second)
//         writeFilePromise("./write-file-promise.txt", `result: ${first} and ${second}`);
//     } catch (error) {
//         console.log(error);
//     }
// }

// start();




//METHOD 3 OF ASYNC READ AND WRITE FILE
const fs = require("fs").promises;

const start = async() =>{
    try {
        const first = await fs.readFile("./first.txt", "utf8");
        const second = await fs.readFile("./second.txt", "utf8");
        fs.writeFile("./write-file-promise.txt", `result: ${first} and ${second}`, {flag: "a"})
        console.log(first + " " + second)
    } catch (error) {
        console.log(error);
    }
}
start();








