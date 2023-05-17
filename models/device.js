const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
    unique:true,
  },
  ip_address: {
    type: String,
    required: true,
    unique:true,
  },
  mac_address: {
    type: String,
    unique:true,
  },
  room_number: {
    type: String,
    required: true,
    unique:true,
  },
  
  
  
  
}, { timestamps: true });

const deviceModel = mongoose.model('device', deviceSchema);
module.exports = deviceModel;