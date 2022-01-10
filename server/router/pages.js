const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/home.html'));
});

router.get('/home', (req, res) => {
  res.redirect('/');
});

router.get('/dummy', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/dummy.html'));
});

module.exports = router;
