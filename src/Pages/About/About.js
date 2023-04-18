import React from 'react';
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className='top-logo'>
        <img className="stc-logo logos" src="https://i.ibb.co/G54hgkK/stc-official-logo-1-1.png" alt="stc-official-logo" />
        <img className="rcoem-logo logos" src="https://i.ibb.co/JmV9Fk4/rcoem-logo.png" alt="rcoem-logo" border="0" />
        <img className='ieee-logo logos' src="https://i.ibb.co/rGdBB0L/ieee-logo.png" alt="ieee-logo" />
      </div>
      <h1 className='h1'>About Colosseum 13.0</h1>
      <p className='p'>Colosseum13.0, the ultimate tech extravaganza organized by Semicolon Tech Club and IT Department of Shri Ramdeobaba College of Engineering and Management, Nagpur, powered by IEEE RCOEM Student Branch! With a legacy of successful editions, Colosseum has become one of the most anticipated events in the technical community.</p>
      <h2 className='h2'>Event Highlights</h2>
      <ul className='ul'>
        <li className='li'>Technical Competitions</li>
        <li className='li'>Workshops and Seminars</li>
        <li className='li'>Industry Experts as Guest Speakers</li>
        <li className='li'>Cultural and Sports Events</li>
      </ul>
      <h2 className='h2'>Event Details</h2>
      <p className='p'>Date: 19-21 April 2023</p>
      <p className='p'>Venue: RCOEM, Nagpur</p>

      <div className='key-persons'>
        <h2 className='h2'>Key Persons</h2>
        <div className='person-wrapper'>
          <div className='person'>
            <h3 className='person-name'>Yash Chotwani</h3>
            <p className='person-info'>Student President<br />Semicolon Tech Club</p>
          </div>

          <div className='person'>
            <h3 className='person-name'>Dr. D.S. Adane</h3>
            <p className='person-info'>Coordinator<br />Semicolon Tech Club</p>
          </div>

          <div className='person'>
            <h3 className='person-name'>Dr. Rakesh Kadu</h3>
            <p className='person-info'>Coordinator<br />Colosseum 13.0</p>
          </div>
        </div>
      </div>

      <div className='row-wrapper'>
        <h2 className='h2'>Our Sponsors</h2>
        <div class="sponsor-wrapper">
          <div class="sponsor"><img className='sposnsor-img' src="https://i.ibb.co/HNPHW1D/career-logo.png" alt="career-logo" border="0" /></div>
          <div class="sponsor"><img className='sposnsor-img' src="https://i.ibb.co/b3FTzgn/Fendahl-Logo.png" alt="Fendahl-Logo" border="0" /></div>
          <div class="sponsor"><img className='sposnsor-img' src="https://i.ibb.co/t4XcHt1/gaming-world.png" alt="gaming-world" border="0" /></div>
          <div class="sponsor"><img className='sposnsor-img' src="https://i.ibb.co/Gs9jfc6/Hitbullseye-Logo.png" alt="Hitbullseye-Logo" border="0" /></div>
          <div class="sponsor"><img className='sposnsor-img' src="https://i.ibb.co/K0RvKVT/legal-minds-1.png" alt="legal-minds-1" border="0" /></div>
          <div class="sponsor"><img className='sposnsor-img' src="https://i.ibb.co/zm8JQZ1/Pic-XL-Logo-01.png" alt="Pic-XL-Logo-01" border="0" /></div>
          <div class="sponsor"><img className='sposnsor-img' src="https://i.ibb.co/YW73grw/unisoft-logo.jpg" alt="unisoft-logo" border="0" /></div>
        </div>
      </div>

    </div>
  );
}

export default About;
