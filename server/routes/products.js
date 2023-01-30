const express = require('express');
const { addProduct, getProductsByCategoryId } = require('../controllers/product');
const { checkIfAdmin, checkIfUser } = require('../middleware/auth');
const router = express.Router();

router.post('/', checkIfAdmin, addProduct);
router.get('/:id', checkIfUser, getProductsByCategoryId);

module.exports = router