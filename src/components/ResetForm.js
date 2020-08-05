import React, { useState } from 'react';

export default function ResetForm() {
  const [email, setEmail] = useState('');

  return (
    <div>
      return (
      <>
        <h1>Enter your email</h1>
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
        </form>
      </>
      );
    </div>
  );
}
