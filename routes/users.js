const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')
const validator = require('../middlewares/validator');

//@route        POST api/users
//@desc         register a user
//@access       Public
router.post('/register', validator('register'), userController.register)

module.exports = router;