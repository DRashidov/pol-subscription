import React from 'react';
import { Button } from 'react-bootstrap';

export default function LoginButton() {

  return (
    <Button
      // onClick={() => loginWithRedirect()}
      id='qsLoginButton'
      variant='primary'
      className='btn-margin'
    >Log In</Button>
  );
}
