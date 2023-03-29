import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './Sections/Navbar';
import {HashRouter, Route, Routes, Redirect, Navigate } from 'react-router-dom';
import Events from './Pages/events';
import { Technohunt, YouthParliament } from './Pages/event_info';
// import Homepage from './Pages/homepage';

import Loader from './Sections/loader';


const LazyHomepage = lazy(() => import('./Pages/homepage'));
const LazyEvents = lazy(() => import('./Pages/events'));
const LazyAbout = lazy(() => import('./Pages/About'));
const LazyGalleryPage = lazy(() => import('./Pages/Gallery'));



function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LazyHomepage />} />
          <Route path="/events" element={<LazyEvents />} />
          <Route path="/events/1" element={<Technohunt />} />
          <Route path="/events/2" element={<YouthParliament />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/gallery" element={<LazyGalleryPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
