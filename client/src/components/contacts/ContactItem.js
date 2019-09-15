import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ContactContext from '../../contexts/contact/contactContext';
import { CLEAR_CURRENT } from '../../contexts/types';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { id, name, email, phone, type } = contact;

  const handleDelete = () => {
    contactContext.deleteContact(id);
    contactContext.clearCurrent();
  };

  const handleEdit = () => {
    contactContext.setCurrentContact(contact);
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}
        {'  '}{' '}
        <span
          style={{ float: 'right' }}
          className={`badge ${
            type === 'professional' ? 'badge-success' : 'badge-primary'
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm' onClick={handleEdit}>
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={handleDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.prototypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
