import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone-project-graphics/main/logos/Asset%2016@4x.png" alt="Little Lemon Logo" />
        </div>
        <ul className="nav-links">
  <li><Link to="/">Homepage</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/menu">Menu</Link></li> {/* placeholder route for now */}
  <li><Link to="/booking">Reservations</Link></li>
  <li><Link to="/order">Order Online</Link></li> {/* placeholder route for now */}
  <li><Link to="/login">Login</Link></li> {/* placeholder route for now */}
</ul>
      </div>
    </nav>
  );
}

export default Nav;
