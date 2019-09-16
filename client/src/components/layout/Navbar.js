import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/auth/AuthContext';
import ContactContext from '../../contexts/contact/contactContext'

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const {clearContacts} = contactContext;

  const handleLogout = () => {
    logout()
    clearContacts()
  }

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href='#!' onClick={handleLogout} >
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Sign Up</Link>
      </li>
      <li>
        <Link to='/login'>Sign In</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <Link to='/'>
        <h1>
          <i className='fas fa-address-book' /> Contacts
        </h1>
      </Link>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
