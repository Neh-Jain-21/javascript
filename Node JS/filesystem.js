/** @format */

const fs = require("fs");

fs.writeFileSync("bio.txt", "Hello");

fs.appendFileSync("bio.txt", " World");

console.log(fs.readFileSync("bio.txt").toString());

fs.renameSync("bio.txt", "mybio.txt");

fs.rmSync("mybio.txt");
