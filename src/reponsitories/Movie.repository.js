const BaseRepository = require('./Base.repository')
const movie = require('../models/movie.model')

class MovieRepository extends BaseRepository {
    constructor(){
        super(movie)
    }
}

module.exports = MovieRepository;