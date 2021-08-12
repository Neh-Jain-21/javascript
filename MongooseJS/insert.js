const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/nehDb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("Connected!") })
    .catch((err) => { console.log(err) });

const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Enroll: String,
    intern: Boolean,
    age: Number
});

// create collection
const Playlist = new mongoose.model("Playlist", playListSchema);

//insert in Database
const createDocument = async () => {
    try {
        const nodePlayList = new Playlist({
            name: "Manthan",
            Enroll: "18BEIT30036",
            intern: true,
            age: 21
        });
        const result = await nodePlayList.save();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

createDocument();