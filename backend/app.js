const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const categorize=require('./routes/categorizeRoutes')

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1',categorize);

module.exports = app;
