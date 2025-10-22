import React from "react";
import StateCard from "../StateCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        Height: "100vh",
        width: "100vw",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <StateCard
        state="Lagos"
        capital="Ikeja"
        region="South"
        population="14 million"
      >
        National Theatre
      </StateCard>

      <StateCard
        state="Kano"
        capital="Kano"
        region="North"
        population="13 million"
      >
        Gidan Rumfa Palace
      </StateCard>

      <StateCard
        state="Enugu"
        capital="Enugu"
        region="East"
        population="5 million"
      >
        Nike Lake Resort
      </StateCard>

      <StateCard
        state="Oyo"
        capital="Ibadan"
        region="West"
        population="8 million"
      >
        Cocoa House
      </StateCard>
    </div>
  );
}

export default App;
