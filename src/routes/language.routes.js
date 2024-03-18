const express = require('express');
const LanguageController = require('../controller/Language.controller');
const router = express.Router();

router.get('/', LanguageController.getAll);
router.get('/:id', LanguageController.getById);
router.post('/add', LanguageController.add);
router.put('/update/:id', LanguageController.update);
router.delete('/delete/:id', LanguageController.delete);
module.exports = router;