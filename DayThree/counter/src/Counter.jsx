import React, { useState } from "react";
import "./Counter.css"; 

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>
      <div className="counter-buttons">
        <button className="btn" onClick={increment}>+</button>
        <button className="btnd" onClick={decrement}>-</button>
        <button className="btnr" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
