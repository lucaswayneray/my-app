function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone-project-graphics/main/logos/Asset%2016@4x.png" alt="Little Lemon Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Homepage</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
