import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  // Initialize state with an empty object
  const [formData, setFormData] = useState({
    driver: "",
    pickup_location: "",
    dropoff_location: "",
    date: "",
    time: "",
    mode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function OnSubmitBooking(e) {
    e.preventDefault();
    const payload = formData;

    try {
      const response = await fetch("http://localhost:8000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Booking successful!");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="form-container">
      <h2>Book a Taxi</h2>
      <form onSubmit={OnSubmitBooking}>
      <div className="form-group">
          <label htmlFor="driver">Driver:</label>
          <input
            type="text"
            id="driver"
            name="driver"
            value={formData.driver}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pickup_location">Pickup Location:</label>
          <input
            type="text"
            id="pickup_location"
            name="pickup_location"
            value={formData.pickup_location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropoff_location">Dropoff Location:</label>
          <input
            type="text"
            id="dropoff_location"
            name="dropoff_location"
            value={formData.dropoff_location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mode">Mode of Transportation:</label>
          <select
            id="mode"
            name="mode"
            value={formData.mode}
            onChange={handleChange}
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Book Now</button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
