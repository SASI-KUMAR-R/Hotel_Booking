import React from 'react';
import "../Css/Navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate("/login")
    }
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h5 className="logo" onClick={()=>{navigate("/")}}>STAYS.COM</h5>
        <ul className="nav-links">
          <li className="nav-item" onClick={handleclick}>LOGIN</li>
          <li className="nav-item">LOGOUT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
