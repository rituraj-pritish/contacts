const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('../middlewares/validator');
const AuthController = require('../controllers/auth');
const auth = require('../middlewares/auth');

const User = require('../models/User');

//@route      POST api/auth/login
//@desc       login user
//@access     Public
router.post('/login', validator('login'), AuthController.login);

//@route      GET api/auth/login
//@desc       get user
//@access     Private
router.get('/current_user', auth, AuthController.current_user);

module.exports = router;
