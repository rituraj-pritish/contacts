const { validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

module.exports = {
  getContacts: async (req, res) => {
    try {
      const contacts = await Contact.find({ user: req.user.id }).sort({
        data: -1
      });
      res.json(contacts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  },

  addContact: async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('server error');
    }
  }
};
