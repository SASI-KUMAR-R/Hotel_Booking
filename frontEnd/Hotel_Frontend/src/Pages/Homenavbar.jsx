import React, { useState } from 'react';
import '../Css/Homenavbar.css';

const Homenavbar = () => {
  const [location, setLocation] = useState('');
  const [adults, setAdults] = useState(1);
  const [room, setRoom] = useState(1);
  const [children, setChildren] = useState(0);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    console.log('Location:', location);
    console.log('Adults:', adults);
    console.log('Children:', children);
    console.log('Price Range:', minPrice, '-', maxPrice);
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

      <select value={room} onChange={(e) => setRoom(e.target.value)} className="homenavbar-select">
        <option value="1">1 Room</option>
        <option value="2">2 Rooms</option>
        <option value="3">3 Rooms</option>
      </select>

      <select value={adults} onChange={(e) => setAdults(e.target.value)} className="homenavbar-select">
        <option value="1">1 Adult</option>
        <option value="2">2 Adults</option>
        <option value="3">3 Adults</option>
        <option value="4">4 Adults</option>
      </select>

      <select value={children} onChange={(e) => setChildren(e.target.value)} className="homenavbar-select">
        <option value="0">0 Children</option>
        <option value="1">1 Child</option>
        <option value="2">2 Children</option>
        <option value="3">3 Children</option>
      </select>

      <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="homenavbar-select">
        <option value="">Min Price</option>
        <option value="500">₹500</option>
        <option value="1000">₹1000</option>
        <option value="2000">₹2000</option>
        <option value="3000">₹3000</option>
      </select>

      <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="homenavbar-select">
        <option value="">Max Price</option>
        <option value="2000">₹2000</option>
        <option value="3000">₹3000</option>
        <option value="4000">₹4000</option>
        <option value="5000">₹5000</option>
      </select>

      <button onClick={handleSearch} className="homenavbar-button">Search</button>
    </nav>
  );
}

export default Homenavbar;
