import React from 'react';
import "../Css/Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Pages/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userType, logout } = useAuth();

  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h5 className="logo" onClick={() => navigate("/")}>STAYS.COM</h5>
        <ul className="nav-links">
          {!isLoggedIn && <li className="nav-item" onClick={handleLogin}>LOGIN</li>}
          {isLoggedIn && <li className="nav-item" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;