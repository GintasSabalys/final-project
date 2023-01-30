const express = require('express');
const { addToCart, getMyCart, deleteCartItem, payCart } = require('../controllers/cart');
const { checkIfUser } = require('../middleware/auth');

const router = express.Router();

router.post('/', checkIfUser, addToCart);
router.get('/', checkIfUser, getMyCart);
router.delete('/:id', checkIfUser, deleteCartItem);
router.put('/pay', checkIfUser, payCart);

module.exports = router