const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var itemSchema = new Schema({
  attr1: {
    type: Number
  },
  attr2: {
    type: String
  }
});


module.exports = mongoose.model('item', itemSchema);
