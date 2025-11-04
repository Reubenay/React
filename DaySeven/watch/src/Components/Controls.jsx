import React from "react";


const Controls = ({ isRunning, onStart, onPause, onReset, onLap }) => (
  <div className="controls">
    <button onClick={onStart} disabled={isRunning}>
      Start
    </button>
    <button onClick={onPause} disabled={!isRunning}>
      Pause
    </button>
    <button onClick={onReset}>Reset</button>
    <button onClick={onLap} disabled={!isRunning}>
      Lap
    </button>
  </div>
);

export default Controls;
