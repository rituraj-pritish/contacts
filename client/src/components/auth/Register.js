import React, {useEffect, useState, useContext } from 'react';

import AuthContext from '../../contexts/auth/AuthContext';
import AlertContext from '../../contexts/alert/AlertContext';

const Register = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const {register, error,clearErrors, isAuthenticated} = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    //redirect to home
    if(isAuthenticated) {
      props.history.push('/')
    }
    
    if(error === 'User already exists') {
      setAlert(error,'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  },[error,isAuthenticated,props.history])

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert("Passwords don't match", 'danger');
    } else {
      authContext.register({name, email, password});
    }
  };

  return (
    <div className='form-container'>
      <h1>Register Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={handleChange}
          />
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
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={handleChange}
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
