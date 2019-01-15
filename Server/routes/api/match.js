const express = require('express');
const router = express.Router();

const HLTV = require('hltv-api');

router.get('/:matchId(*)', (req, res) => {
    const {matchId} = req.params;
    HLTV.getMatches(matchId, (stats) => res.json(stats));
  });
   

module.exports = router;