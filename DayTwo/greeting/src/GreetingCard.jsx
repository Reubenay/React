import React from 'react';

function GreetingCard(props) {
  const { name, message, color = 'red' } = props;

  const cardStyle = {
    backgroundColor: color,
    padding: '20px',
    borderRadius: '8px',
    color: '#fff',
    marginBottom: '10px',
    maxWidth: '300px'
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}

export default GreetingCard;
