import React, { createContext, useState } from 'react';
import optimusAvatar from '../assets/NicePng_optimus-prime-png_1168031.png';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({
      username: username || 'Genius',
      role: 'Administrator',
      avatar: optimusAvatar,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;