import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <Nav />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
