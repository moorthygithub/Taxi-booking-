import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to our Taxi Booking App!</h1>
      <p>This is the home page of our application. You can use the navigation above to explore different features:</p>
      <ul>
        <li>Click on <strong>Booking</strong> to book a taxi.</li>
        <li>Click on <strong>Availability</strong> to view a map of available taxis.</li>
      </ul>
    </div>
  );
}

export default HomePage;
