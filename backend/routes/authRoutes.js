const express = require('express');
const router = express.Router();
const { register, login, loginAdmin } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
// POST /api/admin/login
router.post('/loginAdmin', loginAdmin);


module.exports = router;
