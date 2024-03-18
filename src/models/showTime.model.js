const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const showTimeSchema = new Schema({
    _id: { type: objectId, auto: true },
    movie_id: { type: objectId, required: true, ref: 'movies' },
    cinema_id: { type: objectId, required: true, ref: 'cinemas' },
    room_id: { type: objectId, required: true, ref: 'rooms' },
    show_date: { type: Date, required: true },
    show_times: [{ type: Date, required: true }],
}, {
    versionKey: false,
    timestamps: true
});

const Showtime = mongoose.model('showTimes', showTimeSchema);
module.exports = Showtime;