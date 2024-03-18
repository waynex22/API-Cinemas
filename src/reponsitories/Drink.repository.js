const BaseRepository = require('./Base.repository')
const drink = require('../models/drink.model')

class DrinkRepository extends BaseRepository {
    constructor(){
        super(drink)
    }
}

module.exports = DrinkRepository