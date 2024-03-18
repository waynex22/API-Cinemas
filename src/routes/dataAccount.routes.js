const express = require('express');
const DataAccountController = require('../controller/DataAccount.controller');
const { authenticateToken, checkRole} = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', DataAccountController.getAll);
router.get('/:id', DataAccountController.getById);
router.post('/add',authenticateToken, checkRole('Admin'), DataAccountController.add);
router.put('/update/:id', authenticateToken, checkRole('Admin'),DataAccountController.update);
router.delete('/delete/:id', authenticateToken, checkRole('Admin'),DataAccountController.delete);
module.exports = router;