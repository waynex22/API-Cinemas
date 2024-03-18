const BaseRepository = require('./Base.repository')
const banner = require('../models/banner.model')

class BannerRepository extends BaseRepository {
    constructor(){
        super(banner);
    }
}

module.exports =BannerRepository;