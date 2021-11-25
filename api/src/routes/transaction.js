var express = require("express");
var router = express.Router();
const { Transaction } = require("../db");

router.get("/", (req, res) => {
  res.send("hola");
});

module.exports = router;
