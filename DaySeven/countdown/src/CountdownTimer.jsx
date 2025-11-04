import React, { useState, useEffect } from 'react';
import './App.css';

const CountdownTimer = ({ title, targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <h2 className="countdown-title"> Countdown to {title}</h2>
      {timeLeft ? (
        <h3 className="countdown-timer">
          {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds
        </h3>
      ) : (
        <h3 className="event-started">🎊 Event Started!</h3>
      )}
      <p className="countdown-date">{new Date(targetDate).toDateString()}</p>
    </div>
  );
};

export default CountdownTimer;
