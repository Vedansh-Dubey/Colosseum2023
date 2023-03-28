import React, { useEffect } from 'react';
import './Homepage.css';
import ship from './ship.mp4';

const VideoPlayer = () => {
  return (
    <video autoPlay loop muted>
      <source src={ship} type="video/mp4" />
    </video>
  );
};

function Homepage() {
  useEffect(() => {
    let countDown = () => {
      let futureDate = new Date("4 19 2023");
      let currentDate = new Date();
      let myDate = futureDate - currentDate;

      let dayss = Math.floor(myDate / 1000 / 60 / 60 / 24);
      let hourss = Math.floor(myDate / 1000 / 60 / 60) % 24;
      let mins = Math.floor(myDate / 1000 / 60) % 60;
      let secs = Math.floor(myDate / 1000) % 60;

      document.getElementById('days').innerHTML = dayss;
      document.getElementById('hours').innerHTML = hourss;
      document.getElementById('min').innerHTML = mins;
      document.getElementById('sec').innerHTML = secs;
    };

    countDown();

    setInterval(countDown, 1000);
  }, []);

  return (
    <div className="homepage-container">
      <React.Suspense fallback={<div>Loading...</div>}>
        <VideoPlayer />
      </React.Suspense>
      <div className="box">
        <h1 className="homepage-heading">Colosseum 13.0</h1>
      </div>
      <div class="countdown-container">
        <div>
          <p id="days" class="big-text">
            0
          </p>
          <span>Days</span>
        </div>
        <div>
          <p id="hours" class="big-text">
            0
          </p>
          <span>Hours</span>
        </div>
        <div>
          <p id="min" class="big-text">
            0
          </p>
          <span>Min</span>
        </div>
        <div>
          <p id="sec" class="big-text">
            0
          </p>
          <span>Sec</span>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
