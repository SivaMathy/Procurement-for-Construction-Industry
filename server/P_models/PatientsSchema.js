const mongoose = require("mongoose");

const patientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  age: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  mobile: {
    type: Number,
    required: false,
    unique: true,
    maxLength: 10,
  },
  gender: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  rdate: {
    type: Date,
  },
});

const patients = new mongoose.model("patients", patientsSchema);

module.exports = patients;
