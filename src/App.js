import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './Sections/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Events from './Pages/events';
// import Homepage from './Pages/homepage';
import { Technohunt, YouthParliament } from './Pages/event_info';
// import OurTeamSection from './Pages/our_team';
// import About from './Pages/About';
// import GalleryPage from './Pages/Gallery';
import Loader from './Sections/loader';
// import { YouthParliament } from './Pages/event_info';

const LazyHomepage = lazy(() => import('./Pages/homepage'));
const LazyEvents = lazy(() => import('./Pages/events'));
const LazyOurTeamSection = lazy(() => import('./Pages/our_team'));
const LazyAbout = lazy(() => import('./Pages/About'));
const LazyGalleryPage = lazy(() => import('./Pages/Gallery'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHomepage />} />
          <Route path="/events" element={<LazyEvents />} />
          <Route path="/events/1" element={<Technohunt />} />
          <Route path="/events/2" element={<YouthParliament />} />
          <Route path="/our-team" element={<LazyOurTeamSection />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/gallery" element={<LazyGalleryPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
