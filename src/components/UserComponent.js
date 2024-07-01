import React from 'react';
import ProfileComponent from './ProfileComponent';
import SectionsComponent from './SectionsComponent';
import './UserComponent.css'; // Import the CSS file

const UserComponent = () => {
  return (
    <div className="row">
    <ProfileComponent />
    <SectionsComponent />
  </div>
  );
};

export default UserComponent;
