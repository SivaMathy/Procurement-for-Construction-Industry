const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  company_id: {
    type: String,
    required: true,
  },
  supplier_name: {
    type: String,
    required: true,
  },
 
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  agreed_price: {
    type: String,
    required: true,
  },
  delivery_address: {
    type: String,
    required: true,
  },
  delivery_date: {
    type: String,
    required: true,
  },
  site_name: {
    type: String,
    required: true,
  },
  auditor_status:{
    type: String,
    required: true,
  },
  supplier_status:{
    type: String,
    required: true,
  },
  comments:{
    type: String,
    
  }
  
});

module.exports = mongoose.model("order", OrderSchema);
