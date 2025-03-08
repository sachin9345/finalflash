import React from "react";
import "./OdourRemoval.css"; // Import the scoped CSS file
import odour from "./odour.png";

export const OdourRemoval = () => {
  return (
    <section className="odour-removal-container">
      <h2 className="odour-removal-title">Professional Odour Removal</h2>
      <div className="odour-removal-content">
        <img
          src={odour}
          alt="Odour Removal Service"
          className="odour-removal-image"
        />
        <div className="odour-removal-text">
          <h3>Odour Removal</h3>
          <p>
            Get rid of unwanted smells and enjoy a fresh, clean car interior with our 
            expert Odour Removal Service. We use advanced techniques to eliminate 
            stubborn odours caused by smoke, pets, food spills, and mould, ensuring 
            a healthier and more pleasant driving experience.
          </p>
        </div>
      
      </div>
      <div className="odour-removal-features">
          <ul>
            <li>Eliminates odours at the source   –   We don’t just mask smells; we remove them completely.</li>
            <li>Safe & eco-friendly solutions       –   No harmful chemicals, safe for children and pets..</li>
            <li>Long-lasting freshness                –  Keeps your car smelling clean for weeks.</li>
            <li>Advanced techniques                 –   Ozone treatment, steam cleaning, and antibacterial   </li>
          </ul> 
        </div>
    </section>
  );
};
