import React from "react";

const TitleInput = ({ title, onChange, charCount }) => (
  <div className="title-input">
    <label>Custom Title:</label>
    <input
      type="text"
      value={title}
      onChange={onChange}
      placeholder="Type here..."
    />
    <p>{charCount}60 characters</p>
  </div>
);

export default TitleInput;
