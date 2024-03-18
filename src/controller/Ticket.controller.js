const TicketRepository = require('../reponsitories/Ticket.repository');
const BaseController = require('./Base.controller');

class TicketController extends BaseController {
  constructor() {
    super(TicketRepository);
  }

}

module.exports = new TicketController();
