const express = require('express');
const ShowTimeController = require('../controller/ShowTime.controller');
const router = express.Router();

router.get('/', ShowTimeController.getPopulate);
router.get('/:id', ShowTimeController.getById);
router.get('/movie/:id', ShowTimeController.getShowTimeByMovieId);
router.post('/add', ShowTimeController.addShowTime);
router.put('/update/:id', ShowTimeController.update);
router.delete('/delete/:id', ShowTimeController.delete);
module.exports = router;