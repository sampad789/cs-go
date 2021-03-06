const express = require("express");
const app = express();
const path = require("path");

// Do you understand why utilizing body parser here will make it usable
// in routes/api/people.js ?
app.use(function(req, res, next) {
  "use strict";
  // We need the following as you'll run HTML+JS+Ajax+jQuery on http://localhost,
  // but service is taken from http://protoNNN.haaga-helia.fi (NNN is some number)
  // https://www.w3.org/TR/cors/#access-control-allow-origin-response-header
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRoute = require("./routes/api"); // means index.js in there!!!

app.use("/api", apiRoute);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Test script
app.get("/", function(req, res) {
  res.send("Working fine !!!");
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
