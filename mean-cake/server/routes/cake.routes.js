const express = require('express');
const router = express.Router();

const cakeController = require('../controllers/cake.controller');

router.get('/',  cakeController.getCakes);
router.post('/', cakeController.createCakes);
router.get('/:id', cakeController.getCake);
router.put('/:id', cakeController.editCake);
router.delete('/:id', cakeController.deleteCake);

module.exports = router;