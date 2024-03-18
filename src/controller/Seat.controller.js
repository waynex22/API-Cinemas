const SeatRepository = require('../reponsitories/Seat.repository');
const BaseController = require('./Base.controller');

class SeatController extends BaseController {
  constructor() {
    super(SeatRepository);
  }

}

module.exports = new SeatController();
