import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  authToken: '',
  isLoggedIn: false,
  setAuthToken: () => {},
  setIsLoggedIn: () => {},
});

export default function UserProvider({ children }) {
  const [authToken, setAuthToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ authToken, setAuthToken, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
}
