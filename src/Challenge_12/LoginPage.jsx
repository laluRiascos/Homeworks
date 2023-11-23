import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginPage = () => {
  const { user, login, logout } = useContext(UserContext);

  const handleLogin = () => {
    const fakeUser = { name: 'Laura Riascos' };
    login(fakeUser);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <>
          <p>Holiwis, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};