import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav section">
      <ul className="nav-links">
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
