import React from 'react';
import { UserProvider } from './Challenge_13/UserProvider';
import { LoginPage } from './Challenge_13/LoginPage';

function App() {
  return (
    <UserProvider>
      <LoginPage />
    </UserProvider>
  );
}

export default App;
