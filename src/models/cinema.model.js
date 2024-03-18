const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const cinemaSchema = new Schema({
  _id: { type: objectId, auto: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  rooms: [{ type: objectId, ref: 'rooms' }]
}, {
  versionKey: false,
  timestamps: true
});

const Cinema = mongoose.model('cinemas', cinemaSchema);
module.exports = Cinema;
