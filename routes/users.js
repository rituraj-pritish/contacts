const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')

//@route        POST api/users
//@desc         register a user
//@access       Public
router.post('/register', userController.register)

module.exports = router;