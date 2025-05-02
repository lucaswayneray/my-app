import serverImage from './assets/Server.jpg';

function Header() {
  return (
    <header className="hero section">
      <h1>Welcome to Little Lemon</h1>
      <p>Authentic Mediterranean flavors made fresh daily.</p>
      <img src={serverImage} alt="Server holding dishes" />
    </header>
  );
}

export default Header;
