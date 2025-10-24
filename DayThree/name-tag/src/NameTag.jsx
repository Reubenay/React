import { useState } from "react";
import "./NameTag.css";

function NameTag() {

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

 
  const handleDownload = () => {
    if (!name || !title || !company) {
      alert("Please fill in all fields before downloading!");
      return;
    }

    const tagText = `
--- NAME TAG ---
Hello, my name is
${name.toUpperCase()}
${title}
${company}
    `;
    alert(tagText);
  };

  return (
    <div className="page-container">
      <div className="name-tag-container">
        <h2>Name Tag </h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="job title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        {}
        <div className="preview-box">
          <p className="hello-text">Hello, my name is</p>
          <h1 className="name-text">{name ? name.toUpperCase() : "YOUR NAME"}</h1>
          <p className="title-text">{title || "Your Job Title"}</p>
          <p className="company-text">{company || "Your Company"}</p>
        </div>

        {}
        <button className="download-btn" onClick={handleDownload}>
          Download Name Tag
        </button>
      </div>
    </div>
  );
}

export default NameTag;
