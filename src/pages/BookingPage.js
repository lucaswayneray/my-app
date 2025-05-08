import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
/* global submitAPI */

export default function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    }
  };

  return (
    <main className="booking-page">
      <h1>Reserve a Table at Little Lemon</h1>
      <p>Fill out the form below to book your experience with us!</p>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm} 
      />
    </main>
  );
}
