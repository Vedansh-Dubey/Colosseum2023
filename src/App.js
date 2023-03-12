import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./Pages/homepage"

function App() {
  return (
    <Router>
        <Navbar/>
        <Homepage/>
    </Router>
  );
}

export default App;
