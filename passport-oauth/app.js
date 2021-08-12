/** @format */

const express = require("express");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const passport = require("passport");

const app = express();

//view engine
app.set("view engine", "ejs");

app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [keys.session.cookieKey],
    })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//mongodb connection
mongoose.connect(keys.mongodb.dbURL, () => {
    console.log("server connected");
});

//routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.get("/", (req, res) => {
    res.render("home", { user: req.user });
});

app.listen(3000, () => {
    console.log("Server Created");
});
