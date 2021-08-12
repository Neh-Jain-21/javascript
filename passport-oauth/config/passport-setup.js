/** @format */

const passport = require("passport");
const GoogleStartegy = require("passport-google-oauth20");
const User = require("../models/user-model");
const keys = require("./keys");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStartegy(
        {
            //options
            callbackURL: "/auth/google/redirect",
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,
        },
        (accessToken, refreshToken, profile, done) => {
            //passport callback
            console.log(profile.photos[0].value);
            //check if user exists
            User.findOne({ googleId: profile.id }).then((currentUser) => {
                if (currentUser) {
                    //already have user
                    done(null, currentUser);
                } else {
                    //create new user
                    new User({
                        username: profile.displayName,
                        googleId: profile.id,
                        thumbnail: profile.photos[0].value,
                    })
                        .save()
                        .then((newUser) => {
                            console.log("new User Created:" + newUser);
                            done(null, newUser);
                        });
                }
            });
        }
    )
);
