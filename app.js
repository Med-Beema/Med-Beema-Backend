const express = require("express");
const dotenv = require("dotenv").config();
const fs = require("fs");

const app = express();

//enable json support
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//include routes
app.use("/", require("./Routes/forms"));

module.exports = app;
