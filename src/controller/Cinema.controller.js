const CinemaRepository = require('../reponsitories/Cinema.repository');
const BaseController = require('./Base.controller');

class CinemaController extends BaseController {
  constructor() {
    super(CinemaRepository);
  }

}

module.exports = new CinemaController();
