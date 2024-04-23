import React from 'react';

const Announcement = ({ winner, onClose }) => {
  return winner ? (
    <div className="announcement-overlay">
      <div className="announcement">
        <h1 className="text-1xl">Congratulations!</h1>
        <h3 className="text-5xl-">The winner of this spin is:</h3>
        <div className="winner-container">
          <img src={winner} alt="Winner" className="winner-image" />
          <button className="gradient-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Announcement;
