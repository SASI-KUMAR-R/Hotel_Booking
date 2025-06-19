import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Css/HotelListing.css';


const HotelListing = () => {
  const { state } = useLocation();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = 'uDuNNHG7uu39KU6zV5virKnj'; 

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const url = 'https://www.searchapi.io/api/v1/search';
        const params = {
          engine: 'google_hotels',
          q: `Hotels in ${state.location}`,
          check_in_date: state.checkIn,
          check_out_date: state.checkOut,
          api_key: apiKey
        };

        const response = await axios.get(url, { params });
        console.log(response.data);

        setHotels(response.data.properties || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, [state, apiKey]);

  if (loading) return <div>Loading hotels...</div>;

  return (
  <div className="hotel-listing-container">
    <h2 className="hotel-listing-title">Hotel Listings for {state.location}</h2>
    {hotels.length === 0 ? (
      <p>No hotels found for this location.</p>
    ) : (
      <div className="hotel-grid">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            {hotel.images && hotel.images.length > 0 && (
              <img src={hotel.images[0].thumbnail} alt={hotel.name} />
            )}

            <div className="hotel-card-content">
              <h3>{hotel.name}</h3>
              <p><strong>Rating:</strong> {hotel.rating} ⭐ ({hotel.reviews} reviews)</p>
              <p><strong>Price per Night:</strong> {hotel.price_per_night ? hotel.price_per_night.price : 'Not available'}</p>
              <p><strong>Total Price:</strong> {hotel.total_price ? hotel.total_price.price : 'Not available'}</p>
              <a href={hotel.link} target="_blank" rel="noopener noreferrer">
                View Hotel
              </a>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);


};

export default HotelListing;
