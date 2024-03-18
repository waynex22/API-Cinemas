const express = require('express');
const TicketController = require('../controller/Ticket.controller');
const { authenticateToken, checkRole} = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', TicketController.getAll);
router.get('/:id', TicketController.getById);
router.post('/add',authenticateToken, checkRole('Admin'), TicketController.add);
router.put('/update/:id', authenticateToken, checkRole('Admin'),TicketController.update);
router.delete('/delete/:id', authenticateToken, checkRole('Admin'),TicketController.delete);
module.exports = router;