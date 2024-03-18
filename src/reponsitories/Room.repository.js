const BaseRepository = require('./Base.repository')
const room = require('../models/room.model')

class RoomRepository extends BaseRepository {
    constructor(){
        super(room)
    }
}

module.exports = RoomRepository