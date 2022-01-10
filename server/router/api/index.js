const express = require('express');
const { readJsonData } = require('../../helper');

const router = express.Router();

router.get('/slider-images', (req, res) => {
  const data = readJsonData('SliderImages');
  res.json({ data });
});

router.get('/top-10', (req, res) => {
  const data = readJsonData('Top10List');
  res.json({ data });
});

router.get('/products/hot-deal', (req, res) => {
  const data = readJsonData('HotDealProducts');
  res.json({ data });
});

router.get('/products/theme', (req, res) => {
  const data = readJsonData('ThemeProducts');
  res.json({ data });
});

module.exports = router;
