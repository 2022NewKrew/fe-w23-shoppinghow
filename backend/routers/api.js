const sqlGroup = require("./sqlGroup.js");
const express = require("express");
const router = express.Router();
const db_all = require("./../db/database.js");

router.get("/", function (req, res, next) {
  console.log("api");
});

router.get("/getSearchKeywordGroup", async function (req, res, next) {
  console.log(`>> ${req.originalUrl}`);

  const sql = sqlGroup("getSearchKeywordGroup");
  try {
    const result = await db_all(sql);
    res.json({
      message: "success",
      data: result,
    });
  } catch(err) {
    res.status(400).json({ err: err.message });
    return;
  }
});

router.get("/getBannerData", async function (req, res, next) {
  console.log(`>> ${req.originalUrl}`);
  try {
    const bestBannerSql = sqlGroup("getBestProduct");
    const bestBanner = await db_all(bestBannerSql);
    try {
      const specialBannerSql = sqlGroup("getSpecialProduct");
      const specialBanner = await db_all(specialBannerSql);
      res.json({
        message: "success",
        data: {best:bestBanner, special:specialBanner},
      });
    } catch(err) {
      res.status(400).json({ err: err.message });
      return;
    }
  } catch(err) {
    res.status(400).json({ err: err.message });
    return;
  }
});

//TODO: 사용예정
router.get("/getEventProduct", async function (req, res, next) {
  console.log(`>> ${req.originalUrl}`);
  const sql = sqlGroup("getEventProduct");
  try {
    const result = await db_all(sql);
    res.json({
      message: "success",
      data: result,
    });
  } catch(err) {
    res.status(400).json({ err: err.message });
    return;
  }
});

//TODO: 사용예정
router.get("/getThemaProduct", async function (req, res, next) {
  console.log(`>> ${req.originalUrl}`);
  const sql = sqlGroup("getThemaProduct");
  try {
    const result = await db_all(sql);
    res.json({
      message: "success",
      data: result,
    });
  } catch(err) {
    res.status(400).json({ err: err.message });
    return;
  }
});

//TODO: 사용예정
router.get("/getHotDealProduct", async function (req, res, next) {
  console.log(`>> ${req.originalUrl}`);
  const sql = sqlGroup("getHotDealProduct");
  try {
    const result = await db_all(sql);
    res.json({
      message: "success",
      data: result,
    });
  } catch(err) {
    res.status(400).json({ err: err.message });
    return;
  }
});

//TODO: 사용예정
router.get("/getKeywordProduct", async function (req, res, next) {
  console.log(`>> ${req.originalUrl}`);
  const sql = sqlGroup("getKeywordProduct");
  try {
    const result = await db_all(sql);
    res.json({
      message: "success",
      data: result,
    });
  } catch(err) {
    res.status(400).json({ err: err.message });
    return;
  }
});

//TODO: 사용예정
router.post("/getTagProduct", async function (req, res, next) {
  console.log(`>> ${req.originalUrl}`);

  if (!req.body.tag) {
    res.status(400).json({ err: "add tag!" });
    return;
  }

  const tag = req.body.tag;
  console.log(`tag: ${tag}`);
  const sql = sqlGroup("getTagProduct", tag);
  try {
    const result = await db_all(sql);
    res.json({
      message: "success",
      data: result,
    });
  } catch(err) {
    res.status(400).json({ err: err.message });
    return;
  }
});

module.exports = router;
