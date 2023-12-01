import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';
import TollGateForm from './components/TollGateForm';
import ParkingManagement from './components/ParkingManagement';
import PointsManagement from './components/PointsManagement';
import TransactionList from './components/TransactionList';
import HistoryPage from './components/HistoryPage';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  const userType = localStorage.getItem('type');

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    setLoggedIn(false);
  };


  return (
    <>
      {isLoggedIn ? (
        <>
          <Header isLoggedIn={true} onLogout={handleLogout} userType={userType} />
          <TransactionList />
          <PointsManagement />
          {userType === 'Toll' && <TollGateForm />}

        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
