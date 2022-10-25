const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  strength: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
 manufacturer : {
    type: String,
    required: true
  },
  m_price: {
    type: String,
    required: true
  },
  r_price: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('medicine', MedicineSchema);
