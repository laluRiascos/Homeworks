import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserProvider';
import { LoginPage } from './LoginPage';
import Logged from './Logged';
import { PrivateRoutes } from './PrivateRoutes';

function MainApp() {
  return (
    <UserProvider>
      <Router>
        <Routes path="/login" component={LoginPage} />
        <PrivateRoutes path="/dashboard" component={Logged} />
        {/* other routes */}
      </Router>
    </UserProvider>
  );
}

export default MainApp;