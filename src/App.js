import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './Sections/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Events from './Pages/events';
import { AwsWorkshop, BoxCricket, CascadingCaptain, InnovationIsland, Recrewtment, Technohunt, Valorant, YouthParliament } from './Pages/event_info';
import Homepage from './Pages/homepage';

import Loader from './Sections/loader';


// const LazyHomepage = lazy(() => import('./Pages/homepage'));
const LazyEvents = lazy(() => import('./Pages/events'));
const LazyAbout = lazy(() => import('./Pages/About'));
const LazyGalleryPage = lazy(() => import('./Pages/Gallery'));



function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/events" element={<LazyEvents />} />
          <Route path="/events/YouthParliament" element={<YouthParliament />} />
          <Route path="/events/Valorant" element={<Valorant />} />
          <Route path="/events/CascadingCaptain" element={<CascadingCaptain />} />
          <Route path="/events/InnovationIsland" element={<InnovationIsland />} />
          <Route path="/events/TechnoHunt" element={<Technohunt />} />
          <Route path="/events/BoxCricket" element={<BoxCricket />} />
          <Route path="/events/Recrewtment" element={<Recrewtment />} />
          <Route path="/events/AwsWorkshop" element={<AwsWorkshop />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/gallery" element={<LazyGalleryPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
