/** @format */

const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

//set storage engine
const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

//init upload
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        //allowed extensions
        const fileTypes = /jpeg|jpg|png|gif/;

        //Check Extensions
        const extName = fileTypes.test(
            path.extname(file.originalname).toLowerCase()
        );

        //Check Mimetype
        const mimeType = fileTypes.test(file.mimetype);

        if (mimeType && extName) {
            return cb(null, true);
        } else {
            cb("Error: Images Only!");
        }
    },
}).single("myImage");

// init express
const app = express();
const port = 3000;

//set view engine
app.set("view engine", "ejs");

app.use(express.static("./public"));

//router paths
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render("index", {
                msg: err,
            });
        } else {
            if (req.file == undefined) {
                res.render("index", {
                    msg: "No File Selected!",
                });
            } else {
                res.render("index", {
                    msg: "Uploaded!",
                    file: `uploads/${req.file.filename}`,
                });
            }
        }
    });
});

app.listen(port, () => {
    console.log("Server Started");
});
