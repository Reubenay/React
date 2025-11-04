import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import CountdownForm from './CountdownForm';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const removeEvent = (indexToRemove) => {
    setEvents(events.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app">
      <h1> Countdown Timer</h1>
      <CountdownForm onSubmit={addEvent} />
      {events.map((event, index) => (
        <div key={index} className="countdown-wrapper">
          <CountdownTimer title={event.title} targetDate={event.targetDate} />
          <button className="remove-button" onClick={() => removeEvent(index)}>
             Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
