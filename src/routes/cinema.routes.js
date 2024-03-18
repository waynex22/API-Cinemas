const express = require('express');
const CinemaController = require('../controller/Cinema.controller');
const { authenticateToken, checkRole} = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', CinemaController.getAll);
router.get('/:id', CinemaController.getById);
router.post('/add', CinemaController.add);
router.put('/update/:id', CinemaController.update);
router.delete('/delete/:id', CinemaController.delete);
module.exports = router;