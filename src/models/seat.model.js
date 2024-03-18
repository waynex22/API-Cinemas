const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;
const seatSchema = new Schema({
    _id: { type: objectId, auto: true },
    room_id: { type: objectId, required: true, ref: 'rooms' },
    name: { type: String, required: true },
    is_available: { type: String, default: 'available' },
    type: { type: String , enum: ["nomal" , "vip", "couple" ], required: true}
}, {
    versionKey: false,
    timestamps: true
});

const Seat = mongoose.model('seats', seatSchema);
module.exports = Seat;