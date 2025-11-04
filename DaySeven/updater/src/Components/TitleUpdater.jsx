import React, { useState, useEffect } from "react";
import TitleInput from "./TitleInput";
import TitlePreview from "./TitlePreview";
import TitleControls from "./TitleControls";

const TitleUpdater = () => {
  const defaultTitle = "React App";
  const [title, setTitle] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    document.title = title ? `${defaultTitle} - ${title}` : defaultTitle;
  }, [title]);

  const handleChange = (e) => {
    const value = e.target.value.slice(0, 60);
    setTitle(value);
    setCharCount(value.length);
  };

  const handleReset = () => {
    setTitle("");
    setCharCount(0);
  };

  return (
    <div className="title-updater">
      <h2> Document Title Updater</h2>
      <TitleInput title={title} onChange={handleChange} charCount={charCount} />
      <TitlePreview defaultTitle={defaultTitle} title={title} />
      <TitleControls onReset={handleReset} />
    </div>
  );
};

export default TitleUpdater;
