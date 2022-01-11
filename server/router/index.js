const express = require('express');
const pageRouter = require('./pages');
const apiRouter = require('./api');

const router = express.Router();

router.use('/api', apiRouter);
router.use(pageRouter);

module.exports = router;
