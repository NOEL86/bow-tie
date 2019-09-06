var express = require("express");
var router = express.Router();
const path = require("path");

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
