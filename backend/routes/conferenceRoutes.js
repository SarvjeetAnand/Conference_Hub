const express = require('express');
const router = express.Router();
const {
  getAll, getOne, create, update, remove, registerUser, getAllRegistrations
} = require('../controllers/conferenceController');
const { adminAuth, protect }  = require('../middleware/authMiddleware');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', adminAuth, create);
router.put('/:id', adminAuth, update);
router.delete('/:id', adminAuth, remove);
router.post('/:id/register',protect, registerUser);
router.get('/registrations/all', adminAuth, getAllRegistrations);

module.exports = router;
