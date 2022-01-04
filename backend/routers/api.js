const express = require("express");
const router = express.Router();
const db = require("./../db/database.js");

router.get("/", function (req, res, next) {
  console.log("api");
});

router.get("/getSearchKeywordGroup", function (req, res, next) {
  console.log(`>> ${req.originalUrl}`);
  const sql = "SELECT * FROM searchkeyword";
  db.all(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(400).json({err:err})
      return;
    }
    console.log(`${req.originalUrl} result ${rows.length}`);
    res.json({
      message: "success",
      data: rows,
    });
  });
});

router.post("/getTagProduct", function (req, res, next) {
  console.log(`>> ${req.originalUrl}`);
  
  if(!req.body.tag){
    res.status(400).json({err:"add tag!"})
    return;
  }

  const tag = req.body.tag
  console.log(`tag: ${tag}`);
  const sql = `SELECT * FROM product where tag="${tag}"`;
  db.all(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(400).json({err:err})
      return;
    }
    console.log(`${req.originalUrl} result ${rows.length}`);
    res.json({
      message: "success",
      data: rows,
    });
  });
});

module.exports = router;
