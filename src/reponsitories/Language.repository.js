const BaseRepository = require('./Base.repository')
const language = require('../models/language.model')

class LanguageRepository extends BaseRepository {
    constructor(){
        super(language);
    }
}

module.exports = LanguageRepository;