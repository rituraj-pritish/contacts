const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys')

const User = require('../models/User');

module.exports = {
  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ 'local.email': email });
      if (existingUser) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      const user = new User({
        name,
        local: {
          email,
          password
        }
      });

      const salt = await bcrypt.genSalt(10);
      user.local.password = await bcrypt.hash(password, salt);

      await user.save();
      
      //object that is send in the token
      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, keys.jwtSecret,{
        expiresIn: 3600
      },(err,token) => {
        if(err) throw err;
        res.json({token});
      })
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
};
