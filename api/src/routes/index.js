var express = require("express");
var router = express.Router();
const transactionRoutes = require("./transaction");
router.use("/transaction", transactionRoutes);
module.exports = router;
