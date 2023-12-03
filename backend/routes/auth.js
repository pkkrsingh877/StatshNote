const express = require('express');
const router = express.Router();
const { getSignup, postSignup, getLogin, postLogin } = require('../controllers/authController');

router.post('/signup', postSignup)
router.get('/signup', getSignup);
router.post('/login', postLogin);
router.get('/login', getLogin);

module.exports = router;