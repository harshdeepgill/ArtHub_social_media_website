const mongoose = require("mongoose");

const artSchema = mongoose.Schema({
    title: String,
    image: String,
    tags: Array,
    views: Number,
    favorite: Number,
    premium: Boolean,
    category: String,
    userID: String,
    username: String,
    useravatar: String
},
    { versionKey: false }
)

const ArtModel = mongoose.model("art", artSchema);

module.exports = { ArtModel };