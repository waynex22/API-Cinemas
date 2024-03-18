const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const foodSchema = new Schema({
  _id: { type: objectId, auto: true },
  type_id: { type: objectId, required: true , ref: 'types' },
  name: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  versionKey: false,
  timestamps: true
});

const Foods = mongoose.model('foods', foodSchema);
module.exports = Foods;
