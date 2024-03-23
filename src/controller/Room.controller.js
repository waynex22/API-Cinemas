const RoomRepository = require('../reponsitories/Room.repository');
const BaseController = require('./Base.controller');
const room = require('../models/room.model')
class RoomController extends BaseController {
  constructor() {
    super(RoomRepository);
  }
  async getByIdAndPopulate (req, res) {
   const id = req.params.id;
   const Room = await room.findById(id).populate('cinema_id');
   return res.status(200).json({data: Room})
    
  }
}

module.exports = new RoomController();
