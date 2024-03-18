const express = require('express');
const FoodController = require('../controller/Food.controller');
const { authenticateToken, checkRole} = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', FoodController.getAll);
router.get('/:id', FoodController.getById);
router.post('/add', FoodController.add);
router.put('/update/:id', FoodController.update);
router.delete('/delete/:id', FoodController.delete);
module.exports = router;