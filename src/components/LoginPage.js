import React, { useState } from 'react';

import ActivateAccount from './ActivateAccount';
import LoginForm from './LoginForm';

export default function LoginPage() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <>
      {!isConfirmed && (
        <ActivateAccount setIsConfirmed={() => setIsConfirmed(true)} />
      )}
      {isConfirmed && <LoginForm />}
    </>
  );
}
