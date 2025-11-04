import React from "react";

const TitlePreview = ({ defaultTitle, title }) => (
  <p className="title-preview">
    
    {title ? `  ${title}` : ""}
  </p>
);

export default TitlePreview;
