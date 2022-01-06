const express = require("express");
const mysql = require("mysql2");
const router = express.Router();

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
  const [result] = await pool.query(`select * from hotdeal`);
  res.status(200).json({
    result,
  });
});
router.get("/event/top100", async (req, res) => {
  const [result] = await pool.query(`select * from event where type = 2`);
  res.status(200).json({
    result,
  });
});
router.get("/event/slide", async (req, res) => {
  const [result] = await pool.query(`select * from event where type = 1`);
  res.status(200).json({
    result,
  });
});
router.get("/event/items", async (req, res) => {
  const [result] = await pool.query(`select * from event where type = 3`);
  res.status(200).json({
    result,
  });
});
router.get("/category", async (req, res) => {
  const [result] = await pool.query(`select * from category`);
  res.status(200).json({
    result,
  });
});
module.exports = router;
