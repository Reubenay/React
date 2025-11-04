import React, { useState, useEffect } from "react";
import TimeDisplay from "./TimeDisplay";
import Controls from "./Controls";
import LapList from "./LapList";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setLaps([]);
  };
  const handleLap = () => {
    if (isRunning) setLaps([...laps, formatTime(seconds)]);
  };

  return (
    <div className="stopwatch-container">
      <h2> Stopwatch</h2>
      <TimeDisplay time={formatTime(seconds)} />
      <Controls
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        onLap={handleLap}
      />
      <LapList laps={laps} />
    </div>
  );
};

export default Stopwatch;
