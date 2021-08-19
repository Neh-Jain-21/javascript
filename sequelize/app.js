/** @format */

const express = require("express");
const app = express();
const auth = require("./routes/auth");

app.use(express.json());

//routes
app.use(auth);

//creating server
app.listen("5000", () => {
    console.log("Server Connected");
});
