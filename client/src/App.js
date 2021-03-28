import React from 'react';
import './App.css';
import AppWrapper from './AppWrapper';
import Auth from './components/Auth/Auth'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="body-wrapper">
        <div className="container">
          <Navbar />
          <Route path="/" exact><Auth /></Route>
          <AppWrapper />
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default App
