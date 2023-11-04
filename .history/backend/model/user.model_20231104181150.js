const monngoose = require("mongoose");
const userSchema = monngoose.Schema({
    username: String,
    name: String,
    email: String,
    avatar: String,
    role: { type: String, default: "user", enum: ["user"] },
    password: String,
    age: Number,
    favourites: Array,
    premium: Boolean,
    elite: Boolean
}, {
    versionKey: false
})
const UserModel = monngoose.model("user", userSchema);
module.exports = { UserModel };