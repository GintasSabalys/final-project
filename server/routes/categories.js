const express = require('express');
const { addCategory, getCategories } = require('../controllers/category');
const { checkIfAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/', checkIfAdmin, addCategory);
router.get('/', getCategories);

module.exports = router