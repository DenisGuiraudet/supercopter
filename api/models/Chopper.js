const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Chopper
let Chopper = new Schema({
  chopper_name: {
    type: String
  },
  chopper_brand: {
    type: String
  },
  chopper_place: {
    type: Number
  }
},{
    collection: 'chopper'
});

module.exports = mongoose.model('Chopper', Chopper);