// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the custom CSS file


const Header = ({ isLoggedIn, onLogout, userType }) => {
  return (
    <header className="header-container">
      <h1 className="header-title">GatePay</h1>
      {isLoggedIn && (
        <>
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </>
      )}
    </header>
  );
};

export default Header;