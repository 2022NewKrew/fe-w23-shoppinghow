const express = require("express");
const mysql = require("mysql2");
const router = express.Router();
const qs = require("querystring");

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "shop",
    waitForConnections: true,
    connectionLimit: 10,
  })
  .promise();

router.use("/", (req, res, next) => {
  req.url = decodeURIComponent(req.url);
  next();
});

router.get("/hotdeal", async (req, res) => {
  try {
    const [result] = await pool.query(`select * from hotdeal`);
    res.status(200).json({
      result,
    });
  } catch (e) {
    console.error(e);
    res.status(404);
  }
});
router.get("/event/top100", async (req, res) => {
  try {
    const [result] = await pool.query(`select * from event where type = 2`);
    res.status(200).json({
      result,
    });
  } catch (e) {
    console.error(e);
    res.status(404);
  }
});
router.get("/event/slide", async (req, res) => {
  try {
    const [result] = await pool.query(`select * from event where type = 1`);
    res.status(200).json({
      result,
    });
  } catch (e) {
    console.error(e);
    res.status(404);
  }
});
router.get("/event/items", async (req, res) => {
  try {
    const [result] = await pool.query(`select * from event where type = 3`);
    res.status(200).json({
      result,
    });
  } catch (e) {
    console.error(e);
    res.status(404);
  }
});
router.get("/category", async (req, res) => {
  try {
    const [result] = await pool.query(`select * from Category`);
    const resData = {};
    result.map(item => {
      if (typeof resData[item.top] === "undefined") {
        resData[item.top] = [{ middle: item.middle, low: item.low }];
      } else {
        resData[item.top].push({ middle: item.middle, low: item.low });
      }
    });
    res.status(200).json({ result: resData });
  } catch (e) {
    console.error(e);
    res.status(404);
  }
});
module.exports = router;
