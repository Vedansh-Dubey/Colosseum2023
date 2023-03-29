import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './Sections/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Events from './Pages/events';
import { Technohunt, YouthParliament } from './Pages/event_info';

import Loader from './Sections/loader';


const LazyHomepage = lazy(() => import('./Pages/homepage'));
const LazyEvents = lazy(() => import('./Pages/events'));
const LazyAbout = lazy(() => import('./Pages/About'));
const LazyGalleryPage = lazy(() => import('./Pages/Gallery'));



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LazyHomepage />} />
          <Route path="/events" element={<LazyEvents />} />
          <Route path="/events/1" element={<Technohunt />} />
          <Route path="/events/2" element={<YouthParliament />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/gallery" element={<LazyGalleryPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
