const BannerRepository = require('../reponsitories/Banner.repository');
const BaseController = require('./Base.controller');

class BannerController extends BaseController {
  constructor() {
    super(BannerRepository);
  }
}

module.exports = new BannerController();
