const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("", (req, res) => {
    res.render("index",{
        Name: "Neh",
    });
});

app.listen(80,"127.0.0.1",() => {
    console.log("Server Created");
});