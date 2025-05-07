import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useReducer } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import AppRoutes from './AppRoutes';
import { initializeTimes, updateTimes } from './bookingUtils';


function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function updateTimes(state, action) {
  if (action.type === "update_times") {
    return initializeTimes();
  }
  return state;
}

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

