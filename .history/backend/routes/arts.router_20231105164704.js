const express = require("express");
const { ArtModel } = require("../model/arts.model");
const { auth } = require("../Middleware/auth.middleware");

const artRouter = express.Router();

artRouter.get("/", auth, async (req, res) => {
    try {
        const arts = await ArtModel.find({ username: req.body.username });
        return res.status(200).send(arts)
    } catch (error) {
        return res.status(500).send({ "msg": "Something went wrong.", "err": error.message })
    }
});

artRouter.get("/all", async (req, res) => {
    const { category } = req.query;
    try {
        const art = await ArtModel.find({ category: category })
        res.status(200).send(art);
    } catch (error) {
        res.status(500).send({ "msg": "Something went wrong.", "err": error.message })
    }
})

artRouter.patch("/view/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await ArtModel.findByIdAndUpdate({ _id: id }, req.body);
        return res.status(200).send({ "msg": "Updated successfully." })
    } catch (error) {
        return res.status(500).send({ "msg": "Something went wrong.", "err": error.message })
    }
});

artRouter.get("/:id", auth, async (req, res) => {
    const { id } = req.params;
    try {
        const art = await ArtModel.find({ _id: id })
        res.status(200).send(art);
    } catch (error) {
        res.status(500).send({ "msg": "Something went wrong.", "err": error.message });
    }
})

artRouter.get("/search", async (req, res) => {
    const { title } = req.query;
    try {
        const arts = await ArtModel.find({ title });
        res.status(200).send(arts);
    }
    catch (err) {
        res.status(500).send({ "msg": "Something went wrong.", "err": err.message });
    }
})

artRouter.post("/add", auth, async (req, res) => {
    try {
        const arts = new ArtModel(req.body);
        await arts.save();
        return res.status(200).send({ "msg": "New art is add", "New_art": arts });
    } catch (error) {
        return res.status(500).send({ "msg": "Something went wrong.", "err": error.message })
    }
});
artRouter.patch("/update/:Id", auth, async (req, res) => {
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
        return res.status(500).send({ "msg": "Something went wrong.", "err": error.message })
    }
});

artRouter.delete("/delete/:Id", auth, async (req, res) => {
    const { Id } = req.params;
    const arts = await ArtModel.findOne({ _id: Id });
    try {
        if (req.body.userId == arts.userId) {
            await ArtModel.findByIdAndDelete({ _id: Id });
            return res.status(200).send({ msg: `The arts of id ${Id} has been deleted` })
        }
        else {
            res.status(300).send({ "msg": "You are not authorized." })
        }
    } catch (error) {
        return res.status(500).send({ "msg": "Something went wrong.", "err": error.message })
    }
});
module.exports = { artRouter }