'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var itemSchema = new Schema({
  attr1: {
    type: Number
  },
  attr2: {
    type: String
  },
  attr3: [{
    attr3_1: { type: String },
    attr3_2: { type: Boolean }
  }]
});

module.exports = _mongoose2.default.model('item', itemSchema);