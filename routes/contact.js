const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const validator = require('../middlewares/validator');
const ContactController = require('../controllers/contact')

//@route        GET api/contacts
//@desc         get all users contacts
//@desc         Private
router.get('/', auth, ContactController.getContacts) 

//@route        POST api/contacts
//@desc         add contacts
//@desc         Private
router.post('/', [auth], ContactController.addContact) 

module.exports = router;
