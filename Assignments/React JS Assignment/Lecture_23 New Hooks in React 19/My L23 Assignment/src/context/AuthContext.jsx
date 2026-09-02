import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const [usersList, setUsersList] = useState([
    { id: 1, name: 'Alice', role: 'user', isBlocked: false },
    { id: 2, name: 'Bob', role: 'user', isBlocked: false }
  ]);

  const login = (role, targetUserId = 1) => {
    setAuthError(null);

    if (role === 'admin') {
      setUser({ id: 99, name: 'System Admin', role: 'admin', isBlocked: false });
      return true;
    }

    // Check if target user exists in active user list
    const foundUser = usersList.find((u) => u.id === targetUserId);

    if (!foundUser) {
      setAuthError('This account has been DELETED by an Admin.');
      return false;
    }

    if (foundUser.isBlocked) {
      setAuthError('This account is BLOCKED by an Admin. Access Denied.');
      return false;
    }

    setUser(foundUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    setAuthError(null);
  };

  const blockUser = (id) => {
    setUsersList((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isBlocked: !u.isBlocked } : u))
    );

    // If currently logged-in user gets blocked by admin, log them out
    if (user?.id === id) {
      logout();
    }
  };

  const deleteUser = (id) => {
    setUsersList((prev) => prev.filter((u) => u.id !== id));

    // If currently logged-in user gets deleted by admin, log them out
    if (user?.id === id) {
      logout();
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, authError, login, logout, usersList, blockUser, deleteUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);