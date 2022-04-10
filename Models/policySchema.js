const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema for Contacts
const PolicySchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now(),
  },
  endDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Policy = mongoose.model("policy", PolicySchema);
