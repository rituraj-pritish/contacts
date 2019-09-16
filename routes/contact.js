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

// @route     PUT api/contacts/:id
// @desc      Update contact
// @access    Private
router.put('/:id', auth, ContactController.updateContact);

// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', auth, ContactController.deleteContact);

module.exports = router;
