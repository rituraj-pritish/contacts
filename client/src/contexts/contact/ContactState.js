import React, { useReducer } from 'react';
import uuid from 'uuid/v4';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CONTACTS,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: 'personal',
        _id: '1',
        name: 'vinny',
        email: 'vinny@gmail.com',
        phone: '98733',
        user: '5d7cd8ad152a40322aeee556',
        date: '2019-09-14T16:16:02.917Z',
        __v: 0
      },
      {
        type: 'professional',
        _id: '2',
        name: 'shubham',
        email: 'shubham@gmail.com',
        phone: '98733',
        user: '5d7cd8ad152a40322aeee556',
        date: '2019-09-14T16:16:39.850Z',
        __v: 0
      },
      {
        type: 'personal',
        _id: '3',
        name: 'dady',
        email: 'dady@gmail.com',
        phone: '98733',
        user: '5d7cd8ad152a40322aeee556',
        date: '2019-09-14T16:16:52.234Z',
        __v: 0
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
