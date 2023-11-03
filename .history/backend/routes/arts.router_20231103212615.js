const express = require("express");
const { ArtModel } = require("../model/arts.model");
const

const artRouter = express.Router();

artRouter.use(authM)

artRouter.get("/", async (req, res) => {
    try {
        const arts = await ArtModel.find({ username: req.body.username });
        return res.status(200).send(arts)
    } catch (error) {
        return res.status(500).send(error)
    }
});

artRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const art = await ArtModel.find({ _id: id })
        res.status(200).send(art);
    } catch (error) {
        res.status(500).send({ "msg": "Something went wrong.", "err": error });
    }
})

artRouter.post("/add", async (req, res) => {
    try {
        const arts = new ArtModel(req.body);
        await arts.save();
        return res.status(200).send({ "msg": "New art is add", "New_art": arts });
    } catch (error) {
        return res.status(500).send(error)
    }
});
artRouter.patch("/update/:Id", async (req, res) => {
    const { Id } = req.params;
    const arts = await ArtModel.findOne({ _id: Id });
    try {
        if (req.body.userID == arts.userID) {
            await ArtModel.findByIdAndUpdate({ _id: Id }, req.body);
            return res.status(200).send({ msg: `The arts of id ${Id} has been updated` })
        }
        else {
            res.status(300).send({ "msg": "You are not authorized." })
        }
    } catch (error) {
        return res.status(500).send(error)
    }
});

artRouter.delete("/delete/:Id", async (req, res) => {
    const { Id } = req.params;
    const arts = await ArtModel.findOne({ _id: Id });
    try {
        if (req.body.userId == arts.userId) {
            await ArtModel.findByIdAndDelete({ _id: Id });
            return res.status(200).send({ msg: `The arts of id ${Id} has been udeleted` })
        }
        else {
            res.status(300).send({ "msg": "You are not authorized." })
        }
    } catch (error) {
        return res.status(500).send(error)
    }
});
module.exports = { artRouter }