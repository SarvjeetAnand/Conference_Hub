const express = require('express');
const router = express.Router();
const { getAll, create, remove } = require('../controllers/feedbackController');
const { adminAuth, protect } = require('../middleware/authMiddleware');

router.get('/', adminAuth, getAll);
router.post('/', protect, create);
router.delete('/:id', adminAuth, remove);

module.exports = router;
