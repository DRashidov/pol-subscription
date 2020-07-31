import React from 'react';
import { Button } from 'react-bootstrap';

export default function LogoutButton() {

  return (
    <Button
      // onClick={() => logout()}
      id='qsLoginButton'
      variant='danger'
      className='btn-margin'
    >Log Out</Button>
  );
}
