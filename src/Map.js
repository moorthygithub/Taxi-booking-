import React, { useState } from 'react';

function AvailabilityChecker() {
  const [bikeAvailable, setBikeAvailable] = useState(false);
  const [carAvailable, setCarAvailable] = useState(false);

  const handleCheckAvailability = () => {


    const randomBikeAvailability = Math.random() < 0.5; 
    const randomCarAvailability = Math.random() < 0.5; 

    setBikeAvailable(randomBikeAvailability);
    setCarAvailable(randomCarAvailability);
  };

  return (
    <div>
      <h2>Check Availability</h2>
      <button onClick={handleCheckAvailability}>Check Availability</button>
      {bikeAvailable && <p>Bike is available</p>}
      {carAvailable && <p>Car is available</p>}
    </div>
  );
}

export default AvailabilityChecker;
