const { check } = require('express-validator');

module.exports = validate = method => {
  switch (method) {
    case 'register': {
      return [
        check('name', 'Name is required')
          .not()
          .isEmpty(),

        check('email', 'Invalid email')
          .exists()
          .isEmail(),

        check(
          'password',
          'Please enter a password with 6 or more characters '
        ).isLength({ min: 6 })
      ];
    }
    case 'login': {
      return [
        check('email', 'Invalid Email').exists().isEmail(),
        check('password', 'Password is required').exists()
      ]
    }
    case 'contact': {
      return [
        check('name', 'Name is required').not().isEmpty()
      ]
    }
  }
};
