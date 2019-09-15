import React, { useEffect, useState, useContext } from 'react';
import ContactContext from '../../contexts/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  useEffect(() => {
    if (current !== null) {
      setContact({...current});
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const { name, email, phone, type } = contact;

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    clearCurrent();
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(current === null) {
      addContact(contact);
    } else {
      updateContact(contact)
    }
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-primary'>{current ? 'Update Contact' : 'Add Contact'}</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Email'
        name='email'
        value={email}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={handleChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={handleChange}
      />
      Personal{'  '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={handleChange}
      />
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={handleClear} >Clear</button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
