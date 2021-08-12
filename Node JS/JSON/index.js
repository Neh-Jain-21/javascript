/** @format */

const fs = require("fs");

const bioData = {
    Name: "Neh Jain",
    Age: "21",
    College: "LDRP",
};

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

fs.writeFile("./JSON/index.json", jsonData, (err) => {
    console.log("Write Successful");
});

const rfile = fs.readFile("./JSON/index.json", "utf-8", (err, data) => {
    console.log("Read Successful");
    const argData = JSON.parse(data);
    console.log(argData);
});
