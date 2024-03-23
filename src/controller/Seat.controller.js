const SeatRepository = require('../reponsitories/Seat.repository');
const BaseController = require('./Base.controller');
const Seat = require('../models/seat.model');
class SeatController extends BaseController {
  constructor() {
    super(SeatRepository);
  }
  async getSeatsByIdRoom(req, res ){
    const id = req.params.id;
    const seats = await Seat.find({room_id: id});
    return res.status(200).json({data: seats});
  }
}

module.exports = new SeatController();
