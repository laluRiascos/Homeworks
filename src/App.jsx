import React from 'react';
import { UserProvider } from './Challenge_12/UserProvider';
import { LoginPage } from './Challenge_12/LoginPage';

function App() {
  return (
    <UserProvider>
      <LoginPage />
    </UserProvider>
  );
}

export default App;
