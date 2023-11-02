const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
    body: String,
    postId: String,
    userId: String,
    username: String,
    userAvatar: String,
    time: String
}, {
    versionKey: false
})
const CommentModel = mongoose.model("comment", commentSchema);
module.exports = { CommentModel };