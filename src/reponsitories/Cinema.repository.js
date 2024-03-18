const BaseRepository = require('./Base.repository')
const cinema = require('../models/cinema.model')

class CinemaRepository extends BaseRepository {
    constructor(){
        super(cinema)
    }
}

module.exports = CinemaRepository