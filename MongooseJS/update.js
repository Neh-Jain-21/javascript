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

// update document
const updateDocument = async (id) => {
    const result = await Playlist.updateOne({ _id : id},{$set : {intern : false}});
    console.log(result);
};

updateDocument("602019f008806a09686c6f74");