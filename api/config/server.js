// CONFIGURACION GENERAL DEL SERVIDOR, aca van los middlewares y demas
const routes = require("../src/routes");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("PORT", process.env.PORT || 3001);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", routes);

module.exports = app;
