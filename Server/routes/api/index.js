const express = require("express");
const router = express.Router();
const newsRoute = require("./news");
const matchesRoute = require("./match");
const resultsRoute = require("./results");
const rankingsRoute = require("./rankings");
const teamsRoute = require("./teams");

/* Same URL as in people.js */
router.use("/news", newsRoute);
router.use("/match", matchesRoute);
router.use("/results", resultsRoute);
router.use("/rankings", rankingsRoute);
router.use("/teams", teamsRoute);

module.exports = router;
