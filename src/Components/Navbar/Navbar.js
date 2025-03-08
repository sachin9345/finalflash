import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="story-navbar">
      <div className="story-logo">LOGO</div>
      <div className="story-title">Title here</div>
      <div className="story-actions">
        <button className="story-preview-btn">Preview</button>
        <button className="story-share-btn">Share</button>
      </div>
    </div>
  );
};

export default Navbar;
