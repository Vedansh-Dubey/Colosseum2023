import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './Pages/events';
import Homepage from "./Pages/homepage"
import {Technohunt, Technical} from "./Pages/event_info"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/1" element={<Technohunt />} />
        <Route path="/events/2" element={<Technical />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
      