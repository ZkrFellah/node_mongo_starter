import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const itemSchema = new Schema({
  attr1: {
    type: Number
  },
  attr2: {
    type: String
  },
  attr3: [
    {
      attr3_1: {type: String},
      attr3_2: {type: Boolean}
    }
  ]
});

