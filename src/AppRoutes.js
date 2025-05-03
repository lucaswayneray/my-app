import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BookingPage from './pages/BookingPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default AppRoutes;
