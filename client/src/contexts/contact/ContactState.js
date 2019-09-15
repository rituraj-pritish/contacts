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
  CLEAR_FILTER,
  CLEAR_CURRENT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: 'personal',
        id: '1',
        name: 'vinny',
        email: 'vinny@gmail.com',
        phone: '98733',
        user: '5d7cd8ad152a40322aeee556',
        date: '2019-09-14T16:16:02.917Z',
        __v: 0
      },
      {
        type: 'professional',
        id: '2',
        name: 'shubham',
        email: 'shubham@gmail.com',
        phone: '98733',
        user: '5d7cd8ad152a40322aeee556',
        date: '2019-09-14T16:16:39.850Z',
        __v: 0
      },
      {
        type: 'personal',
        id: '3',
        name: 'dady',
        email: 'dady@gmail.com',
        phone: '98733',
        user: '5d7cd8ad152a40322aeee556',
        date: '2019-09-14T16:16:52.234Z',
        __v: 0
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
  })
  }
  //Delete Contact
  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  }
  //Set Current Contact
  const setCurrentContact = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    })
  }
  //Clear current contact
  const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT})
  }

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, current: state.current,
    addContact,deleteContact, setCurrentContact, clearCurrent }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
