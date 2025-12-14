const express = require('express');
const router = express.Router();
const { getAll, getById, create } = require('../controllers/studentController');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);   // ✅ THIS LINE FIXES 404

module.exports = router;
