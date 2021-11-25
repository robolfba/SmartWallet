const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("PORT", process.env.PORT || 3001);

app.use(morgan("dev"));

module.exports = app;
