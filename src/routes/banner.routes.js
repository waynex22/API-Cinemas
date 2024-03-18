const express = require('express');
const BannerController = require('../controller/Banner.controller');
const { authenticateToken, checkRole} = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', BannerController.getAll);
router.get('/:id', BannerController.getById);
router.post('/add' ,BannerController.add);
router.put('/update/:id' ,BannerController.update);
router.delete('/delete/:id' ,BannerController.delete);
module.exports = router;