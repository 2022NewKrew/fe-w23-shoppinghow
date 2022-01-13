const express = require('express');
const { readJsonData } = require('../../helper');

const router = express.Router();

router.get('/slider-images', (req, res) => {
  const data = readJsonData('SliderImages');
  res.json({ data });
});

router.get('/top-popular', (req, res) => {
  const data = readJsonData('topPopularList');
  res.json({ data });
});

router.get('/products/theme', (req, res) => {
  const data = readJsonData('ThemeProducts');
  res.json({ data });
});

router.get('/products/hot-deal', (req, res) => {
  const page = +req.query.page;
  const per_page = +req.query.per_page;
  if (page < 0 || per_page <= 0) {
    return res.status(400).json({ error: 'invalid pagging value', message: '잘못된 요청입니다.' });
  }

  const data = readJsonData('HotDealProducts');

  const paggingData = data.splice(page * per_page, per_page);

  res.json({ data: paggingData, total: data.length, page, per_page });
});

module.exports = router;
