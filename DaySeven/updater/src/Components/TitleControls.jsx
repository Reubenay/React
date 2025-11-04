import React from "react";

const TitleControls = ({ onReset }) => (
  <button className="reset-btn" onClick={onReset}>
    Reset to Default
  </button>
);

export default TitleControls;
