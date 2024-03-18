const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const ticketSchema = new Schema({
  _id: { type: objectId, auto: true },
  seat_id: { type: Number, required: true },
  room_id: { type: Number, required: true },
  cinema_id: { type: objectId, required: true , ref: 'cinemas' },
  food_id : { type: objectId , ref: 'foods' },
  drink_id : { type: objectId , ref: 'drinks' },
  combo_id : { type: objectId , ref: 'combos' },
  price: { type: Number, required: true },
  status: { type: String, required: true },
  time: { type: Date, required: true },
}, {
  versionKey: false,
  timestamps: true
});

const Ticket = mongoose.model('tickets', ticketSchema);
module.exports = Ticket;
