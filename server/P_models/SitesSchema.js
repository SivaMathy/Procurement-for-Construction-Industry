const mongoose = require("mongoose");

const SitesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  mname: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  num: {
    type: Number,
    required: false,
    unique: true,
    maxLength: 10,
  },

  sdate: {
    type: Date,
    required: false,
  },
  edate: {
    type: Date,
  },
});

const site = new mongoose.model("sites", SitesSchema);

module.exports = site;
