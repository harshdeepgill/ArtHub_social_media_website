const express = require("express");
const { UserModel } = require("../model/user.model");
const adminRoute = express.Router();

adminRoute.get("/users", async (req, res) => {
    try {
        const data = await UserModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ "msg": "Something went wrong.", "err": error });
    }
})

adminRoute.patch("/users/update/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await UserModel.findByIdAndUpdate({ _id: id }, req.body);
        res.status(200).send({ "msg": "User is updated successfully." });
    } catch (error) {
        res.status(500).send({ "msg": "Something went wrong.", "err": error });
    }
})

adminRoute.delete("/users/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await UserModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ "msg": "User is deleted successfully." });
    } catch (error) {
        res.status(500).send({ "msg": "Something went wrong.", "err": error });
    }
})

module.exports = { adminRoute };