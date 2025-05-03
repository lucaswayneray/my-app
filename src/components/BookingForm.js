import { useState } from 'react';

export default function BookingForm() {
  // State for form inputs
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // NEW: Available times as state
  const [availableTimes] = useState([
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Submitted:', { date, time, guests, occasion });
    // Future: Send data to server or display confirmation
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Book Your Reservation</legend>

        <label htmlFor="res-date">Choose Date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="res-time">Choose Time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button type="submit">Make Your Reservation</button>
      </fieldset>
    </form>
  );
}
