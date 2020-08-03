import React, { useState, useContext } from 'react';

import RegisterPage from '../components/RegisterPage';
import LoginPage from '../components/LoginPage';
import Profile from './Profile';
import { UserContext } from '../context/user';

const Home = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const { isLoggedIn } = useContext(UserContext);

  console.log('isLoggedIn', isLoggedIn);

  if (isLoggedIn) {
    return <Profile />;
  }

  return (
    <>
      {!isRegistered && <RegisterPage setIsRegistered={setIsRegistered} />}
      {isRegistered && <LoginPage />}
    </>
  );
};

export default Home;
