const BaseRepository = require('./Base.repository')
const ticket = require('../models/ticket.model')

class TicketRepository extends BaseRepository {
    constructor(){
        super(ticket);
    }
}

module.exports = TicketRepository;