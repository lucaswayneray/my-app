import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';


export default function AppRoutes({ availableTimes, dispatch }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}
