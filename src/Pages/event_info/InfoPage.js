import React from 'react';
import EventPage from '../../Sections/event_page';
import "./InfoPage.css"

export const YouthParliament = () => {
  return (
    <div className='info'>
      <EventPage
        event_name="Youth Parliament"
        description="The objective of Youth Parliament is to strengthen the roots of democracy inculcate healthy habits <br> of discipline, tolerance of the view of others and to enable the student community to know about practices and procedures of the Parliament."
        rules=
        "You are provided with 4 bills, choose the one which suits you best. You will be divided in 2 - Ruling party & Opposition Party. Ruling Party speaks for the motion. Opposition Party speaks against the motion. "
        registration="Register from the following link <br> <a href='https://www.google.com'>Click Here</a> <br> President: Yash Chotwani - 7057100832 <br> Event Head: Megha Shivhare <br> Co-head: Bharat Shukla" />
    </div>
  );
};

export const Technohunt = () => {
  return (
    <div className='info'>
      <EventPage
        event_name="Technohunt"
        description="Velit adipisicing in duis eu ex labore Lorem eu ipsum culpa minim aliquip incididunt. Amet cupidatat eu aute nulla ipsum quis. Enim nisi ea tempor do fugiat ut in velit laborum id commodo laborum ut ea. Quis deserunt nostrud esse excepteur. Aliquip elit Lorem aliqua in voluptate pariatur irure dolor ullamco et. Duis sunt elit dolore culpa reprehenderit officia mollit. Sint occaecat duis incididunt irure deserunt"
        rules="Amet esse commodo tempor est laboris ipsum voluptate. Lorem in sit quis sint consequat sint elit ex elit. Aliquip ea officia minim pariatur veniam nisi non proident voluptate ipsum."
        registration="" />
    </div>
  );
};
