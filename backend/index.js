const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { userRouter } = require("./routes/user.router");
const { adminRoute } = require("./routes/admin.router");
const { connection } = require("./db");
const { artRouter } = require("./routes/arts.router");
const { commentRoute } = require("./routes/comment.route");

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/admin", adminRoute);
app.use("/arts", artRouter);
app.use("/comments", commentRoute);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home Page.")
})

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
})