/** @format */

const express = require("express");
const app = express();
const auth = require("./routes/auth");

app.use(express.json());

//test Connection
const sequelize = require("./db/conn");
try {
    sequelize.authenticate();
    console.log("DB Connected");
} catch (error) {
    console.log(error);
}

//routes
app.use(auth);

//creating server
app.listen("5000", () => {
    console.log("Server Connected");
});
