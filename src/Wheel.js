import React, { useState } from 'react';
import './App.css'; // Import App.css for styling

const Wheel = ({ setWinner }) => {
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    setSpinning(true);
    setTimeout(() => {
      const participants = [
        require('./images/Untitled 3.jpg'),
        require('./images/Untitled 33.jpg'),
        require('./images/Untitled 333.jpg'),
        require('./images/Untitled 3333.jpg'),
        require('./images/Untitled 4.jpg'),
        require('./images/Untitled 5.jpg'),
        require('./images/Untitled 44.jpg'),
        require('./images/Untitled 55.jpg'),
        require('./images/Untitled 444.jpg'),
        require('./images/Untitled 4444.jpg'),
        require('./images/IMG_2572.jpg'),
      ];
      const randomIndex = Math.floor(Math.random() * participants.length);
      const finalWinner = participants[randomIndex];
      setWinner(finalWinner);
      setSpinning(false);
    }, 5000); // Adjust the duration of spinning animation
  };

  return (
    <div className="wheel-container">
      <button className="gradient-button" onClick={spinWheel} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin the wheeeeel!'}
      </button>
      <div className={`wheel ${spinning ? 'spinning' : ''}`}>
        <div className="arrow"></div> {/* Render the arrow instead of images */}
      </div>
    </div>
  );
}

export default Wheel;
