/** @format */

const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/nehDb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected!");
    })
    .catch((err) => {
        console.log(err);
    });

const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    Enroll: String,
    intern: Boolean,
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("Age Cannot be Negative");
            }
        },
    },
});

// create collection
const Playlist = new mongoose.model("Playlist", playListSchema);

//insert in Database
const createDocument = async () => {
    try {
        const nodePlayList = new Playlist({
            name: "Meet",
            Enroll: "18BEIT30038",
            intern: true,
            age: -1,
        });
        const result = await nodePlayList.save();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

createDocument();
