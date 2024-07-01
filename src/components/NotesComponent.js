import React from 'react';
import img1 from '../assets/img1.png'; // Assuming you are placing assets in public/assets
import notesCard from '../assets/notesCard.png'; // Assuming you are placing assets in public/assets
import './NotesComponent.css'; // Import the CSS file
import NoteCard from './NoteCard';

const NotesComponent = () => {
  return (
    <div className="notes">
      <div className="c1">
        <img src={img1} alt="img1" />
      </div>
      <div className="c2">
        <p className="inactive">All</p>
        <p className="active">Notes & Calls</p>
        <p className="inactive">Tasks</p>
        <p className="inactive">Meeting</p>
        <p className="inactive">Files</p>
      </div>
      <div className="c3">
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
      </div>
    </div>
  );
};

export default NotesComponent;
