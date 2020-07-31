import React, { useState } from 'react';

import RegisterPage from '../components/RegisterPage';
import LoginPage from '../components/LoginPage';

const Home = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      {!isRegistered && <RegisterPage setIsRegistered={setIsRegistered} />}
      {isRegistered && <LoginPage />}
    </>
  );
};

export default Home;
