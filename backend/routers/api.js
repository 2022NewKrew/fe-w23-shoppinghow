const sqlGroup = require("./sqlGroup.js");
const express = require("express");
const router = express.Router();
const db_all = require("./../db/database.js");
const apiSateType = {
  BadRequest:400
}
const messageType = {
  Success:"success"
}

router.get("/", () => {
  console.log("api");
});

router.get("/getSearchKeywordGroup", async (req, res) => {
  console.log(`>> ${req.originalUrl}`);

  const sql = sqlGroup("getSearchKeywordGroup");
  try {
    const result = await db_all(sql);
    res.json({
      message: messageType.Success,
      data: result,
    });
  } catch (error) {
    res.status(apiSateType.BadRequest).json({ error: error.message });
  }
});

router.get("/getBannerData", async (req, res) => {
  console.log(`>> ${req.originalUrl}`);
  try {
    const bestBannerSql = sqlGroup("getBestProduct");
    const bestBanner = await db_all(bestBannerSql);
    try {
      const specialBannerSql = sqlGroup("getSpecialProduct");
      const specialBanner = await db_all(specialBannerSql);
      res.json({
        message: messageType.Success,
        data: { best: bestBanner, special: specialBanner },
      });
    } catch (error) {
      res.status(apiSateType.BadRequest).json({ error: error.message });
    }
  } catch (error) {
    res.status(apiSateType.BadRequest).json({ error: error.message });
  }
});

//TODO: 사용예정
router.get("/getEventProduct", async (req, res) => {
  console.log(`>> ${req.originalUrl}`);
  const sql = sqlGroup("getEventProduct");
  try {
    const result = await db_all(sql);
    res.json({
      message: messageType.Success,
      data: result,
    });
  } catch (error) {
    res.status(apiSateType.BadRequest).json({ error: error.message });
  }
});

//TODO: 사용예정
router.get("/getThemaProduct", async (req, res) => {
  console.log(`>> ${req.originalUrl}`);
  const sql = sqlGroup("getThemaProduct");
  try {
    const result = await db_all(sql);
    res.json({
      message: messageType.Success,
      data: result,
    });
  } catch (error) {
    res.status(apiSateType.BadRequest).json({ error: error.message });
  }
});

//TODO: 사용예정
router.get("/getHotDealProduct", async (req, res) => {
  console.log(`>> ${req.originalUrl}`);
  const sql = sqlGroup("getHotDealProduct");
  try {
    const result = await db_all(sql);
    res.json({
      message: messageType.Success,
      data: result,
    });
  } catch (error) {
    res.status(apiSateType.BadRequest).json({ error: error.message });
  }
});

//TODO: 사용예정
router.get("/getKeywordProduct", async (req, res) => {
  console.log(`>> ${req.originalUrl}`);
  const sql = sqlGroup("getKeywordProduct");
  try {
    const result = await db_all(sql);
    res.json({
      message: messageType.Success,
      data: result,
    });
  } catch (error) {
    res.status(apiSateType.BadRequest).json({ error: error.message });
  }
});

//TODO: 사용예정
router.post("/getTagProduct", async (req, res) => {
  console.log(`>> ${req.originalUrl}`);

  if (!req.body.tag) {
    res.status(apiSateType.BadRequest).json({ error: "add tag!" });
  }

  const tag = req.body.tag;
  console.log(`tag: ${tag}`);
  const sql = sqlGroup("getTagProduct", tag);
  try {
    const result = await db_all(sql);
    res.json({
      message: messageType.Success,
      data: result,
    });
  } catch (error) {
    res.status(apiSateType.BadRequest).json({ error: error.message });
  }
});

module.exports = router;
