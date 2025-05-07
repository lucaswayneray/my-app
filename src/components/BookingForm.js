export default function BookingForm({ availableTimes, dispatch }) {
    console.log('Available Times:', availableTimes);
  console.log('Dispatch:', dispatch);
  
    const handleDateChange = (e) => {
      const selectedDate = e.target.value;
      dispatch({ type: "update_times", payload: selectedDate });
    };
  
    return (
      <form className="booking-form">
        <fieldset>
          <legend>Book Your Reservation</legend>
  
          <label htmlFor="res-date">Choose Date</label>
          <input
            type="date"
            id="res-date"
            onChange={handleDateChange}
            required
          />
  
          <label htmlFor="res-time">Choose Time</label>
          <select id="res-time" required>
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
  
          <label htmlFor="guests">Number of Guests</label>
          <input type="number" id="guests" min="1" max="10" required />
  
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" required>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
  
          <button type="submit">Make Your Reservation</button>
        </fieldset>
      </form>
    );
  }
  