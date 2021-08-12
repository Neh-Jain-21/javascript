/** @format */

const express = require("express");
const hbs = require("hbs");
const app = express();

app.get("/", async (req, res) => {
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .catch((err) => console.log(err));
});

app.listen(3000, () => {
    console.log("Server Created");
});
