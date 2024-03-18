const BaseRepository = require('./Base.repository')
const dataAccount = require('../models/dataAccount.model')

class DataAccountRepository extends BaseRepository {
    constructor(){
        super(dataAccount)
    }
}

module.exports = DataAccountRepository