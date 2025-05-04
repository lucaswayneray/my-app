import BookingForm from '../components/BookingForm';

export default function BookingPage({ availableTimes, setAvailableTimes } ) {
  return (
    <main className="booking-page">
      <h1>Reserve a Table at Little Lemon</h1>
      <p>Fill out the form below to book your experience with us!</p>
      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
    </main>
  );
}
