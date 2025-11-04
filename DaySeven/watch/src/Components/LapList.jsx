import React from "react";


const LapList = ({ laps }) => {
  if (laps.length === 0) return null;
  return (
    <div className="lap-list">
      <h3>Lap Times</h3>
      <ul>
        {laps.map((lap, i) => (
          <li key={i}>
            Lap {i + 1}: {lap}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LapList;
