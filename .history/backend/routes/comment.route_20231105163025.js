const express = require("express");
const { CommentModel } = require("../model/comment.model");
const commentRoute = express.Router();
const { auth } = require("../Middleware/auth.middleware")

commentRoute.use(auth)

// User get can get all the comments using the id of post.
commentRoute.get("/:postID", async (req, res) => {
    const { postID } = req.params;
    try {
        const comment = await CommentModel.find({ postId: postID });
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).send({ "msg": "Something went wrong.", "err": error.message })
    }
})

// User can create comment using id and at response user will get all the comments with newly added comment.
commentRoute.post("/:postID/create", async (req, res) => {
    const { postID } = req.params;
    try {
        const comment = new CommentModel(req.body);
        await comment.save();
        const comments = await CommentModel.find({ postId: postID });
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).send({ "msg": "Something went wrong.", "err": error.message })
    }
})

// User can delete comment using postId.
commentRoute.delete("/:commentId/delete", async (req, res) => {
    const { commentId } = req.params;
    const comment = await CommentModel.findOne({ _id: commentId });
    try {
        if (comment.userId == req.body.userId) {
            await CommentModel.findByIdAndDelete({ _id: commentId })
            res.status(200).send({ "msg": `The comment is id of ${commentId} deleted.` })
        }
        else {
            res.status(300).send({ "msg": "You are not authorized." })
        }
    } catch (error) {
        res.status(400).send({ "msg": "Something went wrong.", "err": error.message })
    }
})

// User can update comment using postId.
commentRoute.patch("/:commentId/update", async (req, res) => {
    const { commentId } = req.params;
    const comment = await CommentModel.findOne({ _id: commentId });
    try {
        if (comment.userId == req.body.userId) {
            await CommentModel.findByIdAndUpdate({ _id: commentId }, req.body)
            res.status(200).send({ "msg": `The comment is id of ${commentId} updated.` })
        }
        else {
            res.status(300).send({ "msg": "You are not authorized." })
        }
    } catch (error) {
        res.status(400).send({ "msg": "Something went wrong.", "err": error.message })
    }
})

module.exports = { commentRoute };