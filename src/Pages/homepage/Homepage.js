import React, { useEffect, useRef, useState } from 'react';
import './Homepage.css';
import ship from './ship.mp4';
import Loader from '../../Sections/loader';

const VideoPlayer = ({ onLoad }) => {
  const videoRef = useRef(null);

  const handleLoadedData = () => {
    const video = videoRef.current;
    const duration = video.duration;
    const buffered = video.buffered.end(0);
    if (buffered >= duration * 0.2) {
      onLoad();
    } else {
      setTimeout(handleLoadedData, 500);
    }
  };

  return (
    <video autoPlay loop muted onLoadedData={handleLoadedData} ref={videoRef}>
      <source src={ship} type="video/mp4" />
    </video>
  );
};

function Homepage() {
  const [loading, setLoading] = useState(true);
  const daysRef = useRef(null);
  const hoursRef = useRef(null);
  const minsRef = useRef(null);
  const secsRef = useRef(null);

  useEffect(() => {
    let intervalId = setInterval(() => {
      const now = Date.now();
      const futureDate = new Date('4 19 2023').getTime();
      const difference = futureDate - now;

      const days = Math.floor(difference / 1000 / 60 / 60 / 24);
      const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
      const mins = Math.floor((difference / 1000 / 60) % 60);
      const secs = Math.floor((difference / 1000) % 60);

      daysRef.current.innerHTML = days;
      hoursRef.current.innerHTML = hours;
      minsRef.current.innerHTML = mins;
      secsRef.current.innerHTML = secs;
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div className="homepage-container">
      {loading && <Loader />}      
      <VideoPlayer onLoad={handleVideoLoad} />
      <div className="box">
        <h1 className="homepage-heading">Colosseum 13.0</h1>
      </div>
      <div className="countdown-container">
        <div>
          <p ref={daysRef} className="big-text">
            0
          </p>
          <span>Days</span>
        </div>
        <div>
          <p ref={hoursRef} className="big-text">
            0
          </p>
          <span>Hours</span>
        </div>
        <div>
          <p ref={minsRef} className="big-text">
            0
          </p>
          <span>Min</span>
        </div>
        <div>
          <p ref={secsRef} class="big-text">
            0
          </p>
          <span>Sec</span>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
