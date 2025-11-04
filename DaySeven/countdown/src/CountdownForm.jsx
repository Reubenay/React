import React, { useState } from 'react';

const CountdownForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date) {
      onSubmit({ title, targetDate: date });
      setTitle('');
      setDate('');
    }
  };

  return (
    <form className="countdown-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Start Countdown</button>
    </form>
  );
};

export default CountdownForm;
