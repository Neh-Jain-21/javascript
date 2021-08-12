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

const deleteDocument = async (id) => {
    const result = await Playlist.deleteOne({ _id: id });
    console.log(result);
}

deleteDocument("6020156f898e13024c83ad47");