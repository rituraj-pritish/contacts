import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bg-primary'>
      <Link to='/'>
        <h1>
          <i className='fas fa-address-book' /> Contacts
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
