import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Header from './HomePage';
import BookingForm from './BookingForm';
import Map from './Map';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <Router>
      <div>

        <Navigation />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
