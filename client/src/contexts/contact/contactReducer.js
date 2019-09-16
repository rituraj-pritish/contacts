import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CONTACTS,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CLEAR_CURRENT,
  CONTACT_ERROR
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
        loading: false
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload,...state.contacts ],
        loading: false
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._id !== payload),
        loading: false
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact._id === payload._id) {
            return payload;
          }
          return contact;
        })
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          //match payload -> text and gi -> global insensitive
          const regex = new RegExp(`${payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
