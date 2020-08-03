import { createContext, useContext } from 'react';

export const UserContext = createContext();

export function useUserData() {
  return useContext(UserContext);
}