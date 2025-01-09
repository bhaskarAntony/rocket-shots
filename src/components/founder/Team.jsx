import React from 'react';
import './style.css';  // CSS for styling

import image1 from './raks.png';
import image2 from './likith1.png';
import image3 from './vikas.png';
import image4 from './adarsh.png';

function Team() {
  return (
    <div className="gallery-container">
      <div className="gallery">
        <div className="gallery-item" style={{ transform: 'rotateY(0deg)' }}>
          <img src={image1} alt="Team Member 1" />
        </div>
        <div className="gallery-item" style={{ transform: 'rotateY(90deg)' }}>
          <img src={image2} alt="Team Member 2" />
        </div>
        <div className="gallery-item" style={{ transform: 'rotateY(180deg)' }}>
          <img src={image3} alt="Team Member 3" />
        </div>
        <div className="gallery-item" style={{ transform: 'rotateY(270deg)' }}>
          <img src={image4} alt="Team Member 4" />
        </div>
      </div>
    </div>
  );
}

export default Team;
