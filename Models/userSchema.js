const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema for Users
const UserSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: date,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  idType: {
    type: String,
    required: true,
  },
  idNum: {
    type: String,
    required: true,
  },
  issuedPlace: {
    type: String,
    required: true,
  },
  issuedDate: {
    type: date,
    required: true,
  },
  expiryDate: {
    type: date,
    required: true,
  },
  userPhoto: {
    type: String,
    required: true,
  },
  idPhoto: {
    type: String,
    required: true,
  },
  signPhoto: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User = mongoose.model("user", UserSchema);
