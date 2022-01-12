const express = require('express');
const { readJsonData } = require('../../helper');

const router = express.Router();

router.get('/slider-images', (req, res) => {
  const data = readJsonData('SliderImages');
  res.send(data);
});

router.get('/top-popular', (req, res) => {
  const data = readJsonData('topPopularList');
  res.send(data);
});

router.get('/products/hot-deal', (req, res) => {
  const data = readJsonData('HotDealProducts');
  res.send(data);
});

router.get('/products/theme', (req, res) => {
  const data = readJsonData('ThemeProducts');
  res.send(data);
});

module.exports = router;
