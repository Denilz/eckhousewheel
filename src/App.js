import React, { useState } from 'react';
import Wheel from './Wheel';
import Announcement from './Announcement';
import './App.css';

const App = () => {
  const [winner, setWinner] = useState(null);
  const [spinComplete, setSpinComplete] = useState(false);

  const handleSpinComplete = (winner) => {
    setWinner(winner);
    setSpinComplete(true);
  };

  const handleClose = () => {
    setSpinComplete(false);
  };

  return (
    <div className="app-container">
      <h1 className="title">Wheel of Eckhouse!</h1>
      <div class="paragraph-container">
      <p class="paragraph">עברנו כל כך הרבה ביחד... ועכשיו לחלק שחיכינו לו הכי הרבה: <u>מי ישן על המזרון ומי ישן על הרצפה</u></p>
      </div>  
      <Wheel setWinner={handleSpinComplete} /> {/* Pass handleSpinComplete as a prop */}
      {spinComplete && <Announcement winner={winner} onClose={handleClose} />}
      {winner && (
        <div className="buttons-container">
        </div>
      )}
    </div>
  );
}

export default App;
