import React from "react";
import "./StateCard.css";

function StateCard({ state, capital, region, population, children }) {
  const regionClass = region ? region.toLowerCase() : "";

  return (
    <div className={`state-card ${regionClass}`}>
      <h2>{state}</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population}</p>

      {children && (
        <div className="landmark">
          <strong>Landmark:</strong> {children}
        </div>
      )}
    </div>
  );
}

export default StateCard;
