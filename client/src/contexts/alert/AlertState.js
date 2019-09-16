import React, { useReducer } from 'react';
import uuid from 'uuid/v4';

import AlertContext from './AlertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = [];
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //set alert
  const setAlert = (msg, type) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });

    setTimeout(() =>
      dispatch(
        {
          type: REMOVE_ALERT,
          payload: id
        }),
        4000
      
    );
  };

  return (
    <AlertContext.Provider value={{
      alerts: state,
      setAlert
    }}>{props.children}</AlertContext.Provider>
  );
};

export default AlertState;
