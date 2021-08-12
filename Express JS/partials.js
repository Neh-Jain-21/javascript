const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("view engine", "hbs");
hbs.registerPartials("partials")

app.get("/", (req, res) => {
    res.render("index",{
        Name: "Neh",
    });
});

app.get("*", (req, res) => {
    res.render("404");
});

app.listen(80,"127.0.0.1",() => {
    console.log("Server Created");
});