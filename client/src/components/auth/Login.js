import React, {useEffect, useState, useContext } from 'react';

import AuthContext from '../../contexts/auth/AuthContext';
import AlertContext from '../../contexts/alert/AlertContext';

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const {login, error,clearErrors, isAuthenticated} = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    //redirect to home
    if(isAuthenticated) {
      props.history.push('/')
    }
    
    if(error === 'Invalid Credentials') {
      setAlert(error,'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  },[error,isAuthenticated,props.history])

  const [user, setUser] = useState({

    email: '',
    password: ''

  });

  const { email, password } = user;

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!email || !password) {
      setAlert('Email and password is required','danger')
    }
    login({email,password});
  
  };

  return (
    <div className='form-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div >
        
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        
          </div>
          <input type='submit' value='Login' className='btn btn-primary btn-block' />
      </form>
    </div>
  );
};

export default Login;
