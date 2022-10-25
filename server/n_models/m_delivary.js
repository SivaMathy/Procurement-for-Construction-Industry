const mongoose = require('mongoose');

const DelivarySchema = new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
 fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  phonenum: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
 city : {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  isCheck:{
    type:String,
    required:true

  }
});

module.exports = mongoose.model('delivary', DelivarySchema);
