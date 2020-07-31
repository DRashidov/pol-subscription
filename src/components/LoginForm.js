import React, { useState } from 'react';

import Loading from './loading';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const REDIRECT_URL = 'http://localhost:3000/profile';
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const BASE_URL = 'https://dev-polaris-subscription.us.auth0.com/oauth/token';
  const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const CLIENT_SECRET = process.env.REACT_APP_AUTH0_CLIENT_SECRET;
  const AUTH_URL = `${BASE_URL}`;

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(proxy + AUTH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=password&client_id=${CLIENT_ID}&username=${email}&password=${password}`,
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // redirect to '/main page POLARIS'
      }

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const signInGoogle = async () => {
    const response = await fetch(
      proxy +
        `https://dev-polaris-subscription.us.auth0.com/authorize?response_type=token&client_id=${CLIENT_ID}&connection=google-oauth2&redirect_uri=${REDIRECT_URL}`
    );

    console.log(response);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1>WELCOME</h1>
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
        <button type='submit' className='btn btn-primary' onClick={handleLogin}>
          Sign In
        </button>
        {error && <div className='text-danger'>{error}</div>}
      </form>

      <div className='mt-5'>
        <h3>Or you can sign in using social accounts</h3>
        <div>
          <button className='btn mr-3 btn-danger' onClick={signInGoogle}>
            Sign In with GOOGLE
          </button>
          {/* <button className='btn btn-primary disabled' onClick={signInGoogle}>
            Sign In with FACEBOOK
          </button> */}
        </div>
      </div>
    </>
  );
}
