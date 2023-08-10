const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user=require('./routes/userRoutes')

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", user);

module.exports = app;
