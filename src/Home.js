import React from 'react';
import LeftIcons from './components/LeftIcons';
import TopNavbar from './components/TopNavbar';
import UserComponent from './components/UserComponent';
import NotesComponent from './components/NotesComponent';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      <LeftIcons />
     
      <div className="right">
        <TopNavbar />
        <div className="rightIn">
          <UserComponent />
          <NotesComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
