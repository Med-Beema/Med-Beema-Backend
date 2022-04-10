const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const { getClaimCount } = require("./Controllers/claimController");

const app = express();
app.use(cors());

//Connect mongoDB with Mongoose
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(getClaimCount());

//enable json support
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log(getClaimCount());
//include routes
app.use("/", require("./Routes/forms"));
app.use("/", require("./Routes/policy"));
app.use("/", require("./Routes/claim"));

module.exports = app;
