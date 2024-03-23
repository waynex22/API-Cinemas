const express = require('express');
const SeatController = require('../controller/Seat.controller');
const router = express.Router();

router.get('/', SeatController.getAll);
router.get('/:id', SeatController.getById);
router.get('/getByRoomId/:id', SeatController.getSeatsByIdRoom);
router.post('/add', SeatController.add);
router.put('/update/:id', SeatController.update);
router.delete('/delete/:id', SeatController.delete);
module.exports = router;