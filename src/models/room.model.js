const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const roomSchema = new Schema({
  _id: { type: objectId, auto: true },
  seats: { type: Number, required: true },
  room_name: { type: String, required: true },
  cinema_id: { type: objectId, required: true , ref: 'cinemas' },
  seats_nomal: { type: Number, required: true },
  seats_vip: { type: Number, required: true },
  seats_couple: { type: Number, required: true },
}, {
  versionKey: false,
  timestamps: true
});

const Room = mongoose.model('rooms', roomSchema);
module.exports = Room;
