const express = require("express");
const router = express.Router();
const HLTV = require("hltv-api");

router.get("/", function(req, res) {
  HLTV.getNews(function(news) {
    return res.json(news);
  });
});

module.exports = router;
