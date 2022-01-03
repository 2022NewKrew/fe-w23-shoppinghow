const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
    req.url = decodeURIComponent(req.url);
    next();
});

router.get("/", (req, res) => {
    res.render("main");
});

module.exports = router;
