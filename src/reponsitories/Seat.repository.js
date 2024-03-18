const BaseRepository = require('./Base.repository')
const seat = require('../models/seat.model')

class SeatRepository extends BaseRepository {
    constructor(){
        super(seat);
    }
}

module.exports = SeatRepository;