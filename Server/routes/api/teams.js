const express = require("express");
const router = express.Router();

const { HLTV } = require("hltv");

router.get("/:id(*)", (req, res) => {
  const id = req.params;
  HLTV.getTeam(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => console.log(err));
});

/*
router.get('/:matchId(*)', (req, res) => {
    const {matchId} = req.params;
    HLTV.getMatches(matchId, (stats) => res.json(stats));
  });
  */

module.exports = router;
