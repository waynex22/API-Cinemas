const BaseRepository = require('./Base.repository')
const showTime = require('../models/showTime.model')

class ShowTimeRepository extends BaseRepository {
    constructor(){
        super(showTime);
    }
}

module.exports = ShowTimeRepository;