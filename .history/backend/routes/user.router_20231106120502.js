const express = require("express");
const { UserModel } = require("../model/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ListModel } = require("../model/list.model");
const { auth } = require("../Middleware/auth.middleware");

userRouter.post("/register", async (req, res) => {
    const { username, name, email, role, avatar, password, age, favourites, subscription } = req.body;
    const user = await UserModel.findOne({ email });
    try {
        if (user) {
            res.status(300).send({ "message": "User is already present, please login." })
        }
        else {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (hash) {
                    const user = new UserModel({
                        username, name, email, role, avatar, password: hash, age, favourites, subscription
                    })
                    await user.save();
                    res.status(200).send({ "message": "User is registered.", "user": user })
                }
                else {
                    res.status(400).send({ "message": "Something went wrong while hashing", "err": err.message })
                }
            })
        }
    } catch (error) {
        res.status(500).send({ "message": "Something went wrong", "err": error.message })
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ username: user.username, userId: user._Id }, "users", { expiresIn: "7d" });
                    res.status(200).send({ "message": "Successfully logged in", "token": token, "username": user.username, "avatar": user.avatar, "subscription": user.subscription, "userId": user._id });
                }
                else {
                    res.status(400).send({ "message": "Something went wrong.", "err": err.message })
                }
            })
        }
        else {
            res.status(300).send({ "message": "User is not registered, please register" })
        }
    } catch (error) {
        res.status(500).send({ "message": "Something went wrong catch block", "Err": error.message })
    }
})

userRouter.get("/logout", auth, async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        const newTkn = new ListModel({ token });
        await newTkn.save();
        res.status(200).send({ "message": "Logout successful" })
    } catch (error) {
        res.status(500).send({ "message": "Something went wrong", "err": error.message })
    }
})

userRouter.patch("update/:id", auth, async (req, res) => {
    const { id } = req.params;
    try {
        await UserModel.findByIdAndUpdate({ _id: id }, req.body);
        res.status(200).send({ "msg": "Your details are updated successfully." });
    } catch (error) {
        res.status(500).send({ "msg": "Something went wrong.", "err": error.message });
    }
})

userRouter.delete("delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await UserModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ "msg": "Your account is deleted successfully." });
    } catch (error) {
        res.status(500).send({ "msg": "Something went wrong.", "err": error.message });
    }
})

module.exports = { userRouter };