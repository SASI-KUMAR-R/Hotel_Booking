import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Homenavbar.css';

const Homenavbar = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState(formatDate(today));
  const [checkOut, setCheckOut] = useState(formatDate(tomorrow));

  const navigate = useNavigate();

  const handleSearch = () => {
    const searchData = { location, checkIn, checkOut };
    navigate('/hotellisting', { state: searchData });
  };

  return (
    <nav className="homenavbarcontainer">
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="homenavbar-input"
      />

      <input
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        className="homenavbar-input"
      />

      <input
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        className="homenavbar-input"
      />

      <button onClick={handleSearch} className="homenavbar-button">Search</button>
    </nav>
  );
};

export default Homenavbar;
