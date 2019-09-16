import React, { useReducer } from 'react';
import axios from 'axios';

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
  CLEAR_CURRENT,
  CONTACT_ERROR,
  GET_CONTACTS
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contact');

      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };
  //Add Contact
  const addContact = async contact => {
    try {
      const res = await axios.post('/api/contact', contact);

      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };
  //Delete Contact
  const deleteContact = async id => {
    try {
      await axios.delete(`/api/contact/${id}`);

      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };
  //Update contact
  const updateContact = async contact => {
    try {
      const res = await axios.put(`/api/contact/${contact._id}`, contact);

      dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //Set Current Contact
  const setCurrentContact = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  };
  //Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //filter contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //Clear filter
  const clearFilter = text => {
    dispatch({ type: CLEAR_FILTER });
  };

  //clear contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getContacts,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
