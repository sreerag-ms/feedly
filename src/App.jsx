import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/Landing';
import ArticlePage from './components/Article';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/detail" component={ArticlePage} />
    </Router>
  );
}

export default App;
