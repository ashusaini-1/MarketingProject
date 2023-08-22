const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user=require('./routes/userRoutes')
const detail=require('./routes/projectDetail')

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", user);
app.use("/api/v1",detail);

module.exports = app;
