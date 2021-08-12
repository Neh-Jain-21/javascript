const express = require("express");
const app = express();
// const pathName = ;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello From Express JS");
});

app.get("/about", (req, res) => {
    res.send("Hello From About side");
});

app.get("/api", (req, res) => {
    res.send(
        [{
            "id": 1,
            "name": "Neh",
        },
        {
            "id": 2,
            "name": "Meet",
        }]
    );
});

app.listen(80,"127.0.0.1",() => {
    console.log("Server Created");
});