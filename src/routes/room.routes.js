const express = require('express');
const RoomController = require('../controller/Room.controller');
const { authenticateToken, checkRole} = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', RoomController.getAll);
router.get('/:id', RoomController.getByIdAndPopulate);
router.post('/add', RoomController.add);
router.put('/update/:id', RoomController.update);
router.delete('/delete/:id', RoomController.delete);
module.exports = router;