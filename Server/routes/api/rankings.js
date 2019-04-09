const express = require("express");
const router = express.Router();

const { HLTV } = require("hltv");

router.get("/team", (req, res) => {
  HLTV.getTeamRanking()
    .then(response => {
      res.json(response);
    })
    .catch(err => console.log(err));
});

router.get("/individual", (req, res) => {
  HLTV.getPlayerRanking({ startDate: "2019-01-01" })
    .then(response => {
      res.json(response);
    })
    .catch(err => console.log(err));
});


module.exports = router;
