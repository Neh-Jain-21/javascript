/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs",
});

//get all juice
app.get("/", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query("SELECT * FROM JUICE", (err, rows) => {
            connection.release();

            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

//get juice by id
app.get("/:id", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        const id = req.params.id;

        connection.query(
            `SELECT * FROM JUICE WHERE id = ${id}`,
            (err, rows) => {
                connection.release();

                if (!err) {
                    res.send(rows);
                } else {
                    console.log(err);
                }
            }
        );
    });
});

//delete juice by id
app.delete("/:id", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        const id = req.params.id;

        connection.query(`DELETE FROM JUICE WHERE id = ${id}`, (err, rows) => {
            connection.release();

            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

//iNSERT juice by id
app.post("/addJuice", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        const params = req.body;

        connection.query(
            "INSERT INTO JUICE (`name`, `tagline`, `description`, `image`) VALUES ('" +
                params.name +
                "','" +
                params.tagline +
                "','" +
                params.description +
                "','" +
                params.image +
                "')",
            (err, rows) => {
                connection.release();

                if (!err) {
                    res.send(params);
                } else {
                    console.log(err);
                }
            }
        );
    });
});

//iNSERT juice by id
app.put("/addJuice", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        const params = req.body;

        connection.query(
            "UPDATE `juice` SET `name`='" +
                params.newName +
                "',`tagline`='" +
                params.newTagline +
                "',`description`='" +
                params.newDiscription +
                "',`image`='" +
                params.newImage +
                "' WHERE `name`='" +
                params.name +
                "'",
            (err, rows) => {
                connection.release();

                if (!err) {
                    res.send(rows);
                } else {
                    console.log(err);
                }
            }
        );
    });
});

app.listen(port, () => {
    console.log("Server Created");
});
