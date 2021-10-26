import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/Landing';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
