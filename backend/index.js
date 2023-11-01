const express = require("express");
const { artRouter } = require("./Routes/art.routes");

const app = express();

app.use(express.json());

app.use("/arts",artRouter);

