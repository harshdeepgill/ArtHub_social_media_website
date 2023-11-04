const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    avatar: String,
    role: { type: String, default: "user", enum: ["user"] },
    password: String,
    age: Number,
    favourites: Array,
    subscription: String
}, {
    versionKey: false
})
const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };