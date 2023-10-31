const monngoose = require("mongoose");
const userSchema = monngoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    age: String,
    favourites: Array,
    premium: Boolean,
    elite: Boolean
}, {
    versionKey: false
})
const UserModel = monngoose.model("user", userSchema);
module.exports = { UserModel };