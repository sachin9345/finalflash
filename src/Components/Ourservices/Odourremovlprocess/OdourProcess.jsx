import React, { useEffect } from "react";
import a from "./a.png";
import b from "./b.png";
import c from "./c.png";
import d from "./d.png";
import e from "./e.png";
import "./OdourProcess.css";

const odourSteps = [
  {
    title: "Deep Interior Cleaning",
    description: "We thoroughly vacuum carpets, seats, and mats to remove dirt and debris.",
    img:a
  },
  {
    title: "Fabric & Upholstery Treatment",
    description: "Shampooing and steam cleaning to extract trapped odours.",
    img:b
  },
  {
    title: "Steam Air Vent Sanitization",
    description: "Cleans the air conditioning system to remove bacteria and stale odours.",
    img:c
  },
  {
    title: "Final Fragrance Application",
    description: "Leaves your car with a light, refreshing scent.",
    img:d
  },
  {
    title: "Ozone Treatment (Optional)",
    description: "A powerful, chemical-free method that neutralizes even the toughest smells.",
    img:e
  }
];

const OdourProcess = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".odoursmallcontainer").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <h2 className="odour-removal-title">Our Odour removal process</h2>
    <div className="odourcontainer">
      {odourSteps.map((step, index) => (
        <div className="odoursmallcontainer" key={index}>
          <img src={step.img} alt="" />
          <div className="insidetext">
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default OdourProcess;
