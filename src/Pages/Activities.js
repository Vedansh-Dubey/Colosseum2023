import React from 'react';
import "./Activities.css";
import Piratecard from "../Components/Piratecard"
import EventPage from '../Components/event_page';
const Activities = () => {
  return (
    <div>
      <EventPage 
      event_name="Techno Hunt" 
      description="Velit adipisicing in duis eu ex labore Lorem eu ipsum culpa minim aliquip incididunt. Amet cupidatat eu aute nulla ipsum quis. Enim nisi ea tempor do fugiat ut in velit laborum id commodo laborum ut ea. Quis deserunt nostrud esse excepteur. Aliquip elit Lorem aliqua in voluptate pariatur irure dolor ullamco et. Duis sunt elit dolore culpa reprehenderit officia mollit. Sint occaecat duis incididunt irure deserunt" 
      rules="Amet esse commodo tempor est laboris ipsum voluptate. Lorem in sit quis sint consequat sint elit ex elit. Aliquip ea officia minim pariatur veniam nisi non proident voluptate ipsum."
      registration="" />
      <Piratecard />
    </div>
  );
};

export default Activities;