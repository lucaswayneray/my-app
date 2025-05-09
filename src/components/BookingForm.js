import { useState } from 'react';
import {
  isDateValid,
  isTimeValid,
  isGuestsValid,
  isOccasionValid
} from '../utils/validation';
console.log('isDateValid:', isDateValid);


export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'update_times', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    console.log('Form submitted:', formData);
    if (submitForm) {
      submitForm(formData);
    }
  };

  const isFormValid =
    isDateValid(date) &&
    isTimeValid(time) &&
    isGuestsValid(guests) &&
    isOccasionValid(occasion);

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Table Reservation Form"
    >
      <fieldset>
        <legend>Book Your Reservation</legend>

        <label htmlFor="res-date">
          Choose Date
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          min={todayStr}
          required
          aria-required="true"
        />

        <label htmlFor="res-time">
          Choose Time
        </label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">
          Number of Guests
        </label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          max="10"
          required
          aria-required="true"
        />

        <label htmlFor="occasion">
          Occasion
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-required="true"
        >
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <button
          type="submit"
          disabled={!isFormValid}
        >
          Make Your Reservation
        </button>
      </fieldset>
    </form>
  );
}
