import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useReducer } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import AppRoutes from './AppRoutes';
import { initializeTimes, updateTimes } from './bookingUtils';


function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Router>
      <Nav />
      <AppRoutes availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </Router>
  );
}

export default App;

