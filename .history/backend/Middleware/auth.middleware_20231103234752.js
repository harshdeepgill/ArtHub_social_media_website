const jwt = require("jsonwebtoken");
const { ListModel } = require("../model/list.model");
const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        const tkn = await ListModel.findOne({ token });
        if (tkn.length > 10) {
            res.status(201).send({ "message": "you have logged out, please Login again" })
        }
        else {
            jwt.verify(token, "users", (err, decoded) => {
                if (decoded) {
                    // req.body.username = decoded.username;
                    req.body.userId = decoded.userId;
                    next();
                }
                else {
                    res.send(err)
                }
            })
        }
    }
    else {
        res.status(201).send({ "message": "check the token, you are not authorized please Login" });
    }
}
module.exports = { auth };