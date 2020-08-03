import React, { useState } from 'react';

import Loading from './loading';

export default function RegisterPage({ setIsRegistered }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  const signUpWithDB = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = {
      client_id: 'jbx0Pnr3R4kCmdv1VyDgAJnl1IlIgp7o',
      email: email,
      password: password,
      connection: 'Username-Password-Authentication',
    };

    const response = await fetch(
      // `https://cors-anywhere.herokuapp.com/` +
        `https://dev-polaris-subscription.us.auth0.com/dbconnections/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    setIsLoading(false);

    if (data.statusCode === 400) {
      setError(data.message);
      console.log(data);
    }

    if (data._id !== '') {
      setIsRegistered(true);
      console.log(data);
    }
    console.log(data);
  };

  return (
    <>
      <h1>REGISTER ACCOUNT</h1>
      <form className='w-50'>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={signUpWithDB}
        >
          Sign Up
        </button>
        {error && <div className='text-danger'>{error}</div>}
      </form>
    </>
  );
}
