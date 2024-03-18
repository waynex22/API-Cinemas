const BaseRepository = require('./Base.repository')
const food = require('../models/food.model')

class FoodRepository extends BaseRepository {
    constructor(){
        super(food)
    }
}

module.exports = FoodRepository