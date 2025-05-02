import { Link } from 'react-router-dom';


function Footer() {
    return (
      <footer>
        <nav>
          <ul>
            <li><a href="/home">Homepage</a></li>
            <li><a href="/about">About Us</a></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/orderonline">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </footer>
    );
  }

  export default Footer;
