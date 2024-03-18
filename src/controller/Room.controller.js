const RoomRepository = require('../reponsitories/Room.repository');
const BaseController = require('./Base.controller');

class RoomController extends BaseController {
  constructor() {
    super(RoomRepository);
  }

}

module.exports = new RoomController();
