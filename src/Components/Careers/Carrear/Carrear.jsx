import React, { useState } from "react";
import "./Carrear.css";
import Apply from "../Applynow/Apply"; // Import the Apply popup component

const CarDetailingJobs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="car-detailing-jobs">
      <h2>Join Our Team – Car Detailing Jobs Available!</h2>
      <p>
        Are you passionate about cars and love making them shine? We’re looking
        for dedicated individuals to join our growing car detailing team!
      </p>

      <div className="job-container">
        <div className="job-details">
          <h3>Current Open Positions:</h3>
          <p>
            <strong>Car Detailer (Full-Time / Part-Time)</strong>
          </p>
          <p>
            <strong>Location:</strong> Cardiff
          </p>
          <h4>Responsibilities:</h4>
          <ul>
            <li>🚗 Washing, waxing, and polishing vehicles</li>
            <li>🧹 Interior detailing and vacuuming</li>
            <li>🛡 Applying ceramic coatings & protective treatments</li>
          </ul>
          <h4>Requirements:</h4>
          <p>Previous experience is a plus.</p>
        </div>

        <div className="benefits">
          <h3>Why Work With Us?</h3>
          <ul>
            <li>✅ Competitive Pay</li>
            <li>✅ Flexible Hours</li>
            <li>✅ Career Growth Opportunities</li>
            <li>✅ Friendly & Supportive Team</li>
          </ul>
        </div>
      </div>

      <button className="apply-button" onClick={handleOpenPopup}>
        Apply Now
      </button>

      {/* Show Popup when 'Apply Now' is clicked */}
      {showPopup && <Apply onClose={handleClosePopup} />}
    </div>
  );
};

export default CarDetailingJobs;
