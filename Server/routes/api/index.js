const express = require('express');
const router = express.Router();
const newsRoute = require('./news');
const matchesRoute = require('./match');
const resultsRoute = require('./results')

/* Same URL as in people.js */
router.use('/news', newsRoute);
router.use ('/match',matchesRoute)
router.use('/results',resultsRoute)

module.exports = router;