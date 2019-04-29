const express = require("express");
const router = express.Router();

const { HLTV } = require("hltv");

router.get("/", (req, res) => {
  HLTV.getRecentThreads()
    .then(response => {
      res.json(response);
    })
    .catch(err => console.log(err));
});
module.exports = router;
