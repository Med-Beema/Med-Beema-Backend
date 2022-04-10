const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema for Claims
const ClaimSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  claimId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  instname: {
    type: String,
    required: true,
  },
  instAddress: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  documents: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: "Assessment",
  },
});

module.exports = Claim = mongoose.model("claim", ClaimSchema);
