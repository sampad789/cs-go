const express = require('express');
const router = express.Router();

const HLTV = require('hltv-api');

router.get('/', function (req, res) {
    HLTV.getResults(function (results) {
        return res.json(results);
    });
});
module.exports = router;