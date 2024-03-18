const express = require('express');
const MovieController = require('../controller/Movie.controller');
// const {authenticateToken, checkRole} = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', MovieController.getAllMovie);
router.get('/:id', MovieController.getMovieById);
router.post('/add', MovieController.addNew);
router.put('/update/:id',MovieController.update);
router.delete('/delete/:id',MovieController.delete);
module.exports = router;