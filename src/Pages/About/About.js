import React from 'react';
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1 className='h1'>About Colosseum 13.0</h1>
      <p className='p'>Colosseum 13.0 is an international level technical event organized by Semicolon tech club and students of Information Technology of Shri Ramdeobaba College of Engineering and Management, Nagpur.</p>
      <h2 className='h2'>Event Highlights</h2>
      <ul className='ul'>
        <li className='li'>Technical Competitions</li>
        <li className='li'>Workshops and Seminars</li>
        <li className='li'>Industry Experts as Guest Speakers</li>
        <li className='li'>Cultural and Sports Events</li>
      </ul>
      <h2 className='h2'>Event Details</h2>
      <p className='p'>Date: 18-21 April 2023</p>
      <p className='p'>Venue: RCOEM, Nagpur</p>
    </div>
  );
}

export default About;
