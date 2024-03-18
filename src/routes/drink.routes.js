const express = require('express');
const DrinkController = require('../controller/Drink.controller');
const { authenticateToken, checkRole} = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', DrinkController.getAll);
router.get('/:id', DrinkController.getById);
router.post('/add', DrinkController.add);
router.put('/update/:id', DrinkController.update);
router.delete('/delete/:id', DrinkController.delete);
module.exports = router;